const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_, res) => res.json({ ok: true, service: 'studyverse-api' }));

app.post('/api/assistant/chat', (req, res) => {
  const { role = 'friend', message = '' } = req.body || {};
  const presets = {
    friend: 'Поддерживаю. Разберём задачу по шагам, без стресса.',
    teacher: 'Дам структурированное объяснение + мини-практику.',
    examiner: 'Экзамен-режим: отвечай чётко, затем получишь фидбек.',
  };

  return res.json({
    role,
    answer: `${presets[role] || presets.friend} Запрос: ${message.slice(0, 200)}`,
    actions: ['summary', 'quiz', 'flashcards', 'citation-formatting'],
  });
});

app.post('/api/materials/upload', (req, res) => {
  const { filename = 'document.pdf' } = req.body || {};
  return res.status(201).json({
    id: `mat_${Date.now()}`,
    filename,
    status: 'uploaded',
    next: ['/api/materials/:id/summarize', '/api/materials/:id/questions', '/api/materials/:id/mind-map'],
  });
});

app.get('/api/analytics/exam-forecast', (req, res) => {
  const done = Number(req.query.done || 5);
  const total = Number(req.query.total || 8);
  const ratio = total > 0 ? Math.max(0, Math.min(1, done / total)) : 0;
  return res.json({
    readiness: Math.round(ratio * 100),
    forecastScore: 55 + Math.round(ratio * 45),
    recommendation: ratio < 0.6 ? 'Усилить повторение слабых тем + 2 Pomodoro/день' : 'Темп хороший, продолжай по плану',
  });
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log(`studyverse api listening on ${port}`));
