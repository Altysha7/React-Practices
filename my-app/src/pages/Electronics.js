import React, { useState } from 'react'
import ProductCatalog from '../components/ProductCatalog'
import ButtonCountry from '../components/ButtonCountry'

export default function Electronics() {

    const [searchValue, setSearchValue] = useState('')
    const [countryList, setCountryList] = useState([])

    const electronicArray = [
        { id: 1, productName: "Iphone 15", price: 500000, country: 'America', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378' },
        { id: 2, productName: "Laptop", price: 350000, country: 'Korea', img: 'https://www.gigahertz.com.ph/cdn/shop/products/1d7af7f7972810af3544c763c3a2b3a2.webp?v=1688724271&width=1000' },
        { id: 3, productName: "Naushniki", price: 100000, country: 'Japan', img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' },
        { id: 4, productName: "Naushniki", price: 700000, country: 'Japan', img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' },
        { id: 5, productName: "Naushniki", price: 100000, country: 'Japan', img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' },
        { id: 6, productName: "Mouse", price: 4100000, country: 'Brazila', img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' },
        { id: 7, productName: "Mouse", price: 500000, country: 'Brazila', img: 'https://www.yablochko.ru/upload/resize_cache/iblock/c2d/600_0_140cd750bba9870f18aada2478b24840a/MGYJ3RU%20(2).jpg' }
    ]
    return (
        <div>

            <ButtonCountry setCountryList={setCountryList} countryList={countryList} />
            <input type='text' placeholder='Enter searching name' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            <ProductCatalog catalogArrayToRender={electronicArray.filter((item) => {
                if (countryList.length === 0) {
                    return item
                }
                if (countryList.includes(item.country)) {
                    return item
                }
            }).filter((item) => {
                if (item.productName.toLowerCase().includes(searchValue.toLowerCase()) || item.country.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item
                }
                // if (item.country.toLowerCase().includes(searchValue.toLowerCase())) {
                //     return item
                // }
            })} catalogTitle="Electronics" /></div>
    )
}
