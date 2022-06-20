import React, {useEffect} from 'react'
import Icon from '../UI/Icon'
import { useNavigate, useParams } from 'react-router-dom'
import { Item } from '../../interfaces'

const SearchResult = (props: {items: Item[], setItems: Function, setCategories: Function}) => {
    const navigate = useNavigate()
    const query = useParams().q

    useEffect(() => {
        if (props.items.length === 0) {
            fetch(`/api/items/q/${query}`)
            .then(res => res.json())
            .then(data => {
                if (data.categories !== null) {
                    props.setCategories(data.categories)
                }
                else {
                    props.setCategories(null)
                }
                props.setItems(data.items)
            })
        }
    }, [])

    const goToProductDetail = (productId: string) => {
        navigate(`/items/${productId}`)
    }

    const list = props.items.map((item: any)=> {
        return <li key={item.id} onClick={()=>goToProductDetail(item.id)}>
            <header>
                <img src={item.picture} alt={item.title}/>
            </header>
            <article>
                <div>
                    <span>$</span>
                    {item.price.amount}
                    {item.free_shipping ? <Icon name='delivery'></Icon> : ''} 
                </div>
                <p>{item.title}</p>
            </article>
        </li>
    })

    return <section className='result'>
            <ul>{list}</ul>
        </section>

}

export default SearchResult