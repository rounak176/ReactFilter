import  React from 'react'
import {Card} from './card'
import './card-list.styles.css'
export const CardList= (props) => {
    console.log(props);
 return (
     <div className='card-list'>
         { props.a.map(a =>(<Card key={a.id} a={a}/>))}
         </div>
 )
}
