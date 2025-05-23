import express from 'express';
import passport from 'passport';

const githubAuthRouter = express.Router();


githubAuthRouter.get('/github', passport.authenticate('github'));

githubAuthRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login", // change to your login route or frontend page
    successRedirect: "/profile", // or a custom function (see below)
  })
);
export default githubAuthRouter;
