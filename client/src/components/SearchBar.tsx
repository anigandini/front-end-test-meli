import React from 'react'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props: {setSearchResult: Function, searchQuery: string, setSearchQuery: Function}) => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        fetch(`/api/items/q/${props.searchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                props.setSearchResult(data.items)
                navigate(`/items/search/${props.searchQuery}`)
            })
        
    }

    return <nav className='search'>
        <a href='https://www.mercadolibre.com.ar/' target='_blank'>
            <Icon name='mercado-libre'/>
        </a>
        <section role='search'>
            <form onSubmit={(e)=>handleSubmit(e)} method='get'>
                <fieldset>
                    <legend>Search this website:</legend>
                    <label htmlFor='search' />
                    <input type='search' name='search' id='search' placeholder='Nunca dejes de buscar' onChange={(e)=>props.setSearchQuery(e.target.value)}/>
                    <button type='submit' title='Search this website now'><Icon name='search'/></button>
                </fieldset>
            </form>
        </section>
    </nav>
}

export default SearchBar