<template>
    <div class="body">
        <div class="login-container">
            <div class="title">Regist</div>
                <RegistInputForm
                from="name"
                @send-data="nameInput"
                />
                <RegistInputForm
                from="email"
                @send-data="emailInput"
                />
                <RegistInputForm
                from="password"
                @send-data="passwordInput"
                />
                <RegistInputForm
                from="passwordCheck"
                @send-data="passwordCheckInput"
                />
                <input type="date">

                <!-- 지역, 생일, 프로필 이미지 -->
                <div class="blank">
                </div>
                <button class="button login-button" @click="login">regist</button>
                <br>
                <router-link to="profile">profile</router-link>
                <router-link to="/">home</router-link>
        </div>
    </div>
</template>

<script setup>
import RegistInputForm from "../components/Regist/RegistInputForm.vue";

import { useRouter } from "vue-router";
import { ref } from "vue"
import { useFormStore } from '@/stores/formStore';
import { loginApi, getUserInfo } from "@/utils/userapi";
import { checkEmail, checkLength, checkDoublePassword } from "../utils/inputcheck/LoginUtil";
import { Length_ERROR, EMAIL_ERROR,PASSWORD_ERROR } from "../utils/ErrorMessages";
import { ERROR_COLOR } from "../utils/Color";

const formStore = useFormStore();

const emailValue = ref("");
const passwordValue = ref("");
const nameValue = ref("");
const passwordCheckValue = ref("");

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
    }
    else {
        formStore.setPassword(Length_ERROR, ERROR_COLOR);
        passwordCheck.value = false;
    }
}
const passwordCheckInput = (inputValue) => {
    passwordCheckValue.value = inputValue;
    if (checkDoublePassword(passwordValue.value, passwordCheckValue.value)) {
        formStore.setPasswordCheck("", "");
        passwordCheck.value = true;
    }
    else {
        formStore.setPasswordCheck(PASSWORD_ERROR, ERROR_COLOR);
        passwordCheck.value = false;
    }
}
const nameInput = (inputValue) => {
    nameValue.value = inputValue;
}
const login = () => {

}

</script>

<style scoped>
.body {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-container {
    width: 500px;
    height: 700px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: solid 1px rgba(150, 150, 150, 0.6);
}

.title {
    width: 355px;
    height: 43px;
    font-size: 20px;
    margin-bottom: 20px;
}

.login-button {
    width: 355px;
    height: 43px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 0;
    background-color: darkgreen;
    border-radius: 5px;
    border: solid darkgreen 1px;
    font-size: 14px;
    color: white;
}
</style>