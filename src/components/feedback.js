import React from 'react';

import GuessInput from './guess-input';

import Guess from './guess';

export default class Feedback extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  randomNumber: Math.floor((Math.random() * 100) + 1),
  	  currentGuess: '',
  	  guesses: [],
  	  feedback: ''
  	}
  }

  addGuess(text) {
    this.setState({
      currentGuess: text,
      guesses: [...this.state.guesses, {
      	text
      }]
    });

    if (Number.parseInt(text, 10) === this.state.randomNumber) {
  		this.setState({
  		  feedback: 'got it!'
  		});
  	} else if (Number.parseInt(text, 10) >= (this.state.randomNumber  - 9) && Number.parseInt(text, 10) <= (this.state.randomNumber + 9)) {
  		this.setState({
  		  feedback: 'hot'
  		})
  	} else if (Number.parseInt(text, 10) < (this.state.randomNumber - 10) || Number.parseInt(text, 10) > (this.state.randomNumber + 10)) {
  		this.setState({
  		  feedback: 'cold'
  		})
  	}
  }

  render() {
    const guesses = this.state.guesses.map((guess, index) =>
      <Guess key={index} {...guess} />
    );
    return (
      <div className="guess-input">
        <h3>Random Number</h3>
        {this.state.randomNumber}
        <h3>Feedback</h3>
        {this.state.feedback}
        <h3>Current Guess</h3>
        {this.state.currentGuess}
        <h3>Guesses so far</h3>
        {guesses}
        <GuessInput type="guess" onGuess={text => this.addGuess(text)} />
      </div>
    );
  }
}

Feedback.defaultProps = {
    title: ''
};