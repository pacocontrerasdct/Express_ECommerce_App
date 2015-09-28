

app.get('/', function(req, res){
  res.render('index');
})

// Order index path
app.get('/orders', function (req, res) {  
  console.log('Hello orders controller')
})