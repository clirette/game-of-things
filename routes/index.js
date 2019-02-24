module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.render('index', {
      reset: false
    });
  });

  app.get('/reset', (req, res) => {
    db.players.remove({});
    res.render('index', {
      reset: true
    });
  })

  app.get('/submit', (req, res) => {
    db.answers.remove({});
    if (req.query.name) {
      db.players.find({name: req.query.name}, (err, players) => {
        if (players.length == 0) {
          playerName = req.query.name;
          db.players.insert({name: playerName, score: 0});
        }
      });
    }
    if (req.query.score && req.query.playerName) {
      db.players.update({name: req.query.playerName}, {name: req.query.playerName, score: req.query.score});
    }
    
    res.render('submit');
  });

  app.post('/submit', (req, res) => {
    const answer = req.body.answer;
    const index = Math.trunc(Math.random()*100);
    db.answers.insert({answer: answer, index: index});
    res.render('submitted');
  });

  app.get('/answers', (req, res) => {
    db.answers.find().sort({index: 1}, (err, answers) => {
      db.players.find((err, players) => {
        res.render('answers', {
          ans: answers,
          players: players
        });
      })
    });
  });
}