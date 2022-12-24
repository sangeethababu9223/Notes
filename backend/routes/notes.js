const express = require("express");
const {
  getNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes");
const router = express.Router();
router.route("/").get(getNotes);
router
  .route("/:id")
  .get(getNote)
  .post(addNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
