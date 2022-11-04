const express = require('express');
const router = express.Router();
const session = require('express-session');

const profileView = require('../view/doctor/profile');
const requestListView = require('../view/doctor/requestList.js');
const scheduleView = require('../view/doctor/schedule.js');


router.get('/', (req,res)=>res.send(profileView(req.session.user)));
router.get('/profile', (req,res)=>res.send(profileView()));
router.get('/requestlist', (req,res)=>res.send(requestListView()));
router.get('/schedule', (req,res)=>res.send(scheduleView()));



module.exports = router;