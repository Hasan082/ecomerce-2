import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DetailProduct from "../components/products/DetailProduct";


const router = createBrowserRouter([
    {

        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:id",
                element: <DetailProduct />
            }
        ]
    }
])

export default router;