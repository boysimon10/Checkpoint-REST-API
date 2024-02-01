## Guide de l'API Rest Checkpoint - Postman

Ce guide fournit des instructions sur la façon de tester l'API Rest Checkpoint à l'aide de Postman. L'API comprend des opérations CRUD de base pour la gestion des données utilisateur (nom d'utilisateur, e-mail et mot de passe).

### Exécution du Serveur

1. **Cloner le Dépôt :**
   ```bash
   git clone https://github.com/votre-nom-utilisateur/checkpoint-rest-api.git
   cd checkpoint-rest-api
   ```

2. **Installer les Dépendances :**
   ```bash
   npm install
   ```

3. **Configurer les Variables d'Environnement :**
   - Créez un fichier `.env` dans le dossier `config`.
   - Ajoutez les variables d'environnement suivantes :
     ```dotenv
     PORT=3000
     MONGODB_URI=your_mongo_uri
     ```

4. **Démarrer le Serveur :**
   ```bash
   node server.js
   ```

   Le serveur s'exécutera sur le port spécifié (par défaut 3000). Assurez-vous que MongoDB est en cours d'exécution et accessible.

### Test avec Postman

#### 1. **GET - Récupérer tous les utilisateurs :**
   - Sélectionnez la méthode `GET`.
   - Entrez l'URL pour récupérer tous les utilisateurs : `http://localhost:3000/users`.
   - Cliquez sur le bouton "Send". Vous devriez recevoir une réponse avec la liste des utilisateurs.

#### 2. **POST - Ajouter un nouvel utilisateur :**
   - Sélectionnez la méthode `POST`.
   - Entrez l'URL pour ajouter un nouvel utilisateur : `http://localhost:3000/users`.
   - Dans l'onglet "Body", sélectionnez "raw" et choisissez "JSON (application/json)".
   - Entrez les données de l'utilisateur dans le corps de la requête :
     ```json
     {
       "username": "nouvelUtilisateur",
       "email": "nouvelUtilisateur@example.com",
       "password": "motDePasseSécurisé"
     }
     ```
   - Cliquez sur le bouton "Send". Vous devriez recevoir une réponse avec les détails du nouvel utilisateur ajouté.

#### 3. **PUT - Modifier un utilisateur par ID :**
   - Sélectionnez la méthode `PUT`.
   - Entrez l'URL pour mettre à jour un utilisateur par ID (remplacez `votreIdUtilisateur` par l'ID réel) : `http://localhost:3000/users/votreIdUtilisateur`.
   - Dans l'onglet "Body", sélectionnez "raw" et choisissez "JSON (application/json)".
   - Entrez les champs à mettre à jour dans le corps de la requête :
     ```json
     {
       "username": "nomUtilisateurMisÀJour",
       "email": "misAJour@example.com",
       "password": "motDePasseMisÀJour"
     }
     ```
   - Cliquez sur le bouton "Send". Vous devriez recevoir une réponse avec les détails de l'utilisateur mis à jour.

#### 4. **DELETE - Supprimer un utilisateur par ID :**
   - Sélectionnez la méthode `DELETE`.
   - Entrez l'URL pour supprimer un utilisateur par ID (remplacez `votreIdUtilisateur` par l'ID réel) : `http://localhost:3000/users/votreIdUtilisateur`.
   - Cliquez sur le bouton "Send". Vous devriez recevoir une réponse avec les détails de l'utilisateur supprimé.

### Notes Importantes

- Assurez-vous que la base de données MongoDB est en cours d'exécution et accessible.
- Gérez les variables d'environnement dans le fichier `.env` situé dans le dossier `config`.
- Personnalisez les données dans les corps de requête selon vos besoins.

N'hésitez pas à explorer et à tester l'API Rest Checkpoint avec Postman en suivant ces instructions.
