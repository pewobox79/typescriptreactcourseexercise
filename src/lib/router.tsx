import {createBrowserRouter} from "react-router-dom";

import ToDos from "../pages/Todos";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/todos",
                element: <ToDos/>,
            },
            {
                path: "*",
                element: <h1>error</h1>
            }
        ],
    },
]);

export default router