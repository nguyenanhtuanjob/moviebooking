import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Intro() {
    return (
        <div className="app">
  <div className="app__content" style={{backgroundImage:'url(./img/backapp.jpg)'}}>
    <div className="app__items container">
      <div className="app__items-left">
        <h3>Ứng dụng tiện lợi dành cho
          người yêu điện ảnh</h3>
        <br /> <br />
        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
        <br />
        <a href="">App miễn phí - Tải về ngay!</a>
        <p>TIX có hai phiên bản <span>iOS</span> &amp; <span>Android</span></p>
      </div>
      <div className="app__items-right">
        <img className="background" src="./img/iphone.png" />

        <Carousel className="slides carousel-control-prev-icon" aria-hidden="false">
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app1.jpg"
            />
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app2.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app3.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app4.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app5.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app6.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app7.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app8.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app9.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app10.jpg"
            />

            
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app11.jpg"
            />
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app12.jpg"
            />
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app13.jpg"
            />
          </Carousel.Item>
          <Carousel.Item className="items">
            <img
              className="d-block w-100"
              src="./img/app14.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </div>
</div>

    )
}
