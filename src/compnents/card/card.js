import React from 'react'
import './card.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt='img' src={`https://robohash.org/${props.a.id}?set=set2&size=160x160`} />
        <h3> {props.a.name}</h3>
        <p> 'hello {props.a.email}' </p>
    </div>
);