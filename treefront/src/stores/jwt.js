import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useJWTStore = defineStore("jwtToken", () => {
  const jwtToken = ref("");
  const refreshToken = ref("");
  const loginApi = (email, password) => {
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        jwtToken.value = response.data.token;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function getJwtToken() {
    return jwtToken.value;
  }

  return { jwtToken, refreshToken, loginApi, getJwtToken };
});
