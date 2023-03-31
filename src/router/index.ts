import { createRouter, createWebHistory } from 'vue-router';
import FactoryList from '../components/FactoryList.vue';
import BotList from '../components/BotList.vue';
import FactoryDetail from '../components/FactoryDetail.vue';
import BotDetail from '../components/BotDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'FactoryList', component: FactoryList},
        {path:'/botlist/:id', name: 'BotList', component: BotList},
        {path:'/bot/:id', name: 'BotDetail', component: BotDetail},
        {path:'/factory/:id', name: 'FactoryDetail', component: FactoryDetail},
    ]
});

export default router