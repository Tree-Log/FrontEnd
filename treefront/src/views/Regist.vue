<template>
    <div class="body">
        <div class="regist-container">
            <div class="title">Regist</div>
                <RegistInputForm
                from="name"
                @send-data="nameInput"
                />
                <RegistInputForm
                from="nickname"
                @send-data="nickNameInput"
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
                <RegionInputForm
                @send-data="regionInput"/>
                <DateInputForm
                @send-data="birthdayInput"/>

                <!-- 프로필 이미지 -->
                <div class="blank"></div>
                <button class="button" @click="regist">regist</button>
                <RouterLink to="/" class="link">Home</RouterLink> 
        </div>
    </div>
</template>

<script setup>
import RegistInputForm from "../components/Regist/RegistInputForm.vue";
import DateInputForm from "../components/Regist/DateInputForm.vue";
import RegionInputForm from "../components/Regist/RegionInputForm.vue";
import errorHandle from "../utils/errorHandleUtil";

import { ref } from "vue"
import { useRouter } from "vue-router";
import { useFormStore } from '@/stores/formStore';
import { registApi } from "@/utils/api/userapi";
import { checkEmail, checkLength, checkDoublePassword } from "../utils/inputcheck/userInputUtil";
import { Length_ERROR, EMAIL_ERROR,PASSWORD_ERROR } from "../utils/errorMessageUtil";
import { ERROR_COLOR } from "../utils/colorCodeUtil";

const router = useRouter();
const formStore = useFormStore();

const emailValue = ref("");
const nameValue = ref("");
const nickNameValue = ref("");
const passwordValue = ref("");
const passwordCheckValue = ref("");
const regionMainValue = ref("");
const regionSubValue = ref("");
const birthdayValue = ref('1996-12-05');

const emailCheck = ref(false);
const passwordLength = ref(false);
const passwordCheck = ref(false);

const nameInput = (inputValue) => {
    nameValue.value = inputValue;
};
const nickNameInput = (inputValue) => {
    nickNameValue.value = inputValue;
};
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
};
const passwordInput = (inputValue) => {
    passwordValue.value = inputValue;
    if (checkLength(passwordValue.value, 14)) {
        formStore.setPassword("", "");
        passwordLength.value = true;
    }
    else {
        formStore.setPassword(Length_ERROR, ERROR_COLOR);
        passwordLength.value = false;
    }
};
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
};
const regionInput = (selectedCity, selectedSubCity) => {
    regionMainValue.value = selectedCity;
    regionSubValue.value = selectedSubCity;
};
const birthdayInput = (inputValue) => {
    birthdayValue.value = inputValue;
};

const regist = () => {
    if (nameValue.value && nickNameValue.value && birthdayValue.value && emailCheck.value && passwordLength.value && passwordCheck.value) {
        const user = {
            name: nameValue.value,
            email: emailValue.value,
            nickname: nickNameValue.value,
            password: passwordValue.value,
            region: regionMainValue.value,
            birthDay: birthdayValue.value,
        };
        registApi(user)
        .then(() => {
            console.log("got passed");
            alert("회원가입 되었습니다!");
            router.push("/login");
        })
        .catch((e) => {
            const errorCode = e.response.status;
            errorHandle(errorCode);
        })
    }
    else {
        alert("제대로 입력하세요");
    }
}

</script>

<style scoped>
.body {
    width: 100%;
    height: 100vh;
    min-height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.regist-container {
    width: 500px;
    height: 70%;
    min-height: 800px;
    padding-top: 100px;
    padding-top: 10%;
    padding-bottom: 5%;
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
.blank{
    height: 3%;
    min-height: 10px;
}
.button {
    width: 355px;
    height: 43px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    border-radius: 5px;
    border: 0;
    background-color: darkgreen;
        color: white;
}
.button:hover{
    background-color:rgba(255, 192, 0);
    color: darkgreen;
    cursor: pointer;
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