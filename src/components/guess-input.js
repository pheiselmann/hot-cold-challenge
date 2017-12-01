import React from 'react';

export default class GuessInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// export default function GuessInput(props) {

	onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value;
        if (text && this.props.onGuess) {
            this.props.onGuess(text);
        }
        this.textInput.value = '';
        this.textInput.focus();
    }

    render() {

	return (
		<form className="guess-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" ref={input => this.textInput = input} />
          <button>Guess</button>
        </form>
	);

}
	
}