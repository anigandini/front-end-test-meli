import React from 'react'
import sprite from '../assets/sprite.webp'

type IconName = 'search' | 'delivery' | 'mercado-libre'

const Icon = (props: {name: IconName}) => {
    return <img className={`icon icon--${props.name}`} src={sprite} alt={`${props.name}`}/>
}

export default Icon