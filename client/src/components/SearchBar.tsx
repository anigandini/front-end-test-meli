import React from 'react'
import Icon from './Icon'

const SearchBar = () => {
    return <nav className='search'>
        <Icon name='mercado-libre'/>
        <section role='search'>
            <form action='#' method='get'>
                <fieldset>
                    <legend>Search this website:</legend>
                    <label htmlFor='search' />
                    <input type='search' name='search' id='search' placeholder='Nunca dejes de buscar'/>
                    <button type='submit' title='Search this website now'><Icon name='search'/></button>
                </fieldset>
            </form>
        </section>
    </nav>
}

export default SearchBar