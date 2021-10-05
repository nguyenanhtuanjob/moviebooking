import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { dangKyApiAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useHistory } from 'react-router';
// import { Formik,Form,Field} from "formik";
export default function SignUp() {
  let dispatch = useDispatch();
  const [userSignUp, setUserSignUp] = useState({
    hoTen: "",
    userName: "",
    passWord: "",
    email: "",
    soDienThoai: "",
    maNhom: "GP01",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserSignUp({ ...userSignUp, [name]: value });
  };
  let history = useHistory();
  const signUp = (e) => {
    e.preventDefault(); //không cho trang load lại
    //call api
    dispatch(dangKyApiAction(userSignUp,history));
  };
  return (
    <div className="signup">
      <div className="signup__content container">
        <div className="row">
          <div className="col-4">
            <div className="signup__form">
              <h1 className="signup__title">ĐĂNG KÝ</h1>
              <Form onSubmit={signUp}>
                <Form.Group controlId="formGroupHoTen">
                  <Form.Label>Họ Tên</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Họ Tên"
                    name="hoTen"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupTaiKhoan">
                  <Form.Label>Tài Khoản</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập Tài Khoản"
                    name="userName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupMatKhau">
                  <Form.Label>Mật Khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mật Khẩu"
                    name="passWord"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Số điện thoại"
                    name="soDienThoai"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Mã Nhóm</Form.Label>
                  <Form.Control as="select" name="maNhom">
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  ĐĂNG KÝ
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-8 p-0">
            <div className="signup__content__right">
              <div className="context__signup">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt fugiat officia debitis excepturi repellendus, ex
                  tempora corrupti quod aliquam cum eveniet placeat quis
                  voluptates fugit nihil, repudiandae vitae! Nesciunt aperiam
                  quia maiores, obcaecati expedita ab, voluptatem voluptates
                  laboriosam dolores facere ipsa perferendis dolorum aut! Quos
                  natus laboriosam perspiciatis nesciunt adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
