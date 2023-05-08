const { Router } = require('express');

const router = Router();

router.get('/start', (req, res) => {
    res.send('This is working!')
})

module.exports = router