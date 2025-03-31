import { RecipeItem } from "../App"

interface RecipeProps {
    recipe: RecipeItem,
    key: string,
}

function RecipeCard({ recipe, key }: RecipeProps) {


    return <div key={key}>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.name}</p>


    </div>
}

export default RecipeCard