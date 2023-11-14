<template>
    <div class="body">
        <div class="login-container">
            <div class="title">Login</div>
            <InputForm
            :name="emailProp.name"
            :type="emailProp.type"
            :placeholder="emailProp.placeholder"
            :message="emailProp.message"
            :color="emailProp.color"
            @send-data="emailInput"
            />
            <InputForm
            :name="passwordProp.name"
            :type="passwordProp.type"
            :placeholder="passwordProp.placeholder"
            :message="passwordProp.message"
            :color="passwordProp.color"
            @send-data="passwordInput"
            />
            <div class="blank">
            </div>
            <button class="button login-button" @click="login">login</button>
            <router-link :to="{ name: 'regist' }">
                <button class="button regist-button">regist</button>
            </router-link>
            <br>
            <router-link to="profile">profile</router-link>
            <router-link to="/">home</router-link>
        </div>
    </div>
</template>

<script setup>
import {useJWTStore} from "@/stores/jwt.js"
import { ref } from "vue"
import { useRouter } from "vue-router";
import InputForm from "../components/Login/InputForm.vue";

const jwtStore = useJWTStore();
const email = ref("");
const password = ref("");

const emailProp = ref({ name: "email", type: "text", placeholder: "이메일을 입력해 주세요", message: "dkrl", color: "" });
const passwordProp = ref({ name: "password", type: "password", placeholder: "비밀번호를 입력해 주세요", message: "dd", color: "" });

const emailInput = (inputValue) => {
    email.value = inputValue;
}
const passwordInput = (inputValue) => {
    password.value = inputValue;
}
const login = () => {
    jwtStore.loginApi(email.value, password.value);
}

</script>

<style scoped>
.body{
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-container{
    width: 500px;
    height: 700px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border : solid 1px rgba(150, 150, 150, 0.6);
}
.title{
    width: 355px;
    height: 43px;
    font-size: 20px;
    margin-bottom: 60px;
}
.button{
    width: 355px;
    height: 43px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    border-radius: 5px;
    border: 0;
}
.button:hover{
    background-color:rgba(255, 192, 0);
    color: white;
    cursor: pointer;
}
.login-button {
    background-color: darkgreen;
    color: white;
}
.regist-button {
    background-color: darkgreen;
    color: white;
}
.blank{
    height: 70px;
}
</style>