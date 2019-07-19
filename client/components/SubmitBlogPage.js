import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewArticle } from '../store';

class SubmitBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: '',
            content: ''
        }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewArticle(this.state)

      this.setState({
          [event.target.name]: ''
      })
  }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.title} onChange={this.handleChange}/>
                    <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
                    <textarea type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                    <button type="submit">Submit article</button>
                </form>
            </div>
        ) 
    }
}

 const mapDispatchToProps = dispatch => ({
    addNewArticle: (article) => dispatch(addNewArticle(article))
 })

 export default  connect(null, mapDispatchToProps)(SubmitBlogPage);