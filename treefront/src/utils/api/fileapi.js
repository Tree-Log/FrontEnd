import axios from "axios";

function saveFile(files) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8080/file", files, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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

export { saveFile };
