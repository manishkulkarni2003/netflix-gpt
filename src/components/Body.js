import { createBrowserRouter } from "react-router-dom"
import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
    const dispatch = useDispatch()

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //User Sign in

                const { email, uid, displayname, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayname: displayname }))



            }
            else {
                //User Signout
                dispatch(removeUser())

            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body
