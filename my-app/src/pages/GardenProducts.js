import React from 'react'
import ProductCatalog from '../components/ProductCatalog'

export default function GardenProducts() {
    const gardenProductsArray = [{ id: 1, productName: "Garage Garden Tool", price: 20000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818oDB75xrL._AC_SL1500_.jpg' },
    { id: 2, productName: "Gallon Watering Can", price: 50000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71670PlcD0L._AC_SL1500_.jpg' }, { id: 3, productName: "Safety Work Gloves", price: 10000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Vch61qphS._SL1500_.jpg' }]
    return (
        <div><ProductCatalog catalogArrayToRender={gardenProductsArray} catalogTitle="Garden Products" /></div>
    )
}