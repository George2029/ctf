const express = require("express");
require("dotenv").config();
const app = express();
const { lookup } = require("geoip-lite");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "hbs");

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  console.log("main");
  res.render("index.hbs");
});
app.use("/hits-student", require("./routes/hitsStudentRouter"));
app.use("/static", express.static("public"));

app.get("/shitso", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  try {
    if (lookup(ip).country !== "UA") {
      return res.render("shitso.hbs", {
        message: "to be honored you have to have to go to fight in Ukraine ",
      });
    } else {
      if (!req.headers["accept-language"]?.includes("ua")) {
        return res.render("shitso.hbs", {
          message: "to be a good spy you need to know enemy`s language ",
        });
      } else {
        if (parseInt(req.headers["date"]) !== 2030) {
          return res.render("shitso.hbs", {
            message: `you are a great russian! i hope you are not too upset about losing 2 legs, it's all worth it. 
            you'll be honored in 2030.
            `,
          });
        } else {
          if (req.headers["user-agent"] === "SpecialPutinBrowser") {
            return res.render("shitso.hbs", {
              message: `
              well done, comrade
              ${process.env.FLAG_2}
              `,
            });
          } else {
            return res.render("shitso.hbs", {
              message: `
              make sure you use SpecialPutinBrowser to receive your reward
              `,
            });
          }
        }
      }
    }
  } catch (error) {
    return res.render("shitso.hbs", {
      message: `non-patriots don't receive flags here... 
      come to visit this website when you will be serving the motherland in ukraine... `,
    });
  }
});

app.listen(process.env.APP_PORT, () =>
  console.log(`listening on http://localhost:${process.env.APP_PORT} `)
);
