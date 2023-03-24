const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();

app.use(express.json()) // Donne accès à req.body

mongoose.set('strictQuery', false); // DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7

// Connection à MongoDb - OP
mongoose.connect('mongodb+srv://mathieuhatstatt:XQhbig4VQi1I4Awv@piiquante.doqdqqn.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'piiquante'
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// A voir si besoin, eliminie les erreurs CORS - OP
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Routes
app.use('/api/auth', userRoutes)


module.exports = app;