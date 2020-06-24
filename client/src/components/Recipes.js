import React, { Component } from 'react'
import './recipes.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, Redirect } from 'react-router-dom';
import LikesButton from './LikesButton';

export default class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recipes: data
        })
      })
  }

  handleLike = (id, newLikes) => {
    const newRecipe = this.state.recipes.find((recipe)=> recipe.id === id)
    newRecipe.likes = newLikes
    const newRecipes = this.state.recipes.map(recipe => {
      if (recipe.id === id) {
        return newRecipe
      }
      return recipe;
    })
    this.setState({
      recipes: newRecipes
    })
  }


  render() {
    return (
      <Container>
        <h1>Code Kitchen</h1>
        <Link to="/recipes/new">Submit a review</Link>
        <Row>
          {this.state.recipes.map(recipe => {
            return (
              <Col key={recipe.id} md="auto">
                <Card style={{ maxHeight: '400px', maxWidth: '300px', margin: '15px' }}>
                  <Card.Img variant="top" src="./food.jpg" />
                  <Card.Body>
                    <Card.Text style={{ fontSize: '24px' }}>
                      {recipe.name}
                    </Card.Text>

                    <Link style={{ fontSize: '17px' }} to={`/recipes/${recipe.id}`}>Show details</Link>
                    <br></br>
                    <Link style={{ fontSize: '17px' }} type="submit" onClick={() => this.handleDelete(recipe.id)} name="delete">Delete Recipe</Link>
                    <br></br>
                    <LikesButton id={recipe.id} likes={recipe.likes} onLike={(newLikes) => { this.handleLike(recipe.id, newLikes)}}/>
                    {/* <button type="submit" onClick={() => this.likeRecipe(recipe.id)} name="put"><img src="likes.jpg"></img></button> */}
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}