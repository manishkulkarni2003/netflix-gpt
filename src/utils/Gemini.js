import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI({
    apiKey: GEMINI_KEY,
});

export default genAI;