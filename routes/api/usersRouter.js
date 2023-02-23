const router = require("express").Router();
const {
  getUsers,
  userGet,
  newUser,
  editUser,
  removeUser,
  newFriend,
  deleteFriend,
} = require("../../controllers/userControl");

// /api/users
router.route("/").get(getUsers).post(newUser);

// /api/users/:id
router.route("/:id").get(userGet).put(editUser).delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

module.exports = router;