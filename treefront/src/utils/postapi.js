import axios from "axios";

async function createPost(post) {
  axios
    .post("http://localhost:8080/posts", post)
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
      console.log(response.data);
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
