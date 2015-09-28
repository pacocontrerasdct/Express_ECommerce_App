


app.get('/', function(req, res){
  res.render('index');
})

// User index path
app.get('/users', function (req, res) {  
  console.log('Hello users controller')
})