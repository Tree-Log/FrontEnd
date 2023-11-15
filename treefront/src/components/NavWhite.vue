<template>
    <div class="nav-container">
        <div class="title">
            TITLE
        </div>
        <div class="button-container">
                <RouterLink to="/board" class="nav-link">Board</RouterLink> 
                <RouterLink v-if="!isLoggedIn" to="/login" class="nav-link">Login</RouterLink> 
                <RouterLink v-if="isLoggedIn" to="/profile" class="nav-link">Profile</RouterLink>
                <a v-if="isLoggedIn" class="nav-link" @click="logout">Logout</a> 
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserInfo } from '../utils/api/userapi';

const isLoggedIn = ref(false);

onMounted(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
        getUserInfo(jwtToken)
        .then(() => {
            isLoggedIn.value = true;
        })
    }
})

const logout = () => {
    localStorage.clear();
    isLoggedIn.value = false;
}

</script>

<style scoped>
.nav-container{
    width: 55%;
    height: 12%;
    min-width: 600px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title{
    display: flex;
    align-items: center;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
}
.button-container{
    font-size: 17px;
    display: flex;
    gap: 20px; 
}
.nav-link {
  color: rgba(255, 192, 0);
  text-decoration: none; 
}
.nav-link:hover {
    cursor: pointer;
  text-decoration: underline;
}
</style>