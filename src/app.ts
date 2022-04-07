import express from "express";
import compression from "compression"; 
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import flash from "express-flash";
import path from "path";
import morgan from "morgan";
import * as homeController from "./controllers/home";

const app = express();

//To manipulate dates
app.locals.moment = require("moment");

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: "secret",
                  resave: false, 
                  saveUninitialized: false}));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(morgan("tiny"));


/**
 * Routes.
 */

app.post("/", homeController.index);

export default app;
