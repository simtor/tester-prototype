const express = require('express')
const router = express.Router()

router.get('/examples/template-data', function(req, res) {
    res.render('examples/template-data', { 'name' : 'Foo' });
});

module.exports = router
