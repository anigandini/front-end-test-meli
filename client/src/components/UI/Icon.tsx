import React from 'react'
import sprite from '../../assets/sprite.webp'

type IconName = 'search' | 'delivery' | 'mercado-libre'

const Icon = (props: {name: IconName}) => {
    const getAlt = function () {
        switch(props.name) {
            case 'search':
                return 'Buscar'
            case 'delivery':
                return 'Envio gratis disponible'
            case 'mercado-libre':
                return 'Ir a www.mercadolibre.com.ar'
        }
    }
    return <img className={`icon icon--${props.name}`} src={sprite} alt={getAlt()}/>
}

export default Icon