const express = require('express')
const router = express.Router();

// @desc Login/Landing page
// @rout GET /
router.get('/', (req,res)=> {
res.render('login')
})

// @desc Dashboard
// @rout GET /dashboard
router.get('/dashboard', (req,res)=> {
    res.render('dashboard')
})

module.exports = router