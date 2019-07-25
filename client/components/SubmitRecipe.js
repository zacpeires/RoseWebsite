import React, { Component } from "react";
import { connect } from "react-redux";
import { gotSingleRecipe } from "../store";
class SubmitRecipe extends Component {
  constructor() {
    super();

    this.state = {
      recipeName: "",
      description: "",
      ingredients: [],
      method: [],
      typeOfFood: '',
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
        this.setState({
            ingredients: ingredientsState
        })
    } 
    else {

    this.setState({
      [event.target.name]: event.target.value
    });
}
  }

  handleSubmit(event) {
    event.preventDefault();
  
    let newRecipe = this.state;
    // newRecipe.delete(numberOfIngredients);
    // newRecipe.delete(numberOfSteps);

    // this.props.gotSingleRecipe(newRecipe)

    console.log(newRecipe);

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
          <input
            name="typeOfFood"
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

const mapDispatchToProps = (dispatch) => ({
  gotSingleRecipe: (newRecipe) => dispatch(gotSingleRecipe(newRecipe))
});

export default connect(null, mapDispatchToProps)(SubmitRecipe);