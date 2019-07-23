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

    if (event.target.name.includes('method')) {
        const indexOfRow = event.target.name.slice(6)
        console.log(event.target.name)
        console.log(indexOfRow)
        let methodState = this.state.method
        methodState[indexOfRow] = event.target.value

        this.setState({
            method: methodState
        })
    } 
    else 
    if (event.target.name.includes('ingredients')) {
        const indexOfRow = event.target.name.slice(11)
        let ingredientsState = this.state.ingredients
        ingredientsState[indexOfRow] = event.target.value
        console.log(indexOfRow)
        console.log(event.target.name)

        this.setState({
            ingredients: ingredientsState
        })
    } 
    else {

    this.setState({
      [event.target.name]: event.target.value
    });
}

console.log(this.state)
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
            {numberOfIngredientsLength.map((ingredient, index) => {
              return (
                <input
                className="recipe-form__ingredients-inputs"
                  name={`ingredients${index}`}
                  key={index}
                  type="text"
                  value={this.state.ingredients[index]}
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
            {NumberOfStepsLength.map((steps, index) => {
              return (
                <textarea
                  name={`method${index}`}
                  key={index}
                  type="text"
                  value={this.state.method[index]}
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
