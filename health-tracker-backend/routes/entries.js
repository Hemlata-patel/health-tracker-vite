import express from 'express';
const router = express.Router();
import Entry from '../models/Entry.js';

// Get all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new entry
router.post('/', async (req, res) => {
  const { date, weight, calories } = req.body;

  if (!date || !weight || !calories) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newEntry = new Entry({ date, weight, calories });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/entries/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Entry.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;