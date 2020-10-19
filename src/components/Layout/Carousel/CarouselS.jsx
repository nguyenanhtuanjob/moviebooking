import React,{useState,useEffect} from 'react'
import {connect, useSelector,useDispatch} from 'react-redux';
import { Button,Carousel,Tabs,Tab,Nav,Row,Col } from 'react-bootstrap';
export default function Slider() {

    // carousel
    const [index, setIndex] = useState(0);
    

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    //dùng useselector thay cho mapStateToProps lấy danh sách từ reducer về
    const listFilms = useSelector(state => state.FilmManageReducer.listFilms);

    const renderListCarousel = () =>{
        return listFilms.slice(0,4).map((carousel,indexCarousel)=>{
          return(
            <Carousel.Item className="carousel" key={indexCarousel}>
                <img
                  className="carousel__img"
                  src={carousel.hinhAnh}
                  alt={carousel.hinhAnh}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
              {renderListCarousel()}
          </Carousel>
    )
}
