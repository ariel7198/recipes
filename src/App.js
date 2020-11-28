import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import Loadingskeleton from './components/Loadingskeleton'
import './App.css';

import { BsSearch } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {

  const APP_ID = '60f7a6ff'
  const APP_KEY = '17ec2845f168a3843e524d10537cdb31'

  const [isLoading, setIsLoading] = useState(true)

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])
  const [query, setQuery] = useState([])


  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    setIsLoading(true)
    // setTimeout( async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setIsLoading(false)
      setRecipes(data.hits)
      console.log('Resultado: ' + data.hits)
    } catch (e) {
      setIsLoading(false)
      toast.error('Algo está dando errado, aguarde alguns instantes e tente novamente')
    }
    // }, 50000)

  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    // setSearch('')
  }

  // if(isLoading){
  //   return(
  //     <div> Loading </div>
  //   )
  // }

  return (
    <div className="App">
      <div className="nav">
        <form onSubmit={getSearch} className="search-form">
          <input
            placeholder='Digite uma receita'
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch} />
          <button className="search-button" type='submit'>
            <BsSearch />
          </button>
        </form>
      </div>

      <div className='recipes'>
        {isLoading === true ? <Loadingskeleton /> : recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            healthLabels={recipe.recipe.healthLabels}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
          />
        ))}


        {/* {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            healthLabels={recipe.recipe.healthLabels}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
          />
        ))} */}


      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App;
