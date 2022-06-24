import React from "react";
import { render } from "react-dom";
import Menu from "./components/menu";
import data from "./data/recipes.json";

// The starting file for our Recipes app is index.js
// This is what we want to run in the browser first.
render(
    <Menu recipes={data} />,
    document.getElementById("root")
);
