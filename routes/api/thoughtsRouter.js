const router = require("express").Router();
const {
  getThoughts,
  getById,
  newThought,
  editThought,
  deleteThought,
  newreaction,
  deleteReaction,
} = require("../../controllers/thoughtControl");

// /api/thoughts
router.route("/").get(getThoughts).post(newThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getById)
  .put(editThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/ReactionSche
router.route("/:thoughtId/ReactionSche").post(newreaction);

// /api/thoughts/:thoughtId/ReactionSche/:reactionId
router.route("/:thoughtId/ReactionSche/:reactionId").delete(deleteReaction);

module.exports = router;