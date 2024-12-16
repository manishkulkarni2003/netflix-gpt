export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const API_KEY = process.env.REACT_APP_API_KEY

export const AUTH_DOMAIN = "netflixgpt-79dd1.firebaseapp.com"

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"

export const SUPPORTED_LANG = [{ identifier: "en", name: "English" },
{ identifier: "hindi", name: "Hindi" },
{ identifier: "telugu", name: "Telugu" },
{ identifier: "kannada", name: "Kannada" },
{ identifier: "marathi", name: "Marathi" },
{ identifier: "spanish", name: "Spanish" },
]



export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY