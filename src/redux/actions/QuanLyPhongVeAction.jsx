import axios from 'axios';
import { LAY_DANH_SACH_GHE, LAY_THONG_TIN_PHIM_PHONG_VE } from '../constans/QuanLyPhongVeConstans';


export const layDanhSachGheAction = (maLichChieu) => {
    return (dispatch) => {
        //axios
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method:"GET",
        }).then((res) => {
            console.log(res.data);
            dispatch({
                type: LAY_DANH_SACH_GHE,
                danhSachGhe: res.data.danhSachGhe
            })
        }).catch((err) => {
            console.log(err.response.data);
        })
    }
}
export const layThongTinPhimPhongVe = (maLichChieu) => {
    return (dispatch) => {
        //axios
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method:"GET"
        }).then((res) => {
            console.log(res.data);
            dispatch({
                type: LAY_THONG_TIN_PHIM_PHONG_VE,
                thongTinPhim: res.data.thongTinPhim
            })
        })
    }
}

export const datVeActionAPI = (maLichChieu,danhSachVe)=>{
    return (dispatch) => {
        const {taiKhoan , accessToken} = JSON.parse(localStorage.getItem("userLogin"));
        //axios
        axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            method: "POST",
            data:{
                maLichChieu,
                danhSachVe,
                taiKhoanNguoiDung: taiKhoan
            },
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }).then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
        })
    }
}