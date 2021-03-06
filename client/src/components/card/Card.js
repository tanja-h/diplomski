import React from 'react';
import images from './ElementImages';
import './card.scss'

function Card({ card, handleGuess, className }) {

    const handleImageClick = (element) => {
        if (handleGuess != null) {
            handleGuess(element);
        }
    }

    return (
        <div className={`card ${className ? className : ''}`}>
            {card.elements.map(element =>
                <div className="card-element" key={element}>
                    <img
                        src={images[`${element}.png`]}
                        alt={element}
                        onClick={() => handleImageClick(element)}
                    />
                </div>
            )}
        </div>
    );
}

export default Card
