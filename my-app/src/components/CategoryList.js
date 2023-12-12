import React from 'react'
import FirstBtn from './FirstBtn'

const CategoryList = () => {

    const CategoryListData =
        [
            { categoryName: 'electronics', color: 'blue', },
            { categoryName: 'Furniture', color: 'gray', },
            { categoryName: 'Decoration', color: 'red', },
            { categoryName: 'Auto products', color: 'purple', },
            { categoryName: 'Garden products', color: 'green', },
        ]
    return (
        <div>CategoryList
            <ul>
                {/* <FirstBtn src={'Electronics'} color={'blue'} />
                <FirstBtn src={'Furniture'} color={'gray'} />
                <FirstBtn src={'Decoration'} color={'red'} />
                <FirstBtn src={'Auto products'} color={'purple'} />
                <FirstBtn src={'Garden products'} color={'green'} /> */}



                {CategoryListData.map(({ categoryName, color }) => <FirstBtn src={categoryName} color={color} />)}
            </ul>
        </div>
    )
}


export default CategoryList