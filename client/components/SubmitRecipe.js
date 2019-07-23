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
      numberOfIngredients: 1,
      numberOfSteps: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAdditionalRow = this.addAdditionalRow.bind(this);
  }

  handleChange(event) {

    /*
1. dynamically change the names of rows for ingredients and sets when iterating/mapping out.
2. split the names to find out their position in the ingredients and steps array.
3. use the spread operator in handlechange to dynamically add in the new data
    */

    if (event.target.name.includes('method')) {
        const indexOfRow = parseInt(event.target.name.slice(5));
        let methodState = this.state.method
        methodState[indexOfRow] = event.target.value

        this.setState({
            method: methodState
        })
    } else if (event.target.name.includes('ingredients')) {
        const indexOfRow = parseInt(event.target.name.slice(10));
        let ingredientsState = this.state.method
        ingredientsState[indexOfRow] = event.target.value

        this.setState({
            ingredients: ingredientsState
        })
    } else {

    this.setState({
      [event.target.name]: event.target.value
    });
}
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addAdditionalRow(sectionName) {
    if (sectionName === "ingredient") {
      this.setState({
        numberOfIngredients: (this.state.numberOfIngredients += 1)
      });
    } else {
      this.setState({
        numberOfSteps: (this.state.numberOfSteps += 1)
      });
    }
  }

  render() {
    let numberOfIngredientsLength = new Array(
      this.state.numberOfIngredients
    ).fill(0);
    let NumberOfStepsLength = new Array(this.state.numberOfSteps).fill(0);

    return (
      <div className="recipe-form">
        <form onSubmit={this.handleSubmit} className="recipe-form__form">
          <input
            name="recipeName"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div className="recipe-form__form--multi-part-section">
            {numberOfIngredientsLength.map(ingredient => {
              return (
                <input
                className="recipe-form__ingredients-inputs"
                  name={`ingredients${this.state.ingredients.length}`}
                  type="text"
                  value={this.state.ingredients[this.state.ingredients.length]}
                  onChange={this.handleChange}
                />
              );
            })}
            <button onClick={() => this.addAdditionalRow("ingredient")}>
              +
            </button>
          </div>
          {/* Add additional ingredient- drop down additional input beneath */}
          <div className="recipe-form__form--multi-part-section">
            {NumberOfStepsLength.map(steps => {
              return (
                <textarea
                  name={`method${this.state.method.length}`}
                  type="text"
                  value={this.state.method}
                  onChange={this.handleChange}
                />
              );
            })}
            <button onClick={() => this.addAdditionalRow("method")}>+</button>
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
