var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        /*
         When a new JavaScript feature is proposed and gains support,
         the community often wants to use it before it’s supported by all browsers.
         The only way to be sure that your code will work is to convert it to more widely
         compatible code before running it in the browser. This process is called compiling.
         One of the most popular tools for JavaScript compilation is Babel.

         babel transforms javascript code into syntax that can be interpreted by a wider range of browsers

         we’re running the babel-loader on all imported JavaScript files except those found in the node_modules folder
         */
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },

    /*
        Setting the devtool property to '#source-map' tells webpack that you want to use source mapping.
        The next time you run webpack, you’ll see that two output files are generated and
        added to the dist folder: the original bundle.js and bundle.js.map.
     */
    devtool: "source-map"
};
