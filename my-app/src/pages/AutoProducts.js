import React from 'react'
import ProductCatalog from '../components/ProductCatalog'

export default function AutoProducts() {
    const autoProductsArray = [{ id: 1, productName: "Phone Holders for Your Car", price: 20000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TC3oUAmpL._AC_SL1500_.jpg' },
    { id: 2, productName: "Upgraded Bluetooth FM Transmitter", price: 50000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PwfA5KTeL._AC_SL1200_.jpg' }, { id: 3, productName: "Car Backseat Organizer", price: 10000, img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81l2uCVrNUL._AC_SL1500_.jpg' }]
    return (
        <div><ProductCatalog catalogArrayToRender={autoProductsArray} catalogTitle="Auto Products" /></div>
    )
}