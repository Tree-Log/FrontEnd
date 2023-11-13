<template>
  <div>
    <h2>BoardView</h2>
    <RouterLink to="/board">게시글 열받네 </RouterLink> |
    <RouterLink to="/board/create">게시글 등록</RouterLink>
    <hr />
    <RouterView />
  </div>

  <div>
    <button @click="onSetup">뭐 써야 되는데</button>

    <table style="text-align: center">
      <colgroup>
        <col style="width: 5%" />
        <col style="width: 40%" />
        <col style="width: 40%" />
        <col style="width: 15%" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.postId">
          <td>{{ post.postId }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>{{ post.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { getAllPostsPromise } from "@/utils/postapi.js";
import { onMounted, transformVNodeArgs } from "vue";
import { ref } from "vue";

const posts = ref([]);
onMounted(() => {
  getAllPostsPromise().then((data) => {
    posts.value = data;
  });
});
</script>

<style scoped></style>
