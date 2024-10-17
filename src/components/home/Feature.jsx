import { useEffect, useState } from "react";
import FeatureSingle from "./FeatureSingle";
import Container from "../Container";

const Feature = () => {

    const [feature, setfeature] = useState([]);

    useEffect(()=>{
        fetch("/feature.json")
            .then(res=>res.json())
            .then(json=> setfeature(json))
    }, [])


    return (
        <Container>
            <div className="grid grid-cols-4 gap-3 py-10">
            {
                feature.map(item => <FeatureSingle key={item.id} item={item} />)
            }
            </div>
        </Container>
    );
};

export default Feature;