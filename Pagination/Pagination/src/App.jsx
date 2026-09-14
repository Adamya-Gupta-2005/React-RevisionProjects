import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const data = await res.json();

    if (data && data.products) setProducts(data.products)

  }

  const [products, setProducts] = useState([])
  const [pages, setPages] = useState(1)

  const selectPageHandeler = (selectedPage) => {

    if(selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== pages)
    setPages(selectedPage)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {
        products.length > 0 && (<div className='products'>
          {
            products.slice(pages*10 - 10,pages*10).map((prod) => {
              return <span className='products__single' key={prod.id}> <img src={prod.thumbnail} alt={prod.title} /> <span>{prod.title}</span> </span>
            })
          }

        </div>
      )}

      {
        products.length>0 && <div className='pagination'>
          <span onClick={() => selectPageHandeler(pages - 1)}>⬅️</span>

          {/** ... spread operator create a array filled with undefined so that map could work if not used it creates an empty array of size 10 */}
          {[...Array(products.length / 10)].map((_, i) => {
            return <span className={pages === i+1?"pagination__selected":""} onClick={() => selectPageHandeler(i+1)} key={i}>{i+1}</span>
          })}

          <span onClick={() => selectPageHandeler(pages + 1)}>➡️</span>
        </div>
      }
    </div>
  )
}

export default App
