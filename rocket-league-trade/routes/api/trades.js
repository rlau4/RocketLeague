
const router = require("express").Router();
const tradesController = require("../../controllers/tradesController");

router.route("/")
  .get(tradesController.findAll)
  .post(tradesController.create);


router
  .route("/:id")
  .delete(tradesController.remove);

module.exports = router;