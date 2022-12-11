const { adModel } = require('../models');
const { newComment } = require('./commentController')

function getAds(req, res, next) {
    adModel.find()
        .populate('userId')
        .then(ads => res.json(ads))
        .catch(next);
}

function getAd(req, res, next) {
    const { adId } = req.params;

    adModel.findById(adId)
        .populate({
            path : 'comments',
            populate : {
              path : 'userId'
            }
          })
        .then(ad => res.json(ad))
        .catch(next);
}

function createAd(req, res, next) {
    const { adName } = req.body;
    const { _id: userId } = req.user;

    adModel.create({ adName, userId })
        .catch(next);
}

function subscribe(req, res, next) {
    const adId = req.params.adId;
    const { _id: userId } = req.user;
    adModel.findByIdAndUpdate({ _id: adId }, { new: true })
        .then(updatedAd => {
            res.status(200).json(updatedAd)
        })
        .catch(next);
}

module.exports = {
    getAds,
    createAd,
    getAd,
    subscribe,
}
