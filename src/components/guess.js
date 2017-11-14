import React from 'react';

export default function Guess(props) {
    return (
        <span className="guess">
            {props.text} { }
        </span>
    );
};

Guess.defaultProps = {
    text: 0
};