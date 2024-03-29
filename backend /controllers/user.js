const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


// For the registration of our users
exports.signup = (req, res, next) => {
  bcryptjs.hash(req.body.password, 10)
  .then(hash =>  {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

// To connect existing users
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcryptjs.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign({userId: user._id}, `${process.env.DB_TOKEN}`, {expiresIn: '24h'}),
        isAdmin: user.isAdmin,
      });
    })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

// get email to userId
exports.getUser = (req, res, next) => {
  let userId = req.params.id;
  User.findOne({ _id: userId})
  .then((user) => res.status(200).json( {email: user.email, isAdmin: user.isAdmin }))
  .catch((error) => res.status(400).json({error}));
}




