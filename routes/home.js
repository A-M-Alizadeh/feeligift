const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.render('index',{title: 'FeeliGift', message: 'Salam'})
});

module.exports = router;