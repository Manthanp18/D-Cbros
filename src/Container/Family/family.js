import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import '../Family/table.css';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import  Header  from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import family from './family.json';


class Family extends Component {
    state = {
        loading: true,
        family: []
    };

    async componentDidMount() {
        const data = await family;
        this.setState({family: data, loading: false})
    }
    
    renderTableData() {
        return this.state.family.map((fam) => {
           const { id, name } = fam 
           return (
                <tr key={fam.id}>
                    <td>{fam.id}</td>
                    <td>
                        <Link to = {`detail/${fam.id}`} id='link'>
                            {fam.family_name}
                        </Link>
                    </td>
                </tr>
            )
        })
    }
  
    render() {
        return (
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
                        <Col lg={4} md={4} sm={4} />
                        <Col  lg={4} md={4} sm={4}>
                            {this.state.loading || this.state.person ? (
                                <div>loading...</div>
                            ) : (
                                <div>
                                    <center>
                                    <table id='family'> 
                                        <tbody>
                                            {this.renderTableData()}
                                        </tbody>
                                    </table>
                                    </center>
                                    
                                </div>       
                            )}
                        </Col>
                        <Col lg={4} md={4} sm={4}/>
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

export default Family;