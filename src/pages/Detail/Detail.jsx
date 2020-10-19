import React,{Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimAction } from '../../redux/actions/FilmsManageAction';
import 'react-circular-progressbar/dist/styles.css';
import StarRatings from 'react-star-ratings';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import moment from 'moment'
import 'moment/locale/vi';
import { Tab, Tabs } from 'react-bootstrap';
export default function Detail(props) {

    const detailFilm = useSelector(state => state.FilmManageReducer.detailFilm);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(layChiTietPhimAction(props.match.params.id));
    },[]);

    const [key, setKey] = useState('thongtinlichchieu');
    
    return (
        // style={detailFilm.hinhAnh ? {backgroundImage:'url(detailFilm.hinhAnh)',backgroundPosition:'center',backgroundSize:'cover',filter:'blur'} : {backgroundColor: 'white'}}
        <div className="detail">

            <div className="container detail__content">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <img className="detail__imgage" src={detailFilm.hinhAnh} alt={detailFilm.hinhAnh}/>
                        
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="film__content">
                            <div className="row">
                                <div className="col-9">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mô tả</th>
                                                <th>Chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                Ngày Khởi Chiếu: 
                                                </td>
                                                <td>
                                                    
                                                    {
                                                        moment.locale('vi'),
                                                        moment(detailFilm.ngayKhoiChieu).format('LL')
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Tên Phim: 
                                                </td>
                                                <td >
                                                    {detailFilm.tenPhim}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Mô Tả: 
                                                </td>
                                                <td >
                                                    {detailFilm.moTa}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-danger">MUA VÉ</button>
                                    {/* <p className="date-play">{detailFilm.ngayKhoiChieu}</p>
                                    <h3 className="name-film">{detailFilm.tenPhim}</h3>
                                    <p className="moTa">{detailFilm.moTa}</p>
                                    <p className="danhGia"> {detailFilm.danhGia}</p> */}
                                </div>
                                <div className="col-3 mx-auto">
                                    <h3>Đánh giá</h3>
                                {/* <CircularProgressbar value={detailFilm.danhGia} maxValue={10} text={`${detailFilm.danhGia}%`} /> */}
                                <CircularProgressbarWithChildren className="" value={detailFilm.danhGia*10} text={`${detailFilm.danhGia*10}%`}>
                                </CircularProgressbarWithChildren>;
                                
                                </div>
                            </div>
                           
                            {/* <p>{detailFilm.lichChieu.thoiLuong}</p> */}
                        </div>
                    </div>
                </div>
                <div className="">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        >
                        <Tab eventKey="thongtinlichchieu" title="Lịch Chiếu">
                        <div className="detailLichChieu">

                        
                            <h1 className="detailLichChieu__title">Thông tin lịch chiếu</h1>
                            <hr/>
                            <div className="row">
                                <div className="nav flex-column col-3 detailLichChieu__cumRap" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {detailFilm.heThongRapChieu?.map((heThongRap, index) =>{
                                            let active = index ===0 ? 'active' : '';
                                            return <a key={index} className={`nav-link detailLichChieu__item ${active}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                <img style={{width:'50px',height:'50px'}} src={heThongRap.logo} alt={heThongRap.logo}/> {heThongRap.tenHeThongRap}
                                            </a>
                                        })}
                                </div>
                                <div className="tab-content col-9 detailLichChieu__movie" id="v-pills-tabContent">
                                {
                                    detailFilm.heThongRapChieu?.map((heThongRap, index)=>{
                                    let active = index === 0 ? 'active' : '';
                                    return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        {
                                            heThongRap.cumRapChieu?.map((cumRap,index)=>{
                                                return <Fragment key={index}>
                                                    <div id="accordion">
                                                        
                                                        <div className="detailLichChieu__card">
                                                            <div className="card-header detailLichChieu__card__header" id="headingOne">
                                                                <h5 className="mb-0 d-flex">
                                                                    
                                                                    <a href={`#${cumRap.maCumRap}`} data-toggle="collapse"aria-expanded="true" aria-controls="collapseOne">
                                                                         <img src={cumRap.hinhAnh} alt={cumRap.hinhAnh} onError={(e)=>{
                                                                                    e.target.src ="https://picsum.photos/300/300"
                                                                                }}/> {cumRap.tenCumRap}
                                                                    </a>
                                                                </h5>
                                                            </div>

                                                            <div id={cumRap.maCumRap} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                <div className="card-body detailLichChieu__card__body">
                                                                    <div className="row">
                                                                                        {
                                                                            cumRap.lichChieuPhim?.map((lichChieu,index)=>{
                                                                                var thoiGianChieu = lichChieu.ngayChieuGioChieu;
                                                                                let date = new Date(thoiGianChieu);
                                                                                let thoiGianView = lichChieu.thoiLuong;
                                                                                var newHours = date.getHours() + thoiGianView;
                                                                                let thoiGianKetThuc = date.setHours(newHours);
                                                                                console.log(thoiGianKetThuc);
                                                                                let endTime = new Date(thoiGianKetThuc);
                                                                                console.log(endTime);
                                                                                return <div key={index} className="col-3 my-2">
                                                                                    
                                                                                    <a className="startTime" onClick={() => {
                                                                                        if(!localStorage.getItem('userLogin')){
                                                                                            Swal.fire({
                                                                                                icon: 'error',
                                                                                                title: 'Warning',
                                                                                                text: 'Bạn phải đăng nhập vào tài khoản trước khi đặt vé!!',
                                                                                                confirmButtonText:`Đăng Nhập`
                                                                                            }).then(() => {
                                                                                                
                                                                                                props.history.push('/login');
                                                                                                
                                                                                            })
                                                                                            
                                                                                        } else {
                                                                                            props.history.push(`/booking/${lichChieu.maLichChieu}`)
                                                                                        }
                                                                                    }}> {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</a>
                                                                                    {/* <NavLink className="startTime" to={`/booking/${lichChieu.maLichChieu}`}>
                                                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                                    </NavLink> */}
                                                                                    <span className="endTime">~ {
                                                                                    
                                                                                    moment(endTime).format('hh:mm A')
                                                                                    }</span>
                                                                                    
                                                                                </div>
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            })
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    </div>
                        </Tab>
                        <Tab eventKey="trailer" title="Trailer">
                            <div className="trailer">
                                <iframe class="video" src={detailFilm.trailer}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                            />
                            </div>
                        
                        </Tab>
                        {/* <Tab eventKey="contact" title="Contact" disabled>
                            
                        </Tab> */}
                    </Tabs>
                        
                </div>
            </div>
        </div>
    )
}
