import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display"
class Jeopardy extends Component {
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      category: "loading",
      value: 0,
      answered: false
    }
    this.handleResponse = this.handleResponse.bind(this)
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion()
      .then(result => {
        this.setState({
          data: result.data[0],
          category: result.data[0].category.title,
          value: result.data[0].value
        })
      })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //handle the submission for the answer
  handleResponse(){
    let playerResponse = document.getElementById("playerResponse")
    if(this.state.data.answer == playerResponse.value) return (
      alert("That was the right answer!"),
      this.setState((state, props) =>({
        score: state.score + state.value,
        answered: false
      })),
      this.getNewQuestion()
    )
    else if(this.state.answered === false) return (
      alert("Incorrect! Take another chance if you dare!"),
      this.setState((state, props) => ({
        score: state.score - state.value,
        answered: true
      }))
    )
    else return (
      alert(`Too bad! The correct answer was \"${this.state.data.answer}\"`),
      this.setState((state, props) => ({
        score: state.score - state.value,
        answered: false
      })),
      this.getNewQuestion()
    )
  }
  //display the results on the screen
  render() {
    return (
        <>
          <Display 
            category={this.state.category}
            value={this.state.value}
            score={this.state.score}
            handleResponse={this.handleResponse}
            question={this.state.data.question}
            // data={this.state.data}
          />
        </>
    );
  }
}
export default Jeopardy;