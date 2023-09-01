<template>
  <div class="p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4 ">Weight Tracker</h2>
    <div class="mb-4">
      <label for="weight" class="block mb-1 ">Enter Weight:</label>
      <input v-model="weight" type="number" id="weight"
             class="px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 " />
    </div>
    <button @click="addWeightEntry" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Weight Entry</button>
    <h3 class="text-lg font-semibold mt-4 ">Weight History</h3>
    <ul class="list-disc list-inside ">
      <li v-for="entry in weightHistory" :key="entry.id">
        {{ entry.weight }} kg - {{ entry.created_at }}
        <button @click="deleteWeightEntry(entry.id)" class="text-red-500 ml-2">Delete</button>
      </li>
    </ul>
    <h2 class="">Average Weight: {{ calculateAverageWeight() }} kg</h2>
    
    <p v-if="statusMsg" class="text-green-500 mt-2">{{ statusMsg }}</p>
    <p v-if="errorMsg" class="text-red-500 mt-2">{{ errorMsg }}</p>
    <canvas ref="chartCanvas" class="chart-canvas p-4 bg-gray-100 rounded-lg shadow-md"></canvas>
  </div>
</template>

<script>
import { ref, onMounted  } from 'vue';
import { supabase } from '../supabase/init';
import {uid} from 'uid'
import Chart from 'chart.js';

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
    const chartCanvas = ref(null);

     onMounted(() => {
      fetchWeightHistory();
    });

    const addWeightEntry = async () => {
      try {
        const generatedUid = uid(); 
        const numericalId = parseInt(generatedUid.replace(/\D/g, ''));
        const { error } = await supabase.from('bodyweight').insert([
          {
            id:numericalId,
            created_by: user.id,
            weight: weight.value,
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

     const fetchWeightHistory = async () => {
      try {
        const { data, error } = await supabase
        .from('bodyweight')
        .select('id, weight, created_at')
        .eq('created_by', user.id)
        .order('created_at', { ascending: false });


        if (error) {
          console.error('Error fetching weight history:', error.message);
        } else {
          weightHistory.value = data.map(entry => ({
            id:entry.id,
            weight: entry.weight,
            created_at: formatDate(new Date(entry.created_at)), 
          }));
        }
      } catch (error) {
        console.error('Error fetching weight history:', error.message);
      }
      createChart();
    };

     const createChart = () => {
      const chartData = {
        labels: weightHistory.value.map(entry => entry.created_at),
        datasets: [
          {
            label: 'Weight History',
            data: weightHistory.value.map(entry => entry.weight),
            fill: false,
            borderColor: '#E26310',
            tension: 0.4,
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      const ctx = chartCanvas.value.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    };


     const calculateAverageWeight = () => {
      if (weightHistory.value.length === 0) {
        return 0; 
      }

      const totalWeight = weightHistory.value.reduce((total, entry) => total + entry.weight, 0);
      const averageWeight = totalWeight / weightHistory.value.length;
      return averageWeight.toFixed(2); // Display with two decimal places
    };

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


     const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    return { weight,selectedDate,weightHistory,statusMsg,errorMsg,addWeightEntry,fetchWeightHistory,deleteWeightEntry,calculateAverageWeight,chartCanvas};
  },
};
</script>

<style>
.chart-canvas {
  max-width: 50%;
  max-height: 50%;
}
</style>

