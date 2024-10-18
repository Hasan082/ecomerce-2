import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import Container from '../Container';

const HomeProduct = () => {
    const [jewelery, setJewelery] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [tab, setTab] = useState('jewelery');


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setJewelery(json))

        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setElectronics(json))

    }, [])

    const tabHandler = (tab) => {
        setTab(tab);
    }

    return (
        <Container>
            <div className="flex flex-col py-10">
                <div className='max-w-[768px] mx-auto'>
                    <h3 className="text-[50px] text-center home-product-cat mb-8">DAILY DEALS!</h3>
                </div>

                <div className='tabWrapper'>
                    <div className='tabs flex gap-3 mb-5 justify-center'>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'jewelery' ? 'active' : ''}`} onClick={() => tabHandler('jewelery')}>Jewelery</button>
                        <button className={`tab px-5 py-3 text-[25px] transition-all ${tab == 'electronics' ? 'active' : ''}`} onClick={() => tabHandler('electronics')}>Electronics</button>
                    </div>
                    <div className='tabContent'>
                        {tab == 'jewelery' &&
                            <div className="home-product grid grid-cols-4 gap-6 active">
                                {
                                    jewelery.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                        {
                            tab == 'electronics' &&
                            <div className="home-product grid grid-cols-4 gap-6">
                                {
                                    electronics.map(item => <SingleProduct key={item.id} product={item} />)
                                }
                            </div>
                        }
                    </div>
                </div>





            </div>
        </Container>
    );
};

export default HomeProduct;