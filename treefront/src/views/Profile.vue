<template>
    <div>
        <button class="login-button" @click="login">getUserinfo</button>
        {{ user }}
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
const {user, getUserInfo} = useUserStore();


</script>

<style scoped>
.login-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>