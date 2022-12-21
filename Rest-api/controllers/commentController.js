const { userModel, adModel, commentModel } = require('../models');

function newComment(text, userId, adId) {
    return commentModel.create({ text, userId, adId })
        .then(comment => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { comments: comment._id }, $addToSet: { ads: adId } }),
                adModel.findByIdAndUpdate({ _id: adId }, { $push: { comments: comment._id } }, { new: true })
            ])
        })
}


async function getComments(req, res, next) {
    const {adId} = req.params;
    commentModel.find({adId: adId})
        .then(c => res.json(c))
        .catch(next);
}

function getLatestsComments(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    commentModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('adId userId')
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(next);
}

function createComment(req, res, next) {
    const { adId } = req.params;
    const { _id: userId } = req.user;
    const { text } = req.body;
    newComment(text, userId, adId)
        .then(([_, updatedAd]) => res.status(200).json(updatedAd))
        .catch(next);
}

function editComment(req, res, next) {
    const { commentId } = req.params;
    const { commentText } = req.body;
    const { _id: userId } = req.user;


    // if the userId is not the same as this one of the comment, the comment will not be updated
    commentModel.findOneAndUpdate({ _id: commentId, userId }, { text: commentText }, { new: true })
        .then(updatedComment => {
            if (updatedComment) {
                res.status(200).json(updatedComment);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteComment(req, res, next) {
    const { commentId, adId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        commentModel.findOneAndDelete({ _id: commentId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { comments: commentId } }),
        adModel.findOneAndUpdate({ _id: adId }, { $pull: { comments: commentId } }),
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

function like(req, res, next) {
    const { commentId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    commentModel.updateOne({ _id: commentId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsComments,
    newComment,
    createComment,
    editComment,
    deleteComment,
    like,
    getComments
}
