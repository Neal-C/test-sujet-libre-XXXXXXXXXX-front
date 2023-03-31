<script setup lang="ts">
import AXIOS_instance from '../axios'
import { onMounted, ref } from 'vue';
type Factory = {id: number, factoryName: string}
    const factories = ref<Factory[]|null>(null);
    onMounted(() => {
        AXIOS_instance.get('factory/')
        .then((response) => {
            factories.value = response.data.results;
            console.log(response.data.results);
        })
    })
</script>

<template>
    <ul role='list' className='mt-10 max-w-lg mx-auto min-w-[300px]'>
        <li v-for="{id, factoryName} of factories"
			className='
    [&:nth-child(1n+1)]:bg-yellow-200
    [&:nth-child(2n+2)]:bg-cyan-300
    [&:nth-child(3n+3)]:bg-gradient-to-r
    [&:nth-child(3n+3)]:from-violet-500
    [&:nth-child(3n+3)]:to-fuchsia-500

      relative mt-5 p-6 text-gray-900 rounded shadow-md transition-transform hover:-translate-y-2 will-change-transform'>
			<h3 className='relative flex justify-between align-center'>
				<span className='text-xl mb-2 font-medium'>{{factoryName}}</span>
				<router-link to="/botlist/{{id}}" className='relative z-10 top-[6px] pl-4 text-sm cursor-pointer'>
					#DetailView
				</router-link>
			</h3>
			<span className='mr-1 relative z-10'>
				#{{ factoryName }}
			</span>
			<span

				className=' ml-1 relative z-10 cursor-pointer'>
				#Delete
			</span>
		</li>
	</ul>
</template>
