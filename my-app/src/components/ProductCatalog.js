import React from 'react'
import ProductCatalogItem from './ProductCatalogItem'


const ProductCatalog = ({ catalogArrayToRender, catalogTitle }) => {
    return (
        <div>
            <h1>{catalogTitle}</h1>

            <ul style={{ display: "flex", justifyContent: 'space-around' }}>
                {catalogArrayToRender.map((item) => <ProductCatalogItem itemToRender={item} />)}
            </ul>


        </div>
    )
}

export default ProductCatalog
