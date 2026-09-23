import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then((res) => {
            setProduct(res)
        })
    }, [])


    return (
        <div>
            {
                product ? (
                    <div>
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>

                    </div>
                ) : <p>Loading..</p>
            }
        </div>
    )
}

export default ProductDetails
