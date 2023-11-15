import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useJWTStore = defineStore("jwtToken", () => {
  const jwtToken = ref("");
  const refreshToken = ref("");

  
  function getJwtToken() {
    return jwtToken.value;
  }

  return { jwtToken, refreshToken, loginApi, getJwtToken };
});
