const Documents = require('../models/Documents');

exports.listDocuments = async (req, res) => {
  const docs = await Documents.findAll();
  res.json(docs);
};

exports.addDocument = async (req, res) => {
  try {
    const doc = await Documents.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
