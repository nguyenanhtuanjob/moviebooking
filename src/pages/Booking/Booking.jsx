import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router'

export default function Booking() {
    if(localStorage.getItem('userLogin')){
        return (
            <Container fluid="md" className="booking">
                <Row>
                    <Col sm={1}>

                    </Col>
                    <Col sm={7}>
                        <div className="booking__screen">
                            <img src="./img/screen.png" alt="screen.png"/>
                        </div>
                        
                    </Col>
                    <Col sm={4}>
                    123
                    </Col>
                </Row>
                
            </Container>
        )
    }
    return <Redirect to='/login'/>
}
