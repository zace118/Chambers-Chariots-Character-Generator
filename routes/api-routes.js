// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                name: req.user.name,
                email: req.user.email,
                id: req.user.id
            });
        }
    });


    // Route for posting a character to the database
    app.post("/api/post_character", function (req, res) {
        // console.log(req.body);
        // console.log(db.user);
        db.SubmitCharacter.create({
            name: req.body.name,
            race: req.body.race,
            subrace: req.body.subrace,
            class: req.body.charClass,
            alignment: req.body.alignment,
            strScore: req.body.str,
            dexScore: req.body.dex,
            conScore: req.body.con,
            intScore: req.body.int,
            wisScore: req.body.wis,
            chaScore: req.body.cha
        }).then(function (dbPost) {
            // return the result to the user with res.json
            res.json(dbPost);
        }).catch(function (err) {
            res.status(401).json(err);
        });
    });

    // Route for getting the user data
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's name, email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                name: req.user.name,
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    // Route for getting the all the posted characters data
    app.get("/api/post_character", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.SubmitCharacter.findAll({}).then(function (char) {
            console.log(char);
            // We have access to the todos as an argument inside of the callback function
            res.json(char);
        });
    });
}