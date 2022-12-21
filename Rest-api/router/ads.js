const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { adController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', adController.getAds);
router.post('/', auth(), adController.createAd);

router.get('/:adId', adController.getAd);
router.post('/:adId', auth(), commentController.createComment);
router.put('/:adId', auth(), adController.subscribe);
router.put('/edit/:adId', auth(), adController.editAd);
router.get('/custom/:customId', adController.getAdCustomId);
router.put('/:adId/comments/:commentId', auth(), commentController.editComment);
router.delete('/:adId/comments/:commentId', auth(), commentController.deleteComment);
router.delete('/:adId', auth(), adController.deleteAd)

// router.get('/my-trips/:id/reservations', auth(), adController.getReservations);

module.exports = router