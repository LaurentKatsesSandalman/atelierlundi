import { initialRecipes } from './data/recipe'
import './App.css'
import RecipeList from './components/RecipeList'
import ComparisonArea from './components/ComparisonArea'
import { Dispatch, SetStateAction, useState } from 'react'

export interface RecipeItem {
  image: string,
  name: string,
  desc: string,
}

export type RecipeListType = RecipeItem[]
export type ChosenSetState = Dispatch<SetStateAction<SelectedItems>>

const selectedRecipes = [null, null]
export type SelectedItems = [RecipeItem | null, RecipeItem | null]

function App() {
  const [chosen, setChosen] = useState(selectedRecipes)
  //const [recipes, setRecipes] = useState(initialRecipes)

  return (
    <>
      <RecipeList initialRecipes={initialRecipes} setChosen={setChosen} />
      <ComparisonArea initialRecipes={initialRecipes} setChosen={setChosen} />
    </>
  )
}

export default App
