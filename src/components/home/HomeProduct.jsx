import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import Container from '../Container';

const HomeProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])

    return (
        <Container>
            <div className="flex flex-col py-10">
                <div className='max-w-[768px] mx-auto'>
                    <h3 className="text-[50px] text-center home-product-cat mb-8">DAILY DEALS!</h3>
                </div>

                <div className="home-product grid grid-cols-4 gap-6">
                    {
                        product.map(item => <SingleProduct key={item.id} product={item} />)
                    }
                </div>

            </div>
        </Container>
    );
};

export default HomeProduct;