<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- status message -->
    <div v-if="statusMsg || errorMsg" class="mb-10 p-4 bg-light-grey rounded-md shadow-lg">
      <p class="text-at-light-green">{{statusMsg}}</p>
      <p class="text-red-500">{{errorMsg}}</p>
    </div>

    <!-- create form -->
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <!-- form -->
      <form @submit.prevent="createWorkout" class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green">Record your workout</h1>

        <!-- workout name input -->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-green">Workout name</label>
          <input type="text" required class="p-2 text-gray-500 focus:outline-none" id="workout-name" v-model="workoutName">
        </div>
        <!-- workout type input -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-green">Workout type</label>
          <select id="workout-type" required class="p-2 text-gray-500 focus:outline-none" v-model="workoutType" @change="workoutChange">
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <!-- strenght training inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" v-for="(item,index) in exercises" :key="index">
            <div class="flex flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-at-light-green">Exercise</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.exercise">
            </div>
          
          <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-at-light-green">Sets</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.sets">
          </div>
          <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-at-light-green">Reps</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.reps">
          </div>
          <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-at-light-green">Weight in KG</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.weight">
          </div>
          <div class="flex flex-col flex-1">
              <label for="rpe" class="mb-1 text-sm text-at-light-green">RPE</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.rpe">
          </div>
          <img @click="deleteExercise(item.id)" src="@/assets/images/trash-light-green.png" alt="" class="h-4 w-auto absolute -left-5 cursor-pointer"/>
          <button @click="addExercise" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green" type="button">Add exercise</button>
        </div>
        </div>

        <!-- cardio training inputs -->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" v-for="(item,index) in exercises" :key="index">
            <div class="flex flex-col md:w-1/3">
              <label for="cardio-type" class="mb-1 text-sm text-at-light-green">Type</label>
              <select id="cardio-type" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.cardioType">
                <option value="#">Select type</option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
              </select>
            </div>
          <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-at-light-green">Distance</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.distance">
          </div>
          <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-at-light-green">Duration</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.duration">
          </div>
          <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-at-light-green">Pace</label>
              <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.pace">
          </div>
          <img @click="deleteExercise(item.id)" src="@/assets/images/trash-light-green.png" alt="" class="h-4 w-auto absolute -left-5 cursor-pointer"/>
          <button @click="addExercise" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green" type="button">Add exercise</button>
        </div>
        </div>
      <button  class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green" type="submit">Record workout</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {uid} from 'uid'
import {supabase} from '../supabase/init'


export default {
  name: "create",
  setup() {
    // Create data
    const workoutName = ref("");
    const workoutType = ref("select-workout");
    const exercises = ref([1]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);
    const user = supabase.auth.user();

    // Add exercise
    const addExercise = () => {
      if (workoutType.value === 'strength'){
        exercises.value.push({
          id:uid(),
          exercise:"",
          sets:"",
          reps:"",
          weight:"",
          rpe:"",
          createdBy: user.email
        });
        return
      }
      exercises.value.push({
        id:uid(),
        cardioType:"",
        distance:"",
        duration:"",
        pace:"",
        createdBy: user.email
      })
    }
    // Delete exercise
    const deleteExercise = (id) => {
      if (exercises.value.length > 1){
        exercises.value = exercises.value.filter((exercise) => exercise.id !== id)
        return ;
      }
      errorMsg.value = "Error: cannot remove,needs to have atleast 2 exercises"
      setTimeout(()=> {
        errorMsg.value = false
      },5000)
    }

    // Listens for chaging of workout type input
    const workoutChange = () => {
      exercises.value = [];
      addExercise()

    }
    // Create workout
    const createWorkout = async () => {
      try{
        const {error} = await supabase.from('workouts').insert([
          {
            workoutName: workoutName.value,
            workoutType: workoutType.value,
            exercises: exercises.value
          }
        ]);
        if (error) throw error;
        statusMsg.value = 'Sucess: workout created :D'
        workoutName.value = null;
        workoutType.value = "select-workout";
        exercises.value = [];
        setTimeout(()=>{
          statusMsg.value = false;
        },5000);
      }
      catch(error){
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(()=>{
          errorMsg.value = false;
        },5000);
      }
    }

    return {workoutName,workoutType,exercises,statusMsg,errorMsg,addExercise,workoutChange,deleteExercise,createWorkout};
  },
};
</script>
