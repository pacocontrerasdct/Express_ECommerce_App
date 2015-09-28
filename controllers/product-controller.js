


app.get('/', function(req, res){
  res.render('index');
})

// Products index path
app.get('/products', function (req, res) {  
  console.log('Hello products controller')
})