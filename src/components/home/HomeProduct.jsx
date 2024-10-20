import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import { Tabs } from 'antd';
import Container from '../Container';
import useProducts from '../../hooks/useproducts';

const items = [
    {
        key: 'jewelery',
        label: 'Jewelery',
    },
    {
        key: 'electronics',
        label: 'Electronics',
    },
    {
        key: 'mensclothing',
        label: "Men's Clothing",
    },
    {
        key: 'womensclothing',
        label: "Women's Clothing",
    },
];

const HomeProduct = () => {

    const {products, onChange} = useProducts();    

    return (
        <Container>
            <div className="flex flex-col py-10">
                <div className='max-w-[768px] mx-auto'>
                    <h3 className="text-[50px] text-center home-product-cat mb-8">DAILY DEALS!</h3>
                </div>
                <div className='tabWrapper'>

                    <Tabs
                        defaultActiveKey="jewelery"
                        items={items}
                        onChange={onChange}
                    />

                    <div className='tabContent mt-5'>
                        <div className="home-product grid grid-cols-4 gap-6">
                            {
                                products?.map(item => <SingleProduct key={item.id} product={item} />)
                            }
                        </div>
                    </div>
                    
                </div>

            </div>
        </Container>
    );
};

export default HomeProduct;