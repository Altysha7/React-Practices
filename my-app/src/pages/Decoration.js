import React from 'react'
import ProductCatalog from '../components/ProductCatalog'

export default function Decoration() {
    const decorationArray = [{ id: 1, productName: "Wall Decoration", price: 20000, img: 'https://down-ph.img.susercontent.com/file/8e48d6a8e9d202d789ab8f5164a7586a' },
    { id: 2, productName: "Fortune Tree", price: 50000, img: 'https://down-ph.img.susercontent.com/file/8c2a52a08ecbbb9c7655aa19c07a7e0b' }, { id: 3, productName: "Aesthetic Flower Vase", price: 10000, img: 'https://down-ph.img.susercontent.com/file/sg-11134201-22110-i96rsgs7lfjvb5' }]
    return (
        <div><ProductCatalog catalogArrayToRender={decorationArray} catalogTitle="Decoration" /></div>
    )
}