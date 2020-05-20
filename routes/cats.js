var router = require('express').Router()
const {
    login, signup, catList,
    liked, unliked, addInterest,
    removeInterest, updatePreferences
} = require('../controllers/catsController')
const authMiddleware = require('../config/constants')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', authMiddleware ,catList)
router.post('/liked', liked)
router.post('/unliked', unliked)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preference', updatePreferences)

module.exports = router