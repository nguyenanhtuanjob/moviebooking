import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';
// import {Formik,Form ,Field} from 'formik'
import { Form, Input, Button, Checkbox } from 'antd';
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


    const onFinish = (values) => {
        console.log('Success:', values);
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    
    return (
        <div className="login">
            <div className="login__content container">
                <div className="row" >
                    <div className="col-4">
                        <div className="login__form">
                            <FontAwesomeIcon icon={['fab', 'apple']} />
                            <h1 className="login__title">ĐĂNG NHẬP</h1>
                            {/* <Form onSubmit={login}>
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
                                </Form> */}
                                 <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
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
