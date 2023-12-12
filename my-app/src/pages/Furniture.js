import React from 'react'
import ProductCatalog from '../components/ProductCatalog'

export default function Furniture() {
    const furnitureArray = [{ id: 1, productName: "Chair", price: 500000, img: 'https://www.ikea.com/ph/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=xl' },
    { id: 2, productName: "Table", price: 350000, img: 'https://www.gigahertz.com.ph/cdn/shop/products/1d7af7f7972810af3544c763c3a2b3a2.webp?v=1688724271&width=1000' }, { id: 3, productName: "Gaming chair", price: 100000, img: 'https://sylpauljoyce.com.ph/cdn/shop/products/Bella06.jpg?v=1640779377' }]
    return (
        <div><ProductCatalog catalogArrayToRender={furnitureArray} catalogTitle="Furniture" /></div>
    )
}
