const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');
const { generateToken } = require('../utils/jwt.js');

passport.use(new LocalStrategy(
    
    async (username, password, done) => {
      try {
       
        const result = await query(
          'SELECT fn_user_check(:username, :password) AS is_valid FROM DUAL',
          {
            replacements: { username, password },
            type: sequelize.QueryTypes.SELECT
          }
        );

        const isValid = result[0].IS_VALID;
  
        if (isValid) {
            if(isValid == 'User Not Found'){
                return done(null, false, { message: 'User Not Found' });
            }
            if(isValid == 'Password Incorrect'){
                return done(null, false, { message: 'Password Incorrect' });
            }
          const user = { username:username }; 
          const token = generateToken(user);
          user.token = token;
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
      } catch (err) {
        return done(err);
      }
    }
  ));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
