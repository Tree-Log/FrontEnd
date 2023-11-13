<template>
    <div>
        <h4>Login</h4>
        <label>email</label> <br>
        <input v-model="email" type="text" />
        <br>
        <label>password</label> <br>
        <input v-model="password" type="text" />
        <br>
        <button class="login-b₩utton" @click="login">login</button>
    </div>
</template>

<script setup>
import {useJWTStore} from "@/stores/jwt.js"
import {ref} from "vue"

const jwtStore = useJWTStore();
const email = ref("");
const password = ref("");

const login = () => {
    jwtStore.loginApi(email.value, password.value);
}

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