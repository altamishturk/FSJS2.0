import {useState} from "react"

function App() {

  const [searchStr, setSearchStr] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [wait, setWait] = useState(false);
  const arr1 = [];
  const arr = [];
  const exclude = ["Poster"];
  for (const key in movie) {
    if(exclude.indexOf(key) === -1){
      if(arr.length > 11){
        arr1.push(key)
      }
      else{
        arr.push(key)
      }
    }
  }

  const getMovie = async () => {
    setWait(true);
    const key = "8736c4fe";
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${searchStr}`);
    const data = await res.json();
    setWait(false);
    if(data.Response !== "False"){
      setMovie(data);
      setSearchStr("");
    }
    else{
      setMovie(null);
      setError(data.Error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div className="bg-gray-800 min-h-[100vh] text-white">
      <div className="container mx-auto px-2">
        <h1 className="text-[40px] text-center pt-10">Find Movie</h1>
        <div className="max-w-[600px] mx-auto flex pt-10">
          <input value={searchStr} onChange={(e)=>setSearchStr(e.target.value)} className="flex-1 py-2 px-5 text-black" placeholder="movie title..."/>
          <button onClick={getMovie} className="bg-green-500 py-2 px-5">Search</button>
        </div>

        {
          error && <h1 className="text-[40px] text-center mt-10">{error}</h1>
        }
        {
          wait && <h1 className="text-[40px] text-center mt-10">Please Wait...</h1>
        }

       {
        movie && <div className="mt-10 flex flex-wrap">
                      <div className="p-4 w-full md:w-[33%]">
                        {
                          arr.map(key => (
                            <p className="text-[16px] mb-3" key={key}>
                              <span className="font-bold text-green-600" >{key} :</span> 
                              <span className="text-[12px]">{" "}{movie[key]}</span>
                            </p>
                          ))
                        }
                      </div>
                      <div className="w-full md:w-[33%] flex justify-center">
                         <img src={movie?.Poster} alt="movie" />
                      </div>
                      <div className="p-4 w-full md:w-[33%]">
                        {
                          arr1.map(key => (
                            <p className="text-[16px] mb-3" key={key}>
                              <span className="font-bold text-green-600" >{key} :</span> 
                              <span className="text-[12px]">{" "}{
                                key !== "Ratings"? movie[key]:<span className="flex flex-col ml-2 gap-2">
                                {
                                  movie[key].map((rating,inedx) => (
                                    <span className="" key={inedx}><span className="text-green-600 font-bold">{rating.Source} : </span><span>{rating.Value}</span></span>
                                  ))
                                }
                                </span>
                              }</span>
                            </p>
                          ))
                        }
                      </div>
                      {/* 
                      
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Genre </span> <span>{movie?.Genre}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Language </span> <span>{movie?.Language}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Metascore </span> <span>{movie?.Metascore}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Plot </span> <span>{movie?.Plot}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Production </span> <span>{movie?.Production}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Rated </span> <span>{movie?.Rated}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Ratings </span> <span>{JSON.stringify(movie?.Ratings)}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Released </span> <span>{movie?.Released}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Runtime </span> <span>{movie?.Runtime}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Title </span> <span>{movie?.Title}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Type </span> <span>{movie?.Type}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Website </span> <span>{movie?.Website}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Writer </span> <span>{movie?.Writer}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >Year </span> <span>{movie?.Year}</span></p>
                      <p className="text-[25px] mb-3 flex flex-col items-center" ><span className="font-bold text-green-600" >imdbVotes </span> <span>{movie?.imdbVotes}</span></p> */}
                  </div>
       }
       </div>
    </div>
  );
}

export default App;
