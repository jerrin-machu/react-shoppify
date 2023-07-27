import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const { filtered_products : products, grid_view } = useFilterContext()

  if(products.length < 1){
    return <h2 style={{ textTransform: 'none '}}>Sorry there are no products matching your search criteria </h2>
  }

  if(grid_view === false){
    return <ListView products= {products}/>
  }

  return<GridView products= {products}> Product list</GridView>
}

export default ProductList
