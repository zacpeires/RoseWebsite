import React, { Component } from "react";
import { connect } from "react-redux";

export default class SubmitRecipe extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: "",
      description: [],
      ingredients: [],
      method: [],
      categoryOfFood: [],
      numberOfIngredients: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAdditionalRow = this.addAdditionalRow.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addAdditionalRow() {
    this.setState({
        numberOfIngredients: this.state.numberOfIngredients+=1
    });
  }

  render() {
    let numberOfIngredientsLength = new Array(this.state.numberOfIngredients).fill(0)


    return (
      <div className="recipe-form">
        <form onSubmit={this.handleSubmit} className="recipe-form__form">
          <input
            name="recipeName"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div className="recipe-form__form--multi-part-section">
        { numberOfIngredientsLength.map(ingredient => {
            return (
                <textarea
                name="ingredients"
                type="text"
                value={this.state.ingredients}
                onChange={this.handleChange}
              />
            )
        })
        }
          <button onClick={this.addAdditionalRow}>+</button>
          </div>
          {/* Add additional ingredient- drop down additional input beneath */}
         <div className="recipe-form__form--multi-part-section">
          <textarea
            name="method"
            type="text"
            value={this.state.method}
            onChange={this.handleChange}
          />
          <button>+</button>
          </div>
          {/* Add additional method row - drop down additional input beneath */}
          <input
            name="categoryOfFood"
            type="text"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <button type="submit">Submit recipe</button>
        </form>
      </div>
    );
  }
}
