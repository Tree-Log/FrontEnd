import axios from "axios";

function loginApi(email, password) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "http://localhost:8080/login",
                {
                    email: email,
                    password: password
                }
            )
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                reject(e);
            });
    });
};
function getUserInfo(jwtToken) {
    return new Promise((resolve, reject) => {
        axios
            .get("http://localhost:8080/auth", {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            })
            .then((response) => {
                const user = response.data;
                localStorage.setItem("user", JSON.stringify(user));
                resolve();
            })
            .catch((e) => {
                reject(e);
            });
    });
};

function registApi(user) {
    return new Promise((resolve, reject) => {
        axios
        .post("http://localhost:8080/signup", user)
        .then((response) => {
            resolve();
        })
        .catch((e) => {
            reject(e);
        });
    });
};

export { loginApi, getUserInfo, registApi };