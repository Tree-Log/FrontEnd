import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useJWTStore } from "./jwt";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref({});

  

  return { user, getUserInfo };
});
