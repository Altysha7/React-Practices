import React from 'react'

export default function ProductCatalogItem({ itemToRender }) {
    return (
        <div key={itemToRender.id}>
            <h1>Name of product: {itemToRender.productName}</h1>

            <p>Price: <b>{itemToRender.price}</b> $</p>
            <p>Country: {itemToRender.country}</p>
            <p>Articul: <b>{itemToRender.id}</b></p>
            <img src={itemToRender.img} alt={itemToRender.productName} style={{ maxWidth: "100px" }} />
        </div>
    )
}

