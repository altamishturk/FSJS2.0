import {useState,useEffect} from "react";
import Cross from "./cross-23.svg";

function App() {

  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mealStr, setMealStr] = useState("");
  const [error, setError] = useState("");
  const [wait, setWait] = useState(false);

  const getMeal = async () => {
    try {
      setWait(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealStr}`)
      const data = await res.json();
      setMeals(data?.meals);
      if(data?.meals === null){
        setError("Not Found");
        setTimeout(() => {
          setError("");
        }, 2000);
      }

    } catch (error) {
      setError("Not Found");
      setTimeout(() => {
        setError("");
      }, 2000);
    } finally {
      setWait(false);
      setMealStr("");
    }
    
  }

  useEffect(() => {
    (async ()=>{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      const data = await res.json();
      setCategories(data.categories);
    })()
  }, []);

  return (
    <div className="bg-gray-800 min-h-[100vh] text-white">
      <div className="container mx-auto px-2">
        <h1 className="text-[40px] text-center pt-10">Find Meal and It's recipe</h1>
        <div className="max-w-[600px] mx-auto flex pt-10">
          <input value={mealStr} onChange={(e)=>setMealStr(e.target.value)} className="flex-1 py-2 px-5 text-black" placeholder="Search Meal..."/>
          <button onClick={getMeal} className="bg-green-500 py-2 px-5">Search</button>
        </div>



        <div className="mt-14">
          {
          error && <h1 className="text-[40px] text-center mb-14">{error}</h1>
          }
          {
            wait && <h1 className="text-[40px] text-center mb-14">Please Wait...</h1>
          }
          <div className="flex flex-wrap gap-5 justify-center">
            {
              meals?.map((meal,index) => (
                <Meal key={index} index={index} meal={meal}/>
                ))
            }
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-[40px] text-center py-10">Categories</h1>
          <div className="flex flex-wrap  gap-10 justify-center">
            {
              categories.map(cat => (
                <Categories key={cat.idCategory} cat={cat}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




function Categories({cat}){


  return (
    <>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="rounded-t-lg w-full" src={cat?.strCategoryThumb} alt="" />
            </a>
            <div className="p-5">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cat?.strCategory}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cat?.strCategoryDescription?.length > 150? `${cat?.strCategoryDescription.substring(0,150)} more...`:cat?.strCategoryDescription}</p>
            </div>
        </div>
    </>
  )
}


function Meal({meal,index}){
  const [show, setShow] = useState(false);
  const copyMeal = {};
  const arr = [];
  const exclude = ["strTags","strSource","strYoutube","idMeal","strMealThumb","strMeal","strCategory","strArea","strInstructions"];

  for (const key in meal) {
    if(meal[key] && exclude.indexOf(key) === -1){
      let newKey = key.replace("str","");
      arr.push(newKey);
      copyMeal[newKey] = meal[key]
    }
  }

  return (
    <div className="">
      <div className="text-center">
        <button onClick={()=>setShow(true)} className="bg-green-500 px-5 py-2">{index+1}. {meal?.strMeal} ({show? "Hide":"Show"} Recipe)</button>
      </div>
      {
        show && <>
          <div className="flex items-center justify-center overflow-y-scroll fixed w-full h-full top-0 left-0 bg-black/80"> 
            <div className="flex flex-col m-2 mt-[200px]  bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full h-10 flex justify-end">
                  <img onClick={()=>setShow(false)} src={Cross} alt="cross" className="w-10 h-10 cursor-pointer"/>
                </div>
                <img className="h-[300px]" src={meal["strMealThumb"]} alt="recipe"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meal["strMeal"]}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{meal["strCategory"]}</h5>
                    <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{meal["strArea"]}</p>
                    <p className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">{meal["strInstructions"]}</p>
                    <p className="text-black font-bold">Details: </p>
                    <div className="border px-5">
                      {
                        arr && arr.map(key => (
                          <p className="text-black text-[14px]" key={key}><span className="font-bold">{key}</span>: <span>{copyMeal[key]}</span></p>
                          ))
                        }
                     </div>
                </div>
            </div>
          </div>
          </>
      }
    </div>
  )
}
