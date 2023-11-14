<template>
    <div class="input-container">
      <div class="name">{{ name }}</div>
      <input v-model="inputValue" class="text-input" :type="type" :placeholder="placeholder" @change="$emit('send-data', inputValue)"/>
      <div class="message" :style="{color: color}">{{ message }}&nbsp;</div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["name","type","placeholder","message","color"]);
const inputValue = ref('');
const emit = defineEmits(['send-data']);

</script>

<style scoped>
.input-container {
    width: 400px;
    height: 105px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name{
    width: 350px;
    text-align: left;
    font-size: 14px;
    padding-bottom: 7px;
    color: #999999;
}
.text-input {
    width: 340px;
    height: 40px;
    padding-left: 10px;
    font-size: 12px;
    font: #999999;

    border : solid #999999 1px;
    border-radius:  5px;
}
.message{
    width: 350px;
    text-align: left;
    margin-left: 5px;
    font-size: 14px;
    margin-top: 7px;
    color: #999999;
}
</style>