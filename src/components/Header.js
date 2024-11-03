import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const handleSignout = () => {
        signOut(auth).then(() => {

            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //User Sign in

                const { email, uid, displayname, photoURL } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayname: displayname,
                    photoURL: photoURL
                }))
                navigate("/browse")
            }
            else {
                //User Signout
                dispatch(removeUser())
                navigate("/")

            }
        });
        //unsubscribe when the component unmount  
        return () => unsubscribe()
    }, [])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-40"

                src={LOGO} alt="LoGo" />

            <div className="flex p-2">
                <img className="w-10 h-10 "
                    src={USER_AVATAR} alt="User icon" />
                <button onClick={handleSignout} className="font-bold text-white">Sign Out</button>
            </div>
        </div>
    )
}
export default Header;