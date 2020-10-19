
import Axios from "axios"
import { DOMAIN, TOKEN, USER_LOGIN } from "../../ultity/configWeb";
import { DANG_KY, DANG_NHAP } from "../constans/QuanLyNguoiDungConstans";

export const dangNhapApiAction = (userLogin, history) => {
    return async dispatch =>{
        try{
            let {data,status} = await Axios({
                url: DOMAIN + '/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data:{
                    taiKhoan: userLogin.userName,
                    matKhau:userLogin.passWord
                }
            });
            if(status ===200){
                //sau khi gọi api => dispatch lên redux
                dispatch({
                    type:DANG_NHAP,
                    userLogin : data
                })
                // lưu vào localStorage
                localStorage.setItem(USER_LOGIN,JSON.stringify(data));
                localStorage.setItem(TOKEN,data.accessToken);
                history.goBack();
            }
        }
        catch(err){
            console.log(err.response.data);
            alert(err.response.data);
        }
    }
}

export const dangKyApiAction =(userSignUp)=>{
    return async dispatch =>{
        try{
            let {data,status} = await Axios({
                url : DOMAIN + '/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data:{
                    taiKhoan:userSignUp.userName,
                    matKhau: userSignUp.passWord,
                    email: userSignUp.email,
                    soDt: userSignUp.soDienThoai,
                    maNhom: 'GP01',
                    maLoaiNguoiDung:'KhachHang',
                    hoTen: userSignUp.hoTen,
                }
            })
            if(status ===200){
                alert("Đăng Ký Thành công")
            }
        }
        catch(err){
            console.log(err.response.data);
            alert(err.response.data);
        }
    }
}