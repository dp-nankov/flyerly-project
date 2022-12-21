const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile', auth(),authController.getProfileInfo);
router.put('/profile', auth(),authController.editProfileInfo);
router.get('/profile/:userId',authController.getUser);
router.get('/profile/ads/:placeholder',auth() ,authController.myAds);



module.exports = router