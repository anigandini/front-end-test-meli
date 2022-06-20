import React from 'react'

const BreadCrumbs = (props: {categories: string[]}) => {
    
    const list = props.categories.map(category => <li key={category}> {category} </li>)

    return <nav className='breadcrumbs' aria-label="breadcrumbs">
        <ol>
            {list}
        </ol>
    </nav>
    
}

export default BreadCrumbs