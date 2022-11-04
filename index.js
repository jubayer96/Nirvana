const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const port = 4302;
const sessionName = 'project_' + port;

const app = express();

const dbQuery = require('./modules/db/query');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        name: sessionName,
        resave: false,
        secret: 'hello world',
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            httpOnly: false
        }
    })
);

app.post('/login', loginHandler);
app.get('/logout', isAuthenticated, function (req, res) {
    req.session.destroy(err => {
        if (err) return res.redirect('/login.html');
    });

    res.clearCookie(sessionName);
    res.redirect('/login.html');
});

app.post('/editProfile', editHandler);
app.listen(port, listenHandler);

app.use('/doctor', isAuthenticated, isDoctor, require('./router/doctor.js'));

function listenHandler() {
    console.log(`Server running on port ${port}`);
}

function loginHandler(req, res) {

    const sql = 'select * from person where email=? and password=?';
    const params = [req.body.email, req.body.secret];

    dbQuery(sql, params, function (err, results, fields) {

        if (err) throw err;

        let user = { type: 'invalid'};
        if(results.length) {
            user = results[0];
            delete user.password;

            req.session.user = user;
        }
        
        return res.redirect(`/${user.type}`);
    });
}

function isAuthenticated (req, res, next) {
    const user = req.session.user;
    if (user) return next();
    res.redirect('/login.html');
}

function isDoctor (req, res, next) {
    if(req.session.user.type === 'Doctor') return next();

    res.status(403).send('Unauthorized access');
}

function editHandler(req, res) {

        const sqlU = `UPDATE person SET name=? WHERE id = ${req.session.user.id}`;
        const params = [req.body.username];

        dbQuery(sqlU, params, function (err) {

            if (err) throw err;
        });
}
//console.log(module);