import axios from 'axios';
import {LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHIM, TIM_KIEM_PHIM} from '../constans/FilmsConstans';

//Lấy danh sách phim
export const layDanhSachPhimAction = () => {
    return (dispatch) => {
        axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method : "GET",
        }).then(res => {
            console.log("List phim",res.data);
            //dispatch lần 1 tại component để gọi action nayf thực thi
            dispatch({
                type: LAY_DANH_SACH_PHIM,
                listFilms : res.data,
            })
        }).catch(err=>{
            // console.log(err.response.data);
            console.log(err.response.data);
        });
    }
}

//Lấy chi tiết phim
export const layChiTietPhimAction = (maPhim) => { 
    return (dispatch) => {
        axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        }).then(res =>{
            // console.log(res.data);
            dispatch({
                type:LAY_CHI_TIET_PHIM,
                detailFilm: res.data,
            })
        }).catch(err =>{
            console.log(err.response.data);
        })
    }

}

//tìm kiếm phim
export const timKiemPhimAction = (tenPhim) => {
    return (dispatch) => {
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
            method:'GET'
        }).then(res => {
            dispatch({
                type: TIM_KIEM_PHIM,
                searchList: res.data,
            })
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}