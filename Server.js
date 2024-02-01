const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const app = express();
const port = process.env.PORT || 3000;

// Connexion à MongoDB en utilisant l'URI fourni
mongoose.connect(process.env.MONGO_URI);

// Middleware pour analyser les données JSON dans les requêtes
app.use(express.json());

// GET: Renvoie tous les utilisateurs
app.get('/users', (req, res) => {
    // Récupère tous les utilisateurs de la base de données
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(500).json({ error: error.message }));
});

// POST: Ajoute un nouvel utilisateur à la base de données
app.post('/users', (req, res) => {
    // Crée une nouvelle instance d'utilisateur basée sur le corps de la requête
    const newUser = new User(req.body);
    
    // Enregistre le nouvel utilisateur dans la base de données
    newUser.save()
        .then(savedUser => res.json(savedUser))
        .catch(error => res.status(500).json({ error: error.message }));
});

// PUT: Modifie un utilisateur par ID
app.put('/users/:id', (req, res) => {
    // Extrait l'ID de l'utilisateur des paramètres de la requête
    const { id } = req.params;
    
    // Trouve et met à jour l'utilisateur dans la base de données par ID
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(error => res.status(500).json({ error: error.message }));
});

// DELETE: Supprime un utilisateur par ID
app.delete('/users/:id', (req, res) => {
    // Extrait l'ID de l'utilisateur des paramètres de la requête
    const { id } = req.params;
    
    // Trouve et supprime l'utilisateur dans la base de données par ID
    User.findByIdAndDelete(id)
        .then(deletedUser => res.json(deletedUser))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Démarre le serveur et écoute sur le port spécifié
app.listen(port, () => {
    console.log(`Le serveur fonctionne sur le port ${port}`);
});
