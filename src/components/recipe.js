import React from "react";
import IngredientsList from "./ingredientsList";
import Instruction from "./instructions";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={ name.toLowerCase().replace(/ /g, "-") }>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instruction steps={steps} title="Cooking Instructions"/>
        </section>
    );
}

export default Recipe;
