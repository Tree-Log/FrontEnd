import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useJWTStore } from "./jwt";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  
  const getUserInfo = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    console.log(jwtToken);
    axios
    .get(
      "http://localhost:8080/auth",
      {
        headers: {
          Authorization : `Bearer ${jwtToken}`
        },
      }
    )
    .then((response) =>{
        user.value = response.data
        localStorage.setItem("user",JSON.stringify(user.value))
    })
    .catch((e) => {
        console.log(e);
    })
  }

  return {user, getUserInfo}
})
