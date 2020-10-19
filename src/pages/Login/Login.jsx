import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';
// import {Formik,Form ,Field} from 'formik'
export default function Login() {

    let dispatch = useDispatch();
    const [userLogin,setUserLogin] = useState({
        userName:"",
        passWord:""
    })
    const [validated, setValidated] = useState(false);
    let history = useHistory();
    const handleChange =(e)=>{
        const {value ,name} = e.target;
        setUserLogin({...userLogin, [name]: value})
    }
    // const { Formik } = formik;
    // const schema = yup.object({
        
    //     userName: yup.string().required(),
    //     passWord: yup.string().required(),
    // });
    const login = (event)=>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            setValidated(true);
            event.preventDefault();
            dispatch(dangNhapApiAction(userLogin, history));
        }
    }

    
    return (
        <div className="login">
            <div className="login__content container">
                <div className="row" >
                    <div className="col-4">
                        <div className="login__form">
                            <FontAwesomeIcon icon={['fab', 'apple']} />
                            <h1 className="login__title">ĐĂNG NHẬP</h1>
                            <Form onSubmit={login}>
                                <Form.Group controlId="formGroupTaiKhoan">
                                    <Form.Label>Tài Khoản</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập Tài Khoản" 
                                            name="userName"
                                            required
                                            onChange={handleChange}/>
                                    <Form.Control.Feedback type="invalid">
                                        Làm ơn hãy nhập tài khoản của bạn!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formGroupMatKhau">
                                    <Form.Label>Mật Khẩu</Form.Label>
                                    <Form.Control type="password" placeholder="Mật Khẩu" 
                                            name="passWord"
                                            required
                                            onChange={handleChange}/>
                                    <Form.Control.Feedback type="invalid">
                                        Làm ơn hãy nhập mật khẩu của bạn!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                            ĐĂNG NHẬP
                                </Button>
                                </Form>
                                
                                    <div className="">
                                       <span>Ban chưa có tài khoản??</span> <NavLink to="/signup">SignUp</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 p-0">
                                <div className="login__content__right">
                                    <div className="context">
                                <h2>Xìn Chào các bạn</h2>
                                <p>Hãy đăng nhập</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
