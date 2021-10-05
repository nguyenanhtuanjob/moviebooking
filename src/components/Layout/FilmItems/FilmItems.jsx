import React,{Fragment, useState} from 'react'
import { NavLink } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import ModalVideo from 'react-modal-video'
export default function FilmItems(props) {
    let {movie} = props;
    
    const [isOpen, setOpen] = useState(false)
    return (
        
        <div className="movie__item">
          <div className="card movie__card">
              <img className="movie__card__img card-img-top" src={movie.hinhAnh} alt={movie.hinhAnh} onError={(e)=>{
                  e.target.src ="https://picsum.photos/300/300"
              }} />
              {/* <div className="card__rating">
                {movie.danhGia}
                <StarRatings
                    rating={movie.danhGia}
                    numberOfStars={5}
                    starDimension="7px"
                    starSpacing="1px"
                    starRatedColor="#fb4226"
                />
                </div> */}
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={movie.trailer.substrings(30)} onClose={() => setOpen(false)} /> */}
              {/* <button className=" btn btn-success my-2" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
              <div className="card-body">
              <h4 className="card-title">{movie.tenPhim.split(" ").slice(0,3).join(" ") + "..."}</h4>
              <p className="card-text">{movie.moTa.split(" ").slice(0,4).join(" ") + "..."}</p>
              </div>
              <NavLink className="btn-booking" to={`/detail/${movie.maPhim}`}>ĐẶT VÉ</NavLink>
          </div>
      </div>
    )
}
