<template>
    <div class="body">
        <div class="login-container">
            <div class="title">Login</div>
            <InputForm
            from="email"
            @send-data="emailInput"
            />
            <InputForm
            from="password"
            @send-data="passwordInput"
            />
            <div class="blank">
            </div>
            <button class="button login-button" @click="login">login</button>
            <router-link :to="{ name: 'regist' }">
                <button class="button regist-button">regist</button>
            </router-link>
            <RouterLink to="/" class="link">Home</RouterLink> 
        </div>
    </div>
</template>

<script setup>
import InputForm from "../components/Login/InputForm.vue";
import errorHandle from "../utils/errorHandleUtil";

import { useRouter } from "vue-router";
import { ref } from "vue"
import { useFormStore } from '@/stores/formStore';
import { loginApi } from "@/utils/api/userapi";
import { checkEmail, checkLength } from "../utils/inputcheck/userInputUtil";
import { Length_ERROR, EMAIL_ERROR } from "../utils/errorMessageUtil";
import { ERROR_COLOR } from "../utils/colorCodeUtil";

const router = useRouter();
const formStore = useFormStore();

const emailValue = ref("");
const passwordValue = ref("");

const emailCheck = ref(false);
const passwordCheck = ref(false);

const emailInput = (inputValue) => {
    emailValue.value = inputValue;
    if (checkEmail(emailValue.value)) {
        formStore.setEmail("", "");
        emailCheck.value = true;
    }
    else {
        formStore.setEmail(EMAIL_ERROR, ERROR_COLOR);
        emailCheck.value = false;
    }
}
const passwordInput = (inputValue) => {
    passwordValue.value = inputValue;
    if (checkLength(passwordValue.value, 14)) {
        formStore.setPassword("", "");
        passwordCheck.value = true;
    }
    else {
        formStore.setPassword(Length_ERROR, ERROR_COLOR);
        passwordCheck.value = false;
    }
}
const login = () => {
    localStorage.clear();
    if (emailCheck.value && passwordCheck.value) {
        loginApi(emailValue.value, passwordValue.value)
            .then((data) => {
                localStorage.setItem("jwtToken", data.token);
                alert("로그인 되었습니다");
                router.push("/");
            })
            .catch((e) => {
                const errorCode = e.response.status;
                errorHandle(errorCode);
            })
    }
    else {
        alert("열받게 하지 말고 제대로 입력하세요");
    }
};

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
    height: 70%;
    min-height: 600px;
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
    margin-bottom: 50px;
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
    background-color: darkgreen;
}
.button:hover{
    background-color:rgba(255, 192, 0);
    color: darkgreen;
    cursor: pointer;
}
.login-button {
    color: white;
}
.regist-button {
    color: white;
}
.blank{
    height: 15%;
}
.link {
  font-size: 14px;
  color: rgba(2, 2, 2, 0.57);
  text-decoration: none; 
}
.link:hover {
  text-decoration: underline;
}
</style>