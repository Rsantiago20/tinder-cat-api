const loginService = require('../Services/cats/login')
const signupService = require('../Services/cats/signup')
const addInterestService = require('../Services/cats/add-interest')
const removeInterestService = require('../Services/cats/remove-interest.js')
const updatePreferenceService = require('../Services/cats/update-preference')
const addLikedService = require('../Services/cats/add-liked')
const addUnLikedService = require('../Services/cats/add-liked')

const login = async (req, res) => {
    const { email,password } = req.query
    const response = await loginService(email, password)
    res.json(response)
}

const signup = async (req, res) => {
    const cat = req.body
    console.log('cats', cat)
    try{
        const response = await signupService(cat)
        res.json(response)
    }catch(err){
        res.json({ err })
    }
}

const catList = (req, res) => {
  const { catId } = req.query
  try{
  const response = await getAllCatsService(catId)
  res.json(response)
}catch(err){
    res.json({ err })
}

const liked = async (req, res) => {
    const { catId, catIdLiked } = req.body
    const response = await addLikedService(catId, catIdLiked)
    res.json(response)
  }
  
  const unliked = async (req, res) => {
    const { catId, catIdUnliked } = req.body
    const response = await addUnlikedService(catId, catIdUnliked)
    res.json(response)
  }

const addInterest = async (req, res) => {
    const { catId, interestId } = req.body
    const response = await addInterestService(catId, interestId)
    res.json(response)
}

const removeInterest = async (req, res) => {
    const { catId, interestId } = req.body
    const reponse = await removeInterestService(catId, interestId)
    res.json(response)
}

const updatePreferences = async (req, res) => {
    const { catId, preference } = req.body
    const response = await updatePreferenceService(catId, preference)
    res.json(response)
}

module.exports = {
    login,
    signup,
    catList,
    liked,
    unliked,
    addInterest,
    removeInterest,
    updatePreferences
}