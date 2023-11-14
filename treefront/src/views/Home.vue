<template>
    <div class="head-container">
        <NavWhite/>
    </div>
    <div class="body-container">
        <div class="main-body">
            <div class="content-title">Some Posts</div>
            <div class="content-container">
                <PostCardView
                v-for="post in placePosts"
                :key="post.id"
                :title="post.title"
                :content="post.content"
                :img="post.img"
                />
            </div>
            <div class="content-title middle-title">Sooome Posts</div>
            <div class="content-container">
                <PostCardView
                v-for="post in reviewPosts"
                :key="post.id"
                :title="post.title"
                :content="post.content"
                :img="post.img"
                />
            </div>
            <div class="content-title middle-title">여행 가고 싶다</div>
            <div class="content-container">
                <PostCardView
                v-for="post in gatherPosts"
                :key="post.id"
                :title="post.title"
                :content="post.content"
                :img="post.img"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import PostCardView from '../components/Home/PostCardView.vue';
import NavWhite from '../components/NavWhite.vue';
import {ref} from "vue"

const placePosts = ref([
    {id: 1, title: "test1", content: "content1", img: "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDVfMzAw/MDAxNTI4MTc5ODA0OTg5.GEzADjWKCDzOblL-tZx4EpNf4WdTVSnIIdUnZ4rJRkog.v3TM8dirOLAxNB2W3WrAU7hkTR6HPccptdc6ldew5RIg.JPEG.hsb7827/%ED%9A%8C%EC%82%AC%EA%B0%80%EA%B8%B0_%EC%8B%AB%EC%9D%80_%EC%A7%A4___%EC%9D%BC%ED%95%98%EA%B8%B0_%EC%8B%AB%EC%9D%80_%EC%A7%A4_%285%29.jpg?type=w800"},
    {id: 2, title: "test2", content: "content2", img: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/BrPBu9PX-csE3wGx-7Y_uLVnRB8.JPG"},
    {id: 3, title: "test3", content: "content3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQBPLs3EK9PhboaxzP2IOdYvXmOGihxHneQ&usqp=CAU"},
])
const reviewPosts = ref([
    {id: 1, title: "test1", content: "content1", img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/249000/249870-Seoul.jpg"},
    {id: 2, title: "test2", content: "content2", img: "https://a.cdn-hotels.com/gdcs/production168/d1477/4580ff6e-7691-46ee-8475-ae9b52a05ab4.jpg"},
    {id: 3, title: "test3", content: "content3", img: "https://i.namu.wiki/i/HEfHys0VWXx0UjkG4iWcOlLHFhmoxe9m1FQhL-ffBPmiJWB5TCCnM0u51vMw9O4WuLz5WCmMnyb7EsPsUhSFtg.webp"},
])
const gatherPosts = ref([
    {id: 1, title: "test1", content: "content1", img: "https://blog.kakaocdn.net/dn/P1zTd/btsfPEaV4cP/eeCHGCm3L0K2VoyAQ9Wt91/img.jpg"},
    {id: 2, title: "test2", content: "content2", img: "https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/YncHRgAo09JDcvzgL2oP5j8SmTk.jpg"},
    {id: 3, title: "test3", content: "content3", img: "https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2021/12/usj-super-nintendo-world-main.jpg"},
])



</script>

<style scoped>
.head-container{
    height: 37vh;
    width: 100%;
    min-width: 600px;
    padding-top: 90px;
    background: url('/images/home_background.jpg') center/cover;
    display: flex;
    align-items: top;
    justify-content: center;
}
.body-container{
    height: 100%;
    width: 100%;
    min-width: 600px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
}
.main-body{
    width: 55%;
    height: 100%;
    min-width: 600px;
    border-top: 1px solid lightgray;
    padding-top: 50px;
    padding-bottom: 5%;
}
.content-title{
    font-size: 20px;
}
.middle-title{
    padding-top: 3%;
    border-top: 1px solid lightgray;
}
.content-container{
    width: 100%;
    margin-top: 15px;
    margin-bottom: 7%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    /* background-color: aqua; */
}
</style>