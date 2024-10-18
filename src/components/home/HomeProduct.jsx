import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import { Tabs } from 'antd';
import Container from '../Container';

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
        label: 'Mensclothing',
    },
    {
        key: 'womensclothing',
        label: 'Womensclothing',
    },
];

const HomeProduct = () => {
    const [jewelery, setJewelery] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mensclothing, setMensclothing] = useState([]);
    const [womensclothing, setWomensclothing] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {

        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setJewelery(json))

        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setElectronics(json))

        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(json => setMensclothing(json))

        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then(res => res.json())
            .then(json => setWomensclothing(json))

    }, [])


    useEffect(() => {
        setProducts([...jewelery])
    }, [jewelery])

    const onChange = (key) => {
        if (key === 'jewelery') {
            setProducts(jewelery);
        } else if (key === 'electronics') {
            setProducts(electronics);
        } else if (key === 'mensclothing') {
            setProducts(mensclothing);
        } else if (key === 'womensclothing') {
            setProducts(womensclothing);
        }
    };


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


                {/* <div className='tabWrapper'>
                    <div className='tabs flex gap-3 mb-5 justify-center'>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'jewelery' ? 'active' : ''}`} onClick={() => tabHandler('jewelery')}>Jewelery</button>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'electronics' ? 'active' : ''}`} onClick={() => tabHandler('electronics')}>Electronics</button>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'mensclothing' ? 'active' : ''}`} onClick={() => tabHandler('mensclothing')}>Men&apos;s clothing</button>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'womensclothing' ? 'active' : ''}`} onClick={() => tabHandler('womensclothing')}>Women&apos;s clothing</button>
                    </div>
                    <div className='tabContent'>

                        {tab == 'jewelery' &&
                            <div className="home-product grid grid-cols-4 gap-6 active">
                                {
                                    jewelery?.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                        {
                            tab == 'electronics' &&
                            <div className="home-product grid grid-cols-4 gap-6">
                                {
                                    electronics?.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                        {
                            tab == 'mensclothing' &&
                            <div className="home-product grid grid-cols-4 gap-6">
                                {
                                    mensclothing?.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                        {
                            tab == 'womensclothing' &&
                            <div className="home-product grid grid-cols-4 gap-6">
                                {
                                    womensclothing?.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                    </div>
                </div> */}





            </div>
        </Container>
    );
};

export default HomeProduct;