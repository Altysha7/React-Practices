import React from 'react'

export default function ProductCatalogItem({ itemToRender }) {
    return (
        <div><h1>{itemToRender.productName}</h1>

            <p>{itemToRender.price}</p>
            <p>{itemToRender.id}</p>
            <img src={itemToRender.img} alt={itemToRender.productName} style={{ maxWidth: "100px" }} />
        </div>
    )
}

