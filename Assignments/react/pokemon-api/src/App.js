import {useState} from "react"

function App() {

  const [searchStr, setSearchStr] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [wait, setWait] = useState(false);

  const getPokemons = async () => {
    try {
      setWait(true);
      const res = await fetch(`https://pokeapi.co/api/v2/berry/${searchStr}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      setError("Not Found");
      setPokemon(null);
      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setWait(false);
      setSearchStr("");
    }
  }

  return (
    <div className="bg-gray-800 min-h-[100vh] text-white">
      <div className="container mx-auto px-2">
        <h1 className="text-[40px] text-center pt-10">Find Pokemon</h1>
        <div className="max-w-[600px] mx-auto flex pt-10">
          <input value={searchStr} onChange={(e)=>setSearchStr(e.target.value)} className="flex-1 py-2 px-5 text-black" placeholder="id or name"/>
          <button onClick={getPokemons} className="bg-green-500 py-2 px-5">Search</button>
        </div>

       {
         error && <h1 className="text-[40px] text-center mt-10">{error}</h1>
       }
       {
         wait && <h1 className="text-[40px] text-center mt-10">Please Wait...</h1>
       }
       {
        pokemon && <div className="mt-10">
                      <p className="text-[30px]"><span className="font-bold text-green-600">Name:</span> <span>{pokemon?.name}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Firmness:</span> <span>{pokemon?.firmness?.name}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Growth Time:</span> <span>{pokemon?.growth_time}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Max Harvest:</span> <span>{pokemon?.max_harvest}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Max Harvest:</span> <span>{pokemon?.max_harvest}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Natural Gift Power:</span> <span>{pokemon?.natural_gift_power}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Size:</span> <span>{pokemon?.size}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Smoothness:</span> <span>{pokemon?.smoothness}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Soil Dryness:</span> <span>{pokemon?.soil_dryness}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Natural Gift Type:</span> <span>{pokemon?.natural_gift_type?.name}</span></p>
                      <p className="text-[30px]"><span className="font-bold text-green-600">Flavors:</span> <span className="">{
                        pokemon?.flavors?.map((f,i) => {
                          if(i === 0){
                            return <span key={i}>{f?.flavor?.name}</span>
                          }
                          else{
                            return <span key={i}>,{f?.flavor?.name}</span>
                          }
                        })
                        }</span></p>
                    
                    </div>
       }
       </div>
    </div>
  );
}

export default App;
