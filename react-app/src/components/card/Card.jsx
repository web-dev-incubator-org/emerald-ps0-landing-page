import React from 'react'
import "./card.css";

const Card = (props) => {
    return (
        <article className="card">
            { props.img && props.alt && <img className="card__img" src={ props.img } alt={ props.alt } /> }
            { props.title && <h3 className="card__title">{ props.title }</h3> }
            { props.text && <p className="card__text">{ props.text }</p> }
        </article>
    )
}

export default Card
