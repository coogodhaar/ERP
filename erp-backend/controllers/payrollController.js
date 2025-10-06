const Payroll = require('../models/Payroll');

exports.listPayroll = async (req, res) => {
  const data = await Payroll.findAll();
  res.json(data);
};

exports.addPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.create(req.body);
    res.status(201).json(payroll);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.update(req.body, { where: { payroll_id: req.params.id } });
    res.json(payroll);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePayroll = async (req, res) => {
  try {
    await Payroll.destroy({ where: { payroll_id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
