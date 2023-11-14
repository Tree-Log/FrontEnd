import axios from "axios";

async function createPost(post, images) {
  axios
    .post("http://localhost:8080/posts", post, images, {
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

function getAllPosts() {
  axios
    .get("http://localhost:8080/posts")
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

function getAllPostsPromise() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
}

export { createPost, getAllPosts, getAllPostsPromise };
