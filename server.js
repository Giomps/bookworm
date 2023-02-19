const express = require('express')
const app = express()

app.use(express.static(__dirname + '/frontend'))
app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/Menu.html')
})

app.get('/connexion', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/login/Connexion.html')
})

app.get('/inscription', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/login/Inscription.html')
})

app.get('/panier', function (req, res) {
    res.sendFile(__dirname + '/frontend/html/Panier.html')
})

app.listen(3000, () => {
    console.log(`Serveur lancé`)
})