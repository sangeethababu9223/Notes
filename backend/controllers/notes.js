// @desc    Get all notes
// @route   GET api/v1/notes
// @access  public
exports.getNotes = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get notes" });
};

// @desc    Get single notes
// @route   GET api/v1/notes/:id
// @access  public
exports.getNote = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Display note with id ${req.params.id}` });
};

// @desc    Add note
// @route   POST api/v1/notes/:id
// @access  public
exports.addNote = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Add note with id ${req.params.id}` });
};

// @desc    Update note
// @route   PUT api/v1/notes/:id
// @access  public
exports.updateNote = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update note with id ${req.params.id}` });
};

// @desc    Delete note
// @route   DELETE api/v1/notes/:id
// @access  public
exports.deleteNote = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete note with id ${req.params.id}` });
};
