const express = require('express');
const hbs = require("hbs");
const app = express();

/** Configure engine */
app.set('view engine', 'hbs');
app.set("views", `${__dirname}/views`);

//*Configure partials*/
hbs.registerPartials(__dirname + "/views/partials");

/**  Configure static files */
app.use(express.static("public"));

/** Configure POST body extraction */
app.use(express.urlencoded({ extended: true}));

const router = require("./config/routes.config");
app.use(router);


app.listen(3000, () => {
    console.log("Ready!");
})