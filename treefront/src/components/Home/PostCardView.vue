<template>
    <div class="container">
        <img :src=img alt="Post Image">
        <div class="text-box">
            <div class="title"> {{ title }} </div>
            <div class="content"> {{ content }} </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["img","title","content"])

</script>

<style scoped>
.container{
    width: 100%; 
    overflow: hidden; 
}
img {
    width: 100%; 
    aspect-ratio: 1/1;
    object-fit: cover;
    cursor: pointer;
}
.text-box{
    margin-left: 7px;
    width: 100px;
    text-align: left;
}
.title{
    font-size: 15px;
}
.content{
    font-size: 14px;
}

</style>