import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";

const SingleProduct = ({ product }) => {
    const { title, price, image, rating } = product || {};
    const { rate } = rating || {}; 

    return (
        <div className="single-product">
            <div className="flex flex-col border-2 box-border radius-3">
                <div className="w-full h-[230px] flex align-items-center justify-center px-2 py-5 box-border">
                    <img className="max-h-[200px]" src={image} alt={title} />
                </div>
                <div className="flex items-center justify-between bg-purple-700">
                    <div className="max-w-[50px] px-3 py-2">
                        <button className="text-white">
                            <MdFavoriteBorder  />
                            </button>
                    </div>
                    <Link className="px-3 py-2 text-white" to="">Show Details</Link>
                    <div className="max-w-[50px] px-3 py-2">
                        <button className="text-white">
                            <FaEye />
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h4>{title}</h4>
                <div>{rate}</div>
                <div>{price}</div>
            </div>
        </div>
    );
};

export default SingleProduct;