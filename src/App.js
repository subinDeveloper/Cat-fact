import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const [catfact,setCatFact] = useState("")

  const fetchData = async () =>{
const {data} = await axios.get ("https://catfact.ninja/fact") 
// console.log(data.fact);
setCatFact (data.fact)
  }
  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <div className="flex justify-center h-screen flex-col items-center gap-4 text-2xl px-4 bg-black">
      <button onClick={fetchData} className="px-16 py-4 bg-yellow-400 ">Genarat cat fact</button>
      <h1 className="text-white">{catfact}</h1>
    </div>
  );
}

export default App;
