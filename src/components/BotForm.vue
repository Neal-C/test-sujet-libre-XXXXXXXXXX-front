<script setup lang="ts">
import { ref } from "vue";
import AXIOS_instance from "../axios";
type Factory = {id: number, factoryName: string};

const props = defineProps<{factories:Factory[]|null}>();

const factory = ref<HTMLInputElement | null>(null);
const name = ref<HTMLInputElement | null>(null);
const description = ref<HTMLInputElement | null>(null);

const NAME_TO_ID_MAP = new Map(props.factories?.map((factory)=> {
    return [factory.factoryName, factory.id]
}));



function createBot() {

    if(!name.value || !description.value || !factory.value){
        return;
    }

	AXIOS_instance.post("bot/", {
		botName: name.value.value,
		function: description.value.value,
		botFactory: NAME_TO_ID_MAP.get(factory.value?.value!),
	});
}
console.log(name);
console.log(description);
console.log(factory);
</script>

<template>
	<section className="mt-3 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
		<form @submit.prevent="createBot">
			<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
				<div>
					<label className="text-gray-700 dark:text-gray-200" for="name"> Enter a name </label>
					<input
                    ref="name"
						id="name"
						required
						type="text"
						className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
				</div>

				<div>
					<label className="text-gray-700 dark:text-gray-200" for="description"> Maybe a description </label>
					<input
                    ref="description"
						id="description"
						type="text"
						className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
				</div>
				<div>
					<label className="text-gray-700 dark:text-gray-200" for="factory"> From Factory</label>
					<input
                    ref="factory"
						id="factory"
						type="text"
						className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
				</div>
			</div>

			<div className="flex justify-end mt-6">
				<button
					type="submit"
					className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
					Save
				</button>
			</div>
		</form>
	</section>
</template>
