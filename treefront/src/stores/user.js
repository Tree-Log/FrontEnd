import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useJWTStore } from "./jwt";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const {jwtToken} = useJWTStore();

  const getUserInfo = () => {
    axios
    .get(
      "http://localhost:8080/auth",
      {
        headers: {
          Authorization : `Bearer ${jwtToken.value}`
        },
      }
    )
    .then((response) =>{
        user.value = response.data
    })
    .catch((e) => {
        console.log(e);
    })
  }

  return {user, getUserInfo}
})
