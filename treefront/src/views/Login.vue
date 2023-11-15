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
            <br>
            <router-link to="profile">profile</router-link>
            <router-link to="/">home</router-link>
        </div>
    </div>
</template>

<script setup>
import InputForm from "../components/Login/InputForm.vue";

import { useRouter } from "vue-router";
import { ref } from "vue"
import { useFormStore } from '@/stores/formStore';
import { loginApi, getUserInfo } from "@/utils/userapi";
import { checkEmail, checkLength } from "../utils/inputcheck/LoginUtil";
import { Length_ERROR, EMAIL_ERROR, EMAIL_CHECK, PASSWORD_CHECK } from "../utils/ErrorMessages";
import { ERROR_COLOR } from "../utils/Color";

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
                getUserInfo()
                    .then(() => {
                        alert("로그인 되었습니다");
                        router.push("/");
                    });
            })
            .catch((e) => {
                const errorCode = e.response.status;
                errorHandle(errorCode);
        })
    }
    else {
        alert("열받게 하지 말고 제대로 입력하세요"); 
    }
}

const errorHandle = (errorCode) => {
    switch (errorCode) {
        case 411: // email이 존재하지 않음
            alert(EMAIL_CHECK);
        case 414: // 비번 틀림
            alert(PASSWORD_CHECK);
    }
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
    height: 50px;
}
</style>