import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Loader from '../UI/Loader'
import { Item } from '../../interfaces'

const Product = (props: {setCategories: Function}) => {
    const [product, setProduct] = useState<Item | null>(null)
    const id = useParams().id

    useEffect(() => {
     fetch(`/api/items/${id}`)
      .then(res => res.json())
      .then(data => {
         props.setCategories(data.categories)
         setProduct(data.item)})
      }, [])

     if (product === null) {
        return <Loader/>
     } else {
        return <section className='product'>
            <img src={product.picture} alt=''/>
            <aside>
               <div className='row'>
                  <span>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
                  {product.sold_quantity ? <span>- {product.sold_quantity} vendidos</span> : ''}
               </div>
               <h1>{product.title}</h1>
               <h2>
                  <span>$ </span>
                  <span>{product.price.amount}</span>
                  <span className='decimals'>{product.price.decimals === 0 ? '00' : product.price.decimals}</span> 
               </h2>
               <button>Comprar</button>
            </aside>
            <footer>
               <h3>Descripción del producto</h3>
               <p>{product.description}</p>
            </footer>
        </section>
     }
     
    
}

export default Product