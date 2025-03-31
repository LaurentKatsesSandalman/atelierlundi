import { ChosenSetState, RecipeItem, RecipeListType } from "../App"
import RecipeCard from "./RecipeCard"

interface RecipeListProps {
    initialRecipes: RecipeListType,
    setChosen: ChosenSetState
}


function RecipeList({ initialRecipes, setChosen }: RecipeListProps) {
    const handleOnClick = (recipe: RecipeItem) => {
        setChosen((prev) => {
            if (prev[0] === null) {
                prev[0] = recipe;
                return prev
            }
            if (prev[1] === null) {
                prev[1] = recipe;
                return prev
            }
            prev[0] = prev[1];
            prev[1] = recipe;
        })
    }

    return (
        <>
            {initialRecipes.map((recipe) => (
                <>
                    <RecipeCard recipe={recipe} key={recipe.name} />
                    <button type="button" onClick={(recipe) => handleOnClick(recipe)}>"Comparer"</button>
                </>
            ))
            }
        </>)

}

export default RecipeList