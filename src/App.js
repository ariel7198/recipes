import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css';

import { BsSearch } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {

  const APP_ID = '60f7a6ff'
  const APP_KEY = '17ec2845f168a3843e524d10537cdb31'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])
  const [query, setQuery] = useState([])

  useEffect(() => {
    getRecipes()
  }, [query])

  const showSleketon = () => {
    alert('Pesquisando...')
  }

  const getRecipes = async () => {
    
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
      console.log('Resultado: ' + data.hits)
    } catch (e) {
      toast.error('Algo está dando errado, aguarde alguns instantes e tente novamente')
    }
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    // setSearch('')
  }

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
        {recipes.map(recipe => (
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
