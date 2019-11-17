var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var authKey = require("../config/auth-key.js");
const SocialAuthUserDetails = require("../module/authUserDetails.js");
const SocialAuthUser = require("../controllers/socialAuthUser.js");
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: authKey.GOOGLE_CLIENT_ID,
      clientSecret: authKey.GOOGLE_CLIENT_SECRET,
      callbackURL: authKey.CALLBACK_URL,
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      if (profile) {
        SocialAuthUser.socialAuthUser(accessToken, profile);
        let userData = {
          first_name: profile.name.familyName,
          last_name: profile.name.givenName,
          picture: profile.photos[0].value,
          provider: profile.provider,
          socialID: Number(profile.id)
        };
        // console.log("profile id ", Number(profile.id));
        SocialAuthUserDetails.find(
          { socialID: Number(profile.id) },
          (err, data) => {
            if (data !== []) {
              return done(err, profile);
            } else {
              SocialAuthUserDetails.create(userData, err => {
                if (err) {
                  throw err;
                } else {
                  return done(err, profile);
                }
              });
            }
          }
        );
      }
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
