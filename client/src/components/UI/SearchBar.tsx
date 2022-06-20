import React from 'react'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props: {setSearchResult: Function, searchQuery: string, setSearchQuery: Function, setCategories: Function}) => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (props.searchQuery.match(/^(?:MLA[0-9]{10})$/)) {
            navigate(`/items/${props.searchQuery}`)
        } else {
            fetch(`/api/items/q/${props.searchQuery}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.categories !== null) {
                        props.setCategories(data.categories)
                    }
                    props.setSearchResult(data.items)
                    navigate(`/items/search/${props.searchQuery}`)
                })
        }
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
                    <button type='submit' title='Buscar en este sitio' disabled={props.searchQuery === '' ? true : false}><Icon name='search'/></button>
                </fieldset>
            </form>
        </section>
    </nav>
}

export default SearchBar