
import { USER_LOGIN } from "../../ultity/configWeb";
import { DANG_NHAP } from "../constans/QuanLyNguoiDungConstans";

let userLocal ={};
if(localStorage.getItem(USER_LOGIN)){
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
    userLogin: userLocal
}

const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
    case DANG_NHAP:{
        state.userLogin = action.userLogin
        return {...state}
    }

    default:
        return state
    }
}
export default QuanLyNguoiDungReducer;
