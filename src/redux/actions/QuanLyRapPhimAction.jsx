import axios from 'axios';
import {LAY_DANH_SACH_HE_THONG_RAP, LAY_DANH_SACH_TTLC} from '../constans/FilmsConstans';

//Lấy danh sách rạp
export const layDanhSachRapPhimAction = () => {
    return (dispatch) => {
        axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
            method: "GET",
        }).then(res =>{
            // console.log(res.data);
            dispatch({
                type:LAY_DANH_SACH_HE_THONG_RAP,
                listHeThongRap: res.data
            })
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }
}

// //Lấy danh sách cụm rap theo hệ thống
// export const layDanhSachCumRapAction = (maHeThongRap)=>{
//     return (dispatch) =>{
//         axios({
//             url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
//             method: "GET",
//         }).then(res =>{
//             console.log(res.data);
//             dispatch({
//                 type: LAY_DANH_SACH_CUM_RAP,
//                 cumRap: res.data
//             })
//         }).catch(err =>{
//             console.log(err.response.data);
//         })
//     }
// }

//Lấy thông tin lịch chiếu hệ thống rạp
export const layDanhSachLichChieuHTRAction = (maHeThongRap)=>{
    return (dispatch) => {
        axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
            method:"GET"
        }).then(res =>{
            console.log("Lấy danh sách lịch chiếu hệ thống rạp",res.data);
            dispatch({
                type:LAY_DANH_SACH_TTLC,
                lichChieuHTRArray: res.data
            })
        }).catch(err =>{
            console.log(err.response.data);
        })
    }
}