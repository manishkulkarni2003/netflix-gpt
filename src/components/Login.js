import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    //it will create a reference
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the Form Data 
        // console.log(email.current.value)
        // console.log(password.current.value)

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;
        //Create a new User 

        // Sign In Sign up LOgic 
        //Sign Up Logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    return updateProfile(user, {
                        displayName: name.current?.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayname, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayname: displayname,
                                photoURL: photoURL
                            })
                        )

                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(errorMessage)
                    });

                    console.log(user);
                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            // Sign in Logic 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user, "Sign in Successfull")
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg" alt="Background" />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}

                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md ">

                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input type="text" placeholder="Username" className="p-4 my-4 w-full bg-gray-600" />)}

                <input ref={email}
                    type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-600" />

                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600" />

                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered?Sign In now "}</p>
            </form>
        </div>
    )
}

export default Login
