<template>
    <div class="sidebar" id="sidebarino" :class="{ 'collapsed': sidebarCollapsed}">
        <h1><!-- TITLE SIDEBARA -->
            <span v-if="collapsed">
            <div>AJ</div>
            </span>
            <span v-else> 
            <img class="w-14" src="../assets/images/dumbbell-light.png" />
            <h1 class="text-lg">AJ Training Log</h1></span>
        </h1>
        
        <!-- :to="{name:'Home'}" -->
        <SidebarLink class="gap-x-5 cursor-pointer" to="/" icon="fas fa-home">Home</SidebarLink> 
        <SidebarLink v-if="user" class="gap-x-5 cursor-pointer" :to="{name:'Create'}" icon="fas fa-square-plus">Create</SidebarLink>
        <SidebarLink v-if="user" class="gap-x-5 cursor-pointer" to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
        <SidebarLink v-if="user" class="gap-x-5 cursor-pointer" to="/friends" icon="fas fa-users">Friends</SidebarLink>
        <SidebarLink v-if="user" class="gap-x-5 cursor-pointer" to="/image" icon="fas fa-image">Images</SidebarLink>
        <SidebarLink v-if="!user" class="gap-x-5 cursor-pointer" :to="{name:'Login'}" icon="fas fa-sign-in">Login</SidebarLink>
        <SidebarLink v-if="!user" class="gap-x-5 cursor-pointer" :to="{name:'Register'}" icon="fas fa-user-plus">Register</SidebarLink>
        <li v-if="user" @click="logout" class="cursor-pointer">logout</li>
    <span class="collapse-icon" id="sidebar-collapser" @click="toggleSidebarino" :class="{ 'rotate-180': collapsed}"><!-- IKONA ZA KOLLAPS -->
        <i class="fa-solid fa-angles-left"></i>
    </span>
    </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth} from './stateSidebar'
import SidebarLink from './SidebarLink.vue'
import {supabase} from '../supabase/init'
import {useRouter} from 'vue-router'
import store from '../store/index'
import {computed} from 'vue'
export default {
    components:{SidebarLink},
    data() {
        return {
            sidebarCollapsed: false,
        }
    },
    methods:{
        toggleSidebarino(){
            this.sidebarCollapsed = !this.sidebarCollapsed
        }
    },
    setup() {
        const router = useRouter();
        const user = computed(()=>store.state.user);

        const logout = async  () => {
            await supabase.auth.signOut();
            router.push({name: 'Home'});
        }

        return { collapsed, toggleSidebar, sidebarWidth,logout,user}
    },
}
</script>

<style>
:root {
    --sidebar-bg-color: #FC7534;
    --sidebar-item-hover: #272727;
    --sidebar-item-active: #272727;
}
</style>

<style scoped>
.sidebar{
    color: white;
    background: var(--sidebar-bg-color);
    
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    
    transition: 0.1s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255,255,255,0.7);
    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>