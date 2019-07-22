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
      categoryOfFood: []
    };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  handleChange(event) {}

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <input
            name="ingredients"
            type="text"
            value={this.state.ingredients}
            onChange={this.handleChange}
            placeholder={"1"}
          />
          {/* Add additional ingredient- drop down additional input beneath */}
          <input
            name="method"
            type="text"
            value={this.state.method}
            onChange={this.handleChange}
          />
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
