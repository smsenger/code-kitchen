import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


import LikesButton from './LikesButton';

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      details: {},
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data,
          loading: false,
        })
      })
  }

    render() {
        const { loading, details, redirectLocation } = this.state;
        if (loading) {
            return <div>Loading...</div>
        }
        if(redirectLocation) {
            return <Redirect to={redirectLocation} /> 
        }
        return (
            <Container>
            <Link to="/">Home</Link>
            <Link to="/recipes/new">Submit a review</Link>
                <Row>
                    <Col>
                        <Card style={{ maxHeight: '600px', maxWidth: '400px', margin: 'margin: 0 auto;' }}>
                            <Card.Img variant="top" src="/food.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    <h1>{details.name}</h1>
                                </Card.Text>
                                <Card.Text>
                                    Description: {details.description}
                                </Card.Text>
                                <Card.Text>
                                    Review: {details.review}
                                </Card.Text>
                                <Card.Text>
                                        <button onClick={this.handleDelete} name="delete">Delete Recipe</button>
                                </Card.Text>
                                <Card.Text>
                                <LikesButton id={details.id} likes={details.likes} onLike={this.handleLike} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}