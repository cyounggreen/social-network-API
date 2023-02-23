const router = require("express").Router();
const userRoutes = require("./usersRouter");
const thoughtRoutes = require("./thoughtsRouter");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;