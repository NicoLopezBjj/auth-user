const {Router} = require('express')
const router=Router()
const authControllers=require('../controllers/authControllers')

router.post('signup',authControllers.signup_post)
router.get('signup',authControllers.signup_get)


router.post('login',authControllers.login_post)
router.get('login',authControllers.login_get)

module.exports=router