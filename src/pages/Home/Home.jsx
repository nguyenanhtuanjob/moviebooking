import React,{useState,useEffect,Component, Fragment} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Tabs,Tab, Col } from 'react-bootstrap';
import { layDanhSachPhimAction } from '../../redux/actions/FilmsManageAction';
import FilmItems from '../../components/Layout/FilmItems/FilmItems';
import CarouselS from '../../components/Layout/Carousel/CarouselS';
import Showtime from '../../components/Layout/Showtime/Showtime';
import Intro from '../../components/Layout/Intro/Intro';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';
function Home(props) {

    

    //phim đang chiếu , sắp chiếu
    const [key, setKey] = useState('phimdangchieu');

    //dùng useselector thay cho mapStateToProps lấy danh sách từ reducer về
    const listFilms = useSelector(state => state.FilmManageReducer.listFilms);
     //useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch();
    // const listHeThongRap = useSelector(state => state.QuanLyRapPhimReducer.listHeThongRap);

    useEffect(() => {
      dispatch(layDanhSachPhimAction());
    },[])
    const [isOpen, setOpen] = useState(false)
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      rtl: true,
      // className: "center",
      // centerMode: false,
      // infinite: true,
      // // centerPadding: "60px",
      // slidesToShow: 4,
      // speed: 500,
      // rows: 1,
      // slidesPerRow: 2
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const renderListFilm1 =() => {
      // console.log('danh sách phim',listFilms);
      return listFilms.map((movie,index)=>{
        return(
          <FilmItems movie={movie} key={index}/>
        )
      })
    }

    const renderListFilmSapChieu = () => {
      return listFilms.slice(20).map((movie, index)=>{
        return (
          <FilmItems movie={movie} key={index}/>
        )
      })
    }

    
    return (
      
      
        <div className="home__background">
            {/* carousel */}
            <CarouselS />



            {/* Phim */}
            <div className="container my-5">
            <Tabs
            className="home__dangchieu"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="phimdangchieu" title="Đang Chiếu">
                  
                  <Slider {...settings} className="my-5">
                    {renderListFilm1()}
                  </Slider>
                </Tab>
                <Tab eventKey="phimsapchieu" title="Sắp Chiếu">
                  <Slider {...settings} className="my-5">
                      {renderListFilmSapChieu()}
                  </Slider>
                    
                </Tab>
            </Tabs>
            </div>

            <Showtime  />


            {/* ứng dụng  */}
            <Intro/>
        </div>
    )
}
export default Home