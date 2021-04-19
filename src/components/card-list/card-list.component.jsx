import React from 'react'
import './card-list.styles.css'
import {MyCard} from '../card/card.component'

export const CardList = (props) =>(
        <div className='card-list'>
              {
              props.monsters.map(monster => (
                <MyCard key={monster.id} monster ={monster}></MyCard>
              ))}
        </div>
    );