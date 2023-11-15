// 정규 표현식을 사용해 문자열 확인
export function checkLength(name, total){
    const regex = new RegExp(`^[^\\s]{2,${total}}$`);
    return regex.test(name);
}

export function checkEmail(email){
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function checkDoublePassword(password, passwordCheck) {
    if (password === passwordCheck) {
        return true;
    }
    else {
        return false;
    }
}
