const ErrorResponse = require("../utils/errorResponse");
const Notes = require("../models/Notes");
// @desc    Get all notes
// @route   GET api/v1/notes
// @access  public
exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({
      success: true,
      coun: notes.length,
      data: notes,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Get single notes
// @route   GET api/v1/notes/:id
// @access  public
exports.getNote = async (req, res, next) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return next(
        new ErrorResponse(`Note with id ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (err) {
    next(new ErrorResponse(`Note with id ${req.params.id} not found`, 404));
    // res.status(400).json({
    //   success: false,
    // });
  }
};

// @desc    Add note
// @route   POST api/v1/notes/:id
// @access  public
exports.addNote = async (req, res, next) => {
  try {
    const note = await Notes.create(req.body);
    res.status(201).json({
      success: true,
      data: note,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Update note
// @route   PUT api/v1/notes/:id
// @access  public
exports.updateNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

// @desc    Delete note
// @route   DELETE api/v1/notes/:id
// @access  public
exports.deleteNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
