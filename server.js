//requerimos express npm
var express = require("express");

//para poder usarlo lo agregamos a la variable app, de forma que todo estará como app.get (por ej.)
var app = express();

//el puerto donde lo veremos
var PORT = process.env.PORT || 8080;

//esto es obligatorio ponerlo (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//aquí vinculamos lo que tenemos dentro de esos archivos y poder usarlos en el servidor
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//esto saldrá en node si el servidor funciona
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
