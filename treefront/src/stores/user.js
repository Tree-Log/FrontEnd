import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useJWTStore } from "./jwt";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  
  const getUserInfo = () => {
    const {getJwtToken} = useJWTStore();
    const jwtToken = getJwtToken();


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
    })
    .catch((e) => {
        console.log(e);
    })
  }

  return {user, getUserInfo}
})
