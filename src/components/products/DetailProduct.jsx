import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Container from "../Container";


const DetailProduct = () => {
    const [single, setSingle] = useState({});
    const { id } = useParams();

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setSingle(res.data))
            .catch(err => console.log(err))

    }, [id]);

    const { title, price, image, category, description, rating } = single || {};
    const { rate, count } = rating || {};

    return (
        <Container>
            <div className="grid grid-cols-2">
                <div className="product-img p-3">
                    <img src={image} alt="" />
                </div>
                <div className="product-details ms-5 p-3">
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>{rate}</p>
                    <p>{count}</p>
                    <Link className="px-5 py-2 bg-black text-white mt-3 inline-block" to="/cart">Add To Cart</Link>
                </div>
            </div>
        </Container>
    );
};

export default DetailProduct;