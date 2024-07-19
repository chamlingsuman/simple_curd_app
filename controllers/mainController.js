
const db = require('../config/dbconfig');
const passport = require('../config/passport');

// Get all users
exports.home = async (req, res) => {
  res.render('home', {});

  // try {
  //   const result = await db.executeQuery('SELECT count(*) as count FROM employee');
  //   console.log(result.rows);
  //   res.status(200).json({message:'API working properly, Connected to ORCL DB',empCount: result.rows[0].COUNT});
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

  exports.login = (req, res, next) => {
    
    passport.authenticate('local', (err, user, info) => {
       
      if (err) {
        return next(err);
      }
    
      if (!user) {
        return res.status(400).json(info);
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json({ message: 'Logged in successfully', user });
      });
    })(req, res, next);
  };
  
  exports.logout = (req, res) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.json({ message: 'Logged out successfully' });
    });
  };
  
  exports.getUser = (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  };