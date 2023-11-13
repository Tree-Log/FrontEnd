<template>
  <div>
    <h2>게시물 등록</h2>
    <label for="title">제목</label><br />
    <input type="text" title="title" v-model="title" /><br />
    <label for="content">내용</label><br />
    <input type="text" content="content" v-model="content" /><br />
    <label for="category">카테고리</label><br />
    <input type="text" category="category" v-model="category" /><br />
    <br />

    <button class="btn" @click="create">게시물 등록</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/utils/postapi.js";

const router = useRouter();

const title = ref("");
const content = ref("");
const category = ref("");

const create = () => {
  const post = {
    userId: 1,
    title: title.value,
    content: content.value,
    category: category.value,
  };
  createPost(post);
};
</script>

<style scoped></style>
