import * as ErrorMessages from "../utils/errorMessageUtil";

const errorHandle = (errorCode) => {
    switch (errorCode) {
        case 410: 
            alert(ErrorMessages.DUPLICATED_EMAIL);
            break;
        case 411: 
            alert(ErrorMessages.EMAIL_CHECK);
            break;
        case 414: 
            alert(ErrorMessages.PASSWORD_CHECK);
            break;
    }
};

export default errorHandle;