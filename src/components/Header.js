import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

    const handleGptSearchClick = () => {
        //Toggle Gpt Search
        dispatch(toggleGptSearchView())
    }
    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    }
    return (

        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-40"

                src={LOGO} alt="LoGo" />
            {user && (
                <div className="flex p-2">
                    {showGptSearch && (
                        <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange} >
                            {SUPPORTED_LANG.map(langs => <option key={langs.identifier} value={langs.identifier}  >{langs.name}</option>)}


                        </select>)}
                    <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
                    <img className="w-10 h-10 "
                        src={USER_AVATAR} alt="User icon" />
                    <button onClick={handleSignout} className="font-bold text-white">Sign Out</button>
                </div>)}
        </div>
    )
}
export default Header;