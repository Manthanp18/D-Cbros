import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import classes from '../Detail/detail.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container, Row, Col, Button } from 'react-bootstrap';
import detail from './detail.json';

class Detail extends Component {
    familyId = this.props.match.params.id
    state = {
       detail:[],
       userId: ''
    }

    async componentDidMount () {
        const data = detail.filter(function (el) {
            return el.family_id = this.familyId
        })
        this.setState({detail: data});
    }

    render() {
        // console.log(this.state.detail)
        const detail = this.state.detail.map(det => {
            return (
                <center> 
                    <div key={'details'+ det.id} id='detail'>
                        <h3 id='name'>{det.person_name}</h3> 
                        <a href="tel:{det.mob_1}" id='no'> {det.mob_1} </a> <br/>
                        <a href="tel:{det.mob_2}" id='no'> {det.mob_2} </a>
                        <h3 id='email'>{det.email_id}</h3>
                    </div>
                </center>
            )
        })

        return(
            <Aux>
                <Container fluid>
                    <Row>
                        <Col  lg={4} md={4} sm={4} />
                        <Col  lg={4} md={4} sm={4}>     
                            <Header />
                        </Col>
                        <Col lg={4} md={4} sm={4} />
                    </Row>
                    <Row>
                        <Col  lg={1} md={1} sm={5}/>
                        <Col  lg={5} md={5} sm={4}>
                            <Button variant="secondary" id="back" onClick={this.props.history.goBack}>Back</Button>
                        </Col>
                        <Col  lg={6} md={6} sm={6}/>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4} />
                        <Col lg={4} md={4} sm={4} >
                            {detail}
                        </Col>
                        <Col lg={4} md={4} sm={4} />
                    </Row>
                    <Row>
                        <Col lg={10} md={4} sm={4} />
                        <Col  lg={2} md={4} sm={4}>     
                            <Footer />
                        </Col>
                        <Col lg={0} md={4} sm={4} />
                    </Row>
                </Container>
            </Aux>
        )
    }
}
export default Detail;