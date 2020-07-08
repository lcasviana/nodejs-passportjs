const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.233655144bb561b5",
      clientSecret: "689e326cfbb67e1c709a30bd9f05513b922792d1",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => done(undefined, profile)
  )
);

passport.serializeUser((user, done) => {
  done(undefined, user);
});

passport.deserializeUser((user, done) => {
  done(undefined, user);
});
