import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFormStore = defineStore("formData", () => {
    const email = ref({ name: "email", type: "text", placeholder: "이메일을 입력해 주세요", message: "", color: "" });
    const name = ref({ name: "name", type: "text", placeholder: "이름을 입력해 주세요", message: "", color: "" });
    const nickName = ref({ name: "nickname", type: "text", placeholder: "닉네임을 입력해 주세요", message: "", color: "" });
    const password = ref({ name: "password", type: "password", placeholder: "비밀번호를 입력해 주세요", message: "", color: "" });
    const passwordCheck = ref({ name: "password-check", type: "password", placeholder: "비밀번호를 확인해주세요", message: "", color: "" });
    const birthday = ref({ name: "birthday", min: "1900-01-01"});

    const setEmail = (message, color) => {
        email.value = { ...email.value, message, color };
    }
    
    const setPassword = (message, color) => {  
        password.value = { ...password.value, message, color };
    }

    const setName = (message, color) => {
        name.value = { ...name.value, message, color};
    }

    const setPasswordCheck = (message, color) => {
        passwordCheck.value = { ...passwordCheck.value, message, color };
    }

  return { email,name, nickName, password, passwordCheck, birthday, setEmail, setPassword, setName, setPasswordCheck};
});