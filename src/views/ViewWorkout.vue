<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- App msg -->
    <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-md shadow-md bg-light-grey">
      <p class="text-at-light-green">{{statusMsg}}</p>
      <p class="text-red-500">{{errorMsg}}</p>
    </div>
    <!-- section card with actions -->
    <div v-if="dataLoaded">
      <!-- general workout info -->
      <div class="flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative">
        <div v-if="user" class="flex absolute left-2 top-2 gap-x-2">
          <div class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg" @click="editMode">
            <img class="h-3.5 w-auto" src="@/assets/images/pencil-light.png">
          </div>
          <div class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg" @click="deleteWorkout" >
            <img class="h-3.5 w-auto" src="@/assets/images/trash-light.png">
          </div>
        </div>

        <img v-if="data.workoutType === 'cardio'" class="h-24 w-auto" src="@/assets/images/running-light-green.png" alt=""/>
        <img v-else class="h-24 w-auto" src="@/assets/images/dumbbell-light-green.png" alt=""/>

        <span class="mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md">
          {{data.workoutType}}
        </span>

        <div class="w-full mt-6">
          <input v-if="edit" v-model="data.workoutName" type="text" class="p-2 w-full text-gray-500 focus:outline-none"/>
          <h1 v-else class="text-at-light-green text-2xl text-center">{{data.workoutName}}</h1>
        </div>
      </div>

      <!-- Excercises -->
      <div class="mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md text-at-light-green">
      <!-- Strenght training -->
      <div v-if="data.workoutType === 'strength'" class="flex flex-col gap-y-4 w-full">
        <div class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row" v-for="(item,index) in data.exercises" :key="index">
          <div class="flex flex-2 flex-col md:w-1/3">
            <label for="exercise-name" class="mb-1  text-sm text-at-light-green">
              Exercise
            </label>
            <input v-if="edit" id="exercise-name" v-model="item.exercise" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.exercise}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="sets" class="mb-1  text-sm text-at-light-green">
              Sets
            </label>
            <input v-if="edit" id="sets" v-model="item.sets" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.sets}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="reps" class="mb-1  text-sm text-at-light-green">
              Reps
            </label>
            <input v-if="edit" id="reps" v-model="item.reps" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.reps}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="weight" class="mb-1  text-sm text-at-light-green">
              Weight
            </label>
            <input v-if="edit" id="weight" v-model="item.weight" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.weight}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="rpe" class="mb-1  text-sm text-at-light-green">
              RPE
            </label>
            <input v-if="edit" id="rpe" v-model="item.rpe" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.rpe}}</p>
          </div>
          <img v-if="edit" @click="deleteExercise(item.id)" class="absolute h-4 w-auto -left-5 cursor-pointer" src="@/assets/images/trash-light-green.png" alt=""/> <!-- todo doradit za admina a jelecanin -->
        </div>
        <button type="button" v-if="edit" @click="addExercise" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green">Add Exercise </button>
      </div>

      <!-- Cardio training -->
      <div v-else class="flex flex-col gap-y-4 w-full">
        <div class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row" v-for="(item,index) in data.exercises" :key="index">
          <div class="flex flex-2 flex-col md:w-1/3">
            <label for="cardioType" class="mb-1  text-sm text-at-light-green">
              Type
            </label>
            <select v-if="edit" id="cardioType" v-model="item.cardioType" class="p-2 w-full text-gray-500 focus:outline-none" type="text">
              <option value="#">Select type</option>
              <option value="run">Run</option>
              <option value="walk">Walk</option>
            </select>
            <p v-else>{{item.cardioType}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="distance" class="mb-1  text-sm text-at-light-green">
              Distance
            </label>
            <input v-if="edit" id="distance" v-model="item.distance" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.distance}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="duration" class="mb-1  text-sm text-at-light-green">
              Duration
            </label>
            <input v-if="edit" id="duration" v-model="item.duration" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.duration}}</p>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="pace" class="mb-1  text-sm text-at-light-green">
              Pace
            </label>
            <input v-if="edit" id="pace" v-model="item.pace" class="p-2 w-full text-gray-500 focus:outline-none" type="text"/>
            <p v-else>{{item.pace}}</p>
          </div>
          <img v-if="edit" @click="deleteExercise(item.id)" class="absolute h-4 w-auto -left-5 cursor-pointer" src="@/assets/images/trash-light-green.png" alt=""/> <!-- todo doradit za admina a jelecanin -->
        </div>
        <button type="button" @click="addExercise" v-if="edit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green">Add Exercise </button>
      </div>
      </div>

      <!-- Update -->
      <button v-if="edit" @click="update" type="button" class="mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2
      border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green">Update Workout</button>
    </div>
  </div>
</template>

<script>
import {supabase} from '../supabase/init'
import {ref, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router';
import store from '../store';
import {uid} from 'uid'

export default {
  name: "view-workout",
  setup() {
    // Create data / vars to be used
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();
    const router = useRouter();
    const user = computed(()=>store.state.user);
    // Get current Id of route
    const currentId = route.params.workoutId;

    // Get workout data
    const getData = async () => {
      try {
        const { data: workouts, error } = await supabase.from("workouts").select("*").eq('id', currentId);
        if (error) throw error;
        data.value = workouts[0];
        dataLoaded.value = true;
        console.log(data.value);
        console.log("userData",user)
      } catch (error) {
        errorMsg.value = error.message
        setTimeout(() => {errorMsg.value = false;}, 5000)
      }
    };
    getData();

    // Delete workout
    const deleteWorkout = async () =>{
      try{
        const {error} = await supabase.from('workouts').delete().eq('id', currentId);
        if (error) throw error;
        router.push({name: 'Home'})
      }
      catch(error){
        errorMsg.value =  `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false
        }, 5000)
      }
    };
    // Edit mode
    const edit = ref(null);

    const editMode = () =>{
      edit.value = !edit.value;

    }
    // Add exercise
    const addExercise = () => {
      if (data.value.workoutType === 'strength'){
        data.value.exercises.push({
          id:uid(),
          exercise:"",
          sets:"",
          reps:"",
          weight:"",
          rpe:""
        });
        return
      }
      data.value.exercises.push({
        id:uid(),
        cardioType:"",
        distance:"",
        duration:"",
        pace:""
      })
    }

    // Delete exercise
     const deleteExercise = (id) => {
      if (data.value.exercises.length > 1){
        data.value.exercises = data.value.exercises.filter((exercise) => exercise.id !== id)
        return ;
      }
      errorMsg.value = "Error: cannot remove,needs to have atleast 2 exercises"
      setTimeout(()=> {
        errorMsg.value = false
      },5000)
    }

    // Update Workout
    const update = async () => {
      try {
        const {error} = await supabase.from('workouts').update({
          workoutName: data.value.workoutName,
          exercises: data.value.exercises
        }).eq('id', currentId);
        if(error) throw error;
        edit.value = false;
        statusMsg.value = "Succes: workout updated"
        setTimeout (() => {
          statusMsg.value = false
        },5000)
      }
      catch(error){
        errorMsg.value =  `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false
        }, 5000)
      }
    }

    return {statusMsg, data, dataLoaded, errorMsg,edit, editMode, user,deleteWorkout,addExercise,deleteExercise,update};
  },
};
</script>
