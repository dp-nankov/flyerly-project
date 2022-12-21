const { adModel, userModel } = require('../models');
const { newComment } = require('./commentController')

async function getAds(req, res, next) {
    adModel.find()
        .populate('userId')
        .then(ads => res.json(ads))
        .catch(next);
}

function getAd(req, res, next) {
    const { adId } = req.params;

    adModel.findById(adId)
        .populate({
            path: 'comments',
            populate: {
                path: 'userId'
            }
        })
        .then(ad => res.json(ad))
        .catch(next);
}

function getAdCustomId(req, res, next) {
    const { customId } = req.params;

    adModel.find({customId: customId})
        .then(ad => res.json(ad))
        .catch(next);
}

async function createAd(req, res, next) {
    const { title, description, imgUrl, price } = req.body;
    const { _id: userId } = req.user;
    let customId = await adModel.find().sort({customId:-1}).limit(1).then(ad => ad[0].customId) + 1;

    adModel.create({ title, description, imgUrl, price, customId, userId })
        .then(updatedAd => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { ads: updatedAd._id }}),
                res.status(200).json(updatedAd)
            ])
            
        })
        .catch(next);
}

function editAd(req, res, next) {
    const { adId } = req.params;
    const { title, description, imgUrl, price } = req.body;
    const { _id } = req.user;


    // if the userId is not the same as this one of the comment, the comment will not be updated
    adModel.findOneAndUpdate({ _id: adId, userId: _id }, { title, description, imgUrl, price }, { new: true })
        .then(updatedAd => {
            if (updatedAd) {
                res.status(200).json(updatedAd);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
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

function deleteAd(req, res, next) {
    const { adId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        adModel.findOneAndDelete({ _id: adId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { ads: adId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

module.exports = {
    getAds,
    createAd,
    getAd,
    subscribe,
    getAdCustomId,
    editAd,
    deleteAd
}
