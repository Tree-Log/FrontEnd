<template>
  <div>
    <h2>게시물 등록</h2>
    <label for="title">제목</label><br />
    <input type="text" name="title" v-model="title" /><br />
    <label for="content">내용</label><br />
    <input type="text" v-model="content" /><br />
    <label for="category">카테고리</label><br />
    <input type="text" v-model="category" /><br />
    <input
      multiple
      type="file"
      accept="image/*"
      ref="images"
      @change="imageUpload"
    />
    <br />

    <button class="btn" @click="create">게시물 등록</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/utils/api/postapi.js";
import { saveFile } from "@/utils/api/fileapi.js";

const router = useRouter();

const title = ref("");
const content = ref("");
const category = ref("");
const fileIds = ref([]);
const images = ref([]);

const imageUpload = (event) => {
  const files = event.target.files;
  const formData = new FormData();

  for (const file of files) {
    formData.append("files", file);
  }

  saveFile(formData)
    .then((data) => {
      console.log(data);
      fileIds.push(data);
      console.log(fileIds.value);
    })
    .catch((e) => {
      console.log(e);
    });

  images.value = Array.from(files);
};

const create = async () => {
  const post = {
    userId: 1,
    title: title.value,
    content: content.value,
    category: category.value,
  };

  const formdata = new FormData();

  formdata.append("images", images.values);
  await createPost(post, formdata);
  router.push("/board"); // 버튼 클릭 시 /board로 이동
};
</script>

<style scoped></style>
