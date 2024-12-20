import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"

const Body = () => {

    //Created a Router Routes
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />

        }


    ])

    return (
        <div>
            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body
