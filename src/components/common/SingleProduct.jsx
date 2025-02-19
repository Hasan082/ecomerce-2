import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";


const SingleProduct = ({ product }) => {
    const { id, title, price, image, rating } = product || {};
    const { rate } = rating || {}; 

    return (
        <div className="single-product">
            <div className="flex flex-col border-2 cursor-pointer box-border rounded-xl single-product-card-img relative py-10 overflow-hidden">
                <div className="w-full h-[230px] flex align-items-center justify-center px-2 py-5 box-border">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className="flex items-center justify-between bg-purple-700 price-card">
                    <div className="max-w-[50px] px-3 py-2">
                        <button className="text-white">
                            <MdFavoriteBorder  />
                            </button>
                    </div>
                    <Link className="px-3 py-2 text-white hover:bg-black transition-all duration-200" to={`/product/${id}`}>Show Details</Link>
                    <div className="max-w-[50px] px-3 py-2">
                        <button className="text-white">
                            <FaEye />
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h4 className="min-h-[72px] hover:text-purple-600 transition-all cursor-pointer my-1">{title}</h4>
                <div className="my-1">{rate}</div>
                <div className="font-bold">${price}</div>
            </div>
        </div>
    );
};

export default SingleProduct;