import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachRapPhimAction } from '../../../redux/actions/QuanLyRapPhimAction';
import moment from 'moment'
import { Collapse } from 'antd';
import Swal from 'sweetalert2'
export default function Showtime(props) {

    const { Panel } = Collapse;
    function callback(key) {
        console.log(key);
    }
    const listHeThongRap = useSelector(state => state.QuanLyRapPhimReducer.listHeThongRap);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachRapPhimAction());
    },[])
    // console.log("list he thong rap",listHeThongRap);
    return (
        
        <div className="showtime">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="showtime__title">Cụm Rạp</h1>
                    </div>
                </div>
                    
            </div>
            <div className="container">
                <div className="heThongRapChieu">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {/* {
                            listHeThongRap.map((heThongRap,index)=>{
                                let active = index ===0 ? 'active' : '';
                                return <li className="nav-item" key={index}>
                                <a className={`heThongRapChieu__link nav-link ${active}`} id={heThongRap.maHeThongRap} data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="pills-home" aria-selected="true">
                                    <img className="heThongRapChieu__logo" src={heThongRap.logo} alt={heThongRap.tenHeThongRap}/>
                                </a>
                            </li>
                            })
                        } */}
                        {
                            listHeThongRap.map((heThongRap, index)=>{
                                let active = index ===0 ? 'active' : '';
                                return <li key={index} className="nav-item">
                                <a className={`heThongRapChieu__link nav-link ${active}`}id="pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="pills-home" aria-selected="true">
                                <img className="heThongRapChieu__logo" src={heThongRap.logo} alt={heThongRap.tenHeThongRap}/>
                                </a>
                            </li>
                            })
                        }
                        
                        
                    </ul>
                    <div className="tab-content" id="pills-tabContent">


                        {
                            listHeThongRap.map((heThongRap, index)=>{
                                let active = index ===0 ? 'active' : '';
                                return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="pills-home-tab">
                                    
                                    <div className="row">
                                        <div className="col-3 p-0">
                                        <div className="nav cumRap__list" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                                            {
                                                heThongRap.lstCumRap?.map((cumRap,index)=>{
                                                    let active = index ===0 ? 'active' : '';
                                                    return <a key={index} className={`cumRap nav-link ${active}`}id="v-pills-home-tab" data-toggle="pill" href={`#${cumRap.maCumRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">

                                                        {cumRap.tenCumRap}<br/>
                                                        <p className="cumRap__diaChi">{cumRap.diaChi.split(" ").slice(0,6).join(" ") + "..."}</p>
                                                    </a>
                                                })
                                            }
                                            </div>
                                        </div>
                                    
                                    <div className="tab-content col-9 p-0" id="v-pills-tabContent">

                                            {
                                                heThongRap.lstCumRap?.map((cumRap,index)=>{
                                                    let active = index === 0 ? 'active' : '';
                                                    return <div key={index} className={`danhSachPhim tab-pane fade show ${active}`} id={cumRap.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                                {
                                                                    cumRap.danhSachPhim?.map((phim, index)=>{
                                                                        return <div key={index} class="danhSachPhim__lichChieu">
                                                                            <a className="danhSachPhim__title" href={`#ADFA${phim.maPhim}123123`} data-toggle="collapse">
                                                                                <img className="danhSachPhim__lichChieu__hinhAnh"  src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e)=>{e.target.src ="https://picsum.photos/300/300"}}/>
                                                                                    {phim.tenPhim}
                                                                            </a>

                                                                            <div id={`ADFA${phim.maPhim}123123`} className="danhSachPhim__gioChieu collapse row">
                                                                                {
                                                                                    phim.lstLichChieuTheoPhim?.map((lichChieu,index)=>{
                                                                                        return <div key={index} className="lichChieu__time col-3">
                                                                                            {/* <a className="lichChieu__booking" onClick={() => {
                                                                                                if(!localStorage.getItem('userLogin')){
                                                                                                    Swal.fire({
                                                                                                        icon: 'error',
                                                                                                        title: 'Warning',
                                                                                                        text: 'Bạn phải đăng nhập vào tài khoản trước khi đặt vé!!',
                                                                                                        confirmButtonText:`Đăng Nhập`
                                                                                                    }).then((result) => {
                                                                                                        if (result.isConfirmed) {
                                                                                                            props.history.push('/login');
                                                                                                        }
                                                                                                        
                                                                                                        
                                                                                                    })
                                                                                                    
                                                                                                } else {
                                                                                                    props.history.push(`/booking/${lichChieu.maLichChieu}`)
                                                                                                }
                                                                                            }}> {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                                            </a> */}
                                                                                            <NavLink className="lichChieu__booking" to={`/booking/${lichChieu.maLichChieu}`}>
                                                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                                            </NavLink>
                                                                                        </div>
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    })
                                                                }
                                                            </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>

    )
}


