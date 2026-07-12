import { useState } from "react";
import axios from "axios";




const Dictionary = () => {
    const [word, setWord] = useState(" ");
    const [loading, setLoading] = useState (false);
    const [errors, setErrors] = useState (" ");
    const [wordData, setWordData] = useState(null);

    const searchWord = async () => {
        try {
            if(word.trim().length === 0){
                setErrors("please Enter a word...");
                return;
            }
            setLoading(true);
            setErrors(" ")
            let res = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/enteries/en/${word}`
            );
            console.log(res);
        } catch (error){
            console.log(error);
            setErrors("word not found");

            
        } finally {
            setLoading(false);
        }
    
        
    };

    return (
        <div className="min-h-screen bg-linear-to-r from-indigo-100 via-sky-100 to-cyan-100 flex justify-center items-center p-5">
           
        <div className="bg-white/50 w-full max-w-2xl rounded-3xl p-8 shadow-xl">
            <h1 className="text-4xl text-center font-bold text-indigo-600 mb-8">
               📑 Dictionary App
                </h1>

                <div className="flex gap-3">
                    <input type="text" placeholder="enter any word" 
                    className="flex-1 border-2 border-indigo-300 rounded-xl px-4 py-3 outline-none focus" value={word}
                    onChange={(e) => setWord(e.target.value)}/>
                    <button className="bg-indigo-800 text-white px-10 font-medium text-lg rounded-xl hover: bg-indigo-500 cursor-pointer" onClick={searchWord}>Search 🔍</button>

                </div>

                {loading && (<h2 className="text-center mt-6 text-lg text-indigo-400 font-semibold animate-pulse">searching</h2>
            )}

            {errors && (<h2 className="text-center mt-6 text-lg text-red-800 font-semibold">{errors}</h2>
        )}
        </div>
        </div>
    );
};

export default Dictionary;