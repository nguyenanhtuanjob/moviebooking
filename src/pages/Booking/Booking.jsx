import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import {
  layDanhSachGheAction,
  layThongTinPhimPhongVe,
  datVeActionAPI,
} from "../../redux/actions/QuanLyPhongVeAction";

export default function Booking() {
  const { dsGhe } = useSelector((state) => state.QuanLyPhongVeReducer);
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhongVeReducer);
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  useEffect(() => {
    dispatch(layDanhSachGheAction(maLichChieu));
    dispatch(layThongTinPhimPhongVe(maLichChieu));
  }, []);
  const renderDanhSachGhe = () => {
    return dsGhe.map((ghe, index) => {
      return (
        <>
          <button
            key={index}
            className={handleChangeClass(ghe)}
            style={{ width: "40px", height: "40px" }}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch({
                type: "TOGGLE_GHE",
                // ghe: ghe,
                ghe,
              });
            }}
          >
            {ghe.tenGhe}
          </button>
          <br className={(index + 1) % 16 ? "d-none" : "d-block"} />
        </>
      );
    });
  };

  const handleChangeClass = (ghe) => {
    if (ghe.loaiGhe === "Vip" && ghe.dangChon) {
      return "btn btn-success m-2 text-center";
    } else if (ghe.daDat) {
      //đã đặt
      return "btn btn-danger m-2 text-center";
    } else {
      //chưa đặt
      if (ghe.dangChon) {
        //Đang chọn
        return "btn btn-info text-white m-2";
      } else {
        return "btn btn-dark text-white m-2";
      }
    }
  };

  const handleBooking = () => {
    //call api
    let gheDaChon = dsGhe.filter((ghe) => ghe.dangChon);
    gheDaChon = gheDaChon.map((ghe) => ({
      maGhe: ghe.maGhe,
      giaVe: ghe.giaVe,
    }));
    dispatch(datVeActionAPI(maLichChieu, gheDaChon));
    dispatch(layDanhSachGheAction(maLichChieu));
  };

  if (localStorage.getItem("userLogin")) {
    return (
      <Container fluid="md">
        <Row className="booking m-0">
          <Col sm={9} className="text-center p-0">
            <div className="booking__screen">
              <img
                className="mx-auto"
                src="../img/screen.png"
                alt="screen.png"
              />
            </div>
            {/* danh sách ghế */}
            <div className="list-seat">{renderDanhSachGhe()}</div>
          </Col>
          <Col sm={3} className="text-left p-0">
            <h3 className="text-danger">{thongTinPhim.tenPhim}</h3>
            <p>{thongTinPhim.tenCumRap}</p>
            <p>
              Ngày chiếu {thongTinPhim.ngayChieu}{" "}
              <span>- {thongTinPhim.tenRap}</span>
            </p>
            <div>
                <button className="btn btn-success" onClick={handleBooking}> Đặt ghế</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return <Redirect to="/login" />;
}
