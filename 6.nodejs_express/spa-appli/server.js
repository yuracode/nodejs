const express = require('express');
const cors = require('cors');
const questions =  [
  { "id": 1, "question": "山", "answer": "やま", "choices": ["やま", "かわ", "うみ", "そら"] },
  { "id": 2, "question": "川", "answer": "かわ", "choices": ["かわ", "やま", "はな", "いし"] },
  { "id": 3, "question": "花", "answer": "はな", "choices": ["はな", "くさ", "き", "みず"] },
  { "id": 4, "question": "空", "answer": "そら", "choices": ["そら", "くも", "かぜ", "あめ"] },
  { "id": 5, "question": "犬", "answer": "いぬ", "choices": ["いぬ", "ねこ", "うし", "うま"] },
  { "id": 6, "question": "本", "answer": "ほん", "choices": ["ほん", "かみ", "えん", "てん"] },
  { "id": 7, "question": "学校", "answer": "がっこう", "choices": ["がっこう", "としょかん", "びょういん", "こうえん"] },
  { "id": 8, "question": "先生", "answer": "せんせい", "choices": ["せんせい", "がくせい", "ともだち", "かぞく"] },
  { "id": 9, "question": "電車", "answer": "でんしゃ", "choices": ["でんしゃ", "じどうしゃ", "じてんしゃ", "ひこうき"] },
  { "id": 10, "question": "友達", "answer": "ともだち", "choices": ["ともだち", "かぞく", "せんせい", "きょうだい"] }
];

const app = express();
app.use(cors());

app.get('/api/questions', (req, res) => {
    const id = req.query.id;
    if (id) {
        const question = questions.find(q => q.id === parseInt(id));
        if (question) {
            res.json(question);
        } else {
            res.status(404).json({ error: "Question not found" });
        }
    } else {
        res.json(questions);
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});