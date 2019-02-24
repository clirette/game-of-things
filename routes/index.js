module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.render('index');
  })

  app.get('/submit', (req, res) => {
    db.answers.remove({});
    res.render('submit');
  });

  app.post('/submit', (req, res) => {
    const answer = req.body.answer;
    db.answers.insert({answer: answer});
    res.render('submitted');
  });

  // app.get('/submitted', (req, res) => {
  //   res.render('submitted');
  // })

  app.get('/answers', (req, res) => {
    db.answers.find((err, response) => {
      console.log(response);
      res.render('answers', {
        ans: response
      });

    });
  })
}