import React from 'react'
import ProductCatalog from '../components/ProductCatalog'

export default function Electronics() {
    const electronicArray = [
        { id: 1, productName: "Iphone 15", price: 500000, img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378' },
        { id: 2, productName: "Laptop", price: 350000, img: 'https://www.gigahertz.com.ph/cdn/shop/products/1d7af7f7972810af3544c763c3a2b3a2.webp?v=1688724271&width=1000' },
        { id: 3, productName: "Naushniki", price: 100000, img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' }
    ]
    return (
        <div><ProductCatalog catalogArrayToRender={electronicArray} catalogTitle="Electronics" /></div>
    )
}
