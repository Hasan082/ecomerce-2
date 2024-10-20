import { useEffect, useState } from "react";


const useProducts = () => {
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

    return {products, onChange};
};

export default useProducts;