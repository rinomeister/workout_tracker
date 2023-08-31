<template>
  <div class="p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Weight Tracker</h2>
    <div class="mb-4">
      <label for="weight" class="block mb-1">Enter Weight:</label>
      <input v-model="weight" type="number" id="weight"
             class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
    </div>
    <div class="mb-4">
      <label for="date" class="block mb-1">Select Date:</label>
      <input v-model="selectedDate" type="date" id="date"
             class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
    </div>
    <button @click="addWeightEntry" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Weight Entry</button>
    <h3 class="text-lg font-semibold mt-4">Weight History</h3>
    <ul class="list-disc list-inside">
      <li v-for="entry in weightHistory" :key="entry.id">
        {{ entry.weight }} kg - {{ entry.date }}
        <button @click="deleteWeightEntry(entry.id)" class="text-red-500 ml-2">Delete</button>
      </li>
    </ul>
    <p v-if="statusMsg" class="text-green-500 mt-2">{{ statusMsg }}</p>
    <p v-if="errorMsg" class="text-red-500 mt-2">{{ errorMsg }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { supabase } from '../supabase/init';
import { uid } from 'uid';

export default {
  name: "Weight Tracker",
  setup() {
    // Create data
    const weight = ref("");
    const selectedDate = ref("");
    const weightHistory = ref([]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);
    const user = supabase.auth.user();

    // Add weight entry
    const addWeightEntry = async () => {
      try {
        const { error } = await supabase.from('bodyweight').insert([
          {
            id:uid(),
            created_by: user.id,
            weight: weight.value,
            created_at: selectedDate.value,
          }
        ]);
        if (error) throw error;
        statusMsg.value = 'Success: Weight entry added!';
        weight.value = "";
        selectedDate.value = "";
        fetchWeightHistory();
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };

    // Fetch weight history
    const fetchWeightHistory = async () => {
      try {
        const { data, error } = await supabase
          .from('bodyweight')
          .select('weight, date')
          .order('date', { ascending: false })
          .limit(10);
        if (error) throw error;
        weightHistory.value = data;
      } catch (error) {
        console.error('Error fetching weight history:', error.message);
      }
    };

    // Delete weight entry (similar to your deleteExercise function)
    const deleteWeightEntry = async (id) => {
      try {
        const { error } = await supabase.from('bodyweight').delete().eq('id', id);
        if (error) throw error;
        fetchWeightHistory();
        statusMsg.value = 'Success: Weight entry deleted!';
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };

    // Other functions from your original code could remain unchanged if not directly related to the weight tracker

    return {
      weight,
      selectedDate,
      weightHistory,
      statusMsg,
      errorMsg,
      addWeightEntry,
      fetchWeightHistory,
      deleteWeightEntry
      // Other functions and data from your original setup can be included here
    };
  },
};
</script>

