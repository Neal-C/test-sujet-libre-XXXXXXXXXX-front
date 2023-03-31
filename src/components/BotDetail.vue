<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AXIOS_instance from '../axios';

defineProps<{
    botName: string,
    function: string,
    date_added: Date | string,
    botFactory: number
}>();

const route = useRoute();
onMounted(()=> {
	AXIOS_instance.get(`bot/${route.params.id}`).then((response) => {
		console.log(response);
	})
})
</script>

<template>
	<section className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
		<div className="flex justify-center -mt-16 md:justify-end">
			<img
				className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
				alt="symbol"
				src="https://picsum.photos/200/300" />
		</div>

		<h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
			Bot name : name
		</h2>
		<h3 className="mt-2 font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
			From factory : factory
		</h3>

		<p className="mt-2 text-gray-600 dark:text-gray-200">{}</p>

		<div className="flex justify-end mt-4">
			<router-link
				to="/"
				className="mr-2 inline-flex ring-1 ring-slate-3000 rounded shadow-md items-center justify-between p-3 bg-gradient-to-r from-red-300 to-orange-300 mt-10 mb:mt-20">
				<span>Go back to the list</span>
			</router-link>
		</div>
	</section>
</template>

<style scoped></style>
