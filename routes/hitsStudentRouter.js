const express = require('express')
const con = require('../db')
let router = express.Router();
router.get('/', (req, res) => {
    console.log('hits-student-login')
    res.render("hits-student.hbs", {
        login: true
    })
})

router.get('/:category', (req, res) => {
    let category = req.params.category;
    if (category !== 'movies' && category !== 'songs' && category !== 'books') {
        return res.send('you are pervert')
    };
    let genre = req.query.genre;
    if (genre === undefined) {
        con.execute(`select * from ${category}`, (err, result) => {
            if (err) console.error(err)
            res.render("hits-student.hbs", {
                data: result,
            })
        })
    } else {
        con.execute(`select * from ${category} where genre = ?`, [genre], (err, result) => {
            if (err) console.error(err)
            res.render("hits-student.hbs", {
                data: result,
            })
        })
    }

})

router.get('/:category/:star', (req, res) => {
    console.log(req.params)
    const sql = `SELECT * FROM  ${req.params.category} where mark = ${req.params.star}`;
    console.log(sql)
    con.query(sql, (err, result) => {
        res.json({ data: result })
    })
})


router.post('/login', function (req, res) {
    const { username, password } = req.body;
    con.execute(`select * from usersdata where username = ? and password = ?`, [username, password], function (err, result) {
        if (err) {
            console.log(err);
            return res.render('hits-student.hbs', {
                login: true,
                try: true,
                correct: false
            })
        }
        if (result.length !== 0) {
            return res.render('hits-student.hbs', {
                login: true,
                try: true,
                correct: true,
                flag: process.env.FLAG_1
            })
        } else {
            return res.render('hits-student.hbs', {
                login: true,
                try: true,
                correct: false
            })
        }

    })

})
module.exports = router;