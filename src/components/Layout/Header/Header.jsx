import React from 'react'
import {Nav, Button, Form, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { TOKEN, USER_LOGIN } from '../../../ultity/configWeb';

export default function Header() {
    const userLocal = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);

    // const [searchFilm, setSearchFilm] = useState("");
    
    let history = useHistory();
    // const renderUserLogin = () =>{
    //     if(localStorage.getItem(USER_LOGIN)){
    //         return <div className="d-flex align-item-center justify-content-end ml-auto">
    //             <h5 className="my-2">welcome,{userLocal.hoTen}</h5>
    //             <Button variant="outline-danger" onClick = {() =>{
    //                 localStorage.removeItem(USER_LOGIN);
    //                 localStorage.removeItem(TOKEN);
    //                 history.push("/");
    //             }}>Đăng Xuất</Button>
    //         </div>
    //     }
        
    // }
    const renderUserLogin = () =>{
        if(localStorage.getItem(USER_LOGIN)){
            return (<NavDropdown title={userLocal.hoTen} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Thông tin tài khoản</NavDropdown.Item>
                        <NavDropdown.Item  onClick = {() =>{
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TOKEN);
                            history.push("/");
                        }}>Đăng Xuất</NavDropdown.Item>
                
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
                
            )
        }
    }


    return (
        <div>
            <header >
                <Navbar fixed="top" bg="light" expand="lg">
                <NavLink className="navbar-brand" to="/">React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Lịch Chiếu</Nav.Link>
                    <Nav.Link href="#link">Cụm Rạp</Nav.Link>
                            <Nav.Link href="#link">Ứng dụng</Nav.Link>
                            
                    <Form inline>
                        <FormControl type="text" value="searchFilm" placeholder="Search" className="mr-sm-2 mx-sm-auto" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                     
                    {renderUserLogin()}
                    <NavLink to='/login' className="my-auto ml-2">
                                Đăng Nhập
                    </NavLink>
                    <NavLink to='/signup' className="my-auto ml-2">
                            Đăng Ký
                    </NavLink>
                    
                    
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </header>

            </div>
    )
}
