import { RouterProvider } from "react-router-dom";
import route from "./router/MainRouter";

const App = () => {
    return (
        <>
        <RouterProvider router={route}/>
        </>
    )
}

export default App;