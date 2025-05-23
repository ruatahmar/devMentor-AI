import express from 'express';
import session from 'express-session'
import passport from 'passport';
import dotenv from 'dotenv'
dotenv.config();

const app=express();
app.use(session({
    secret:process.env.SESSION_SECRET || 'fallbackSecret123',
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());

//routes
import githubAuthRouter from "./routes/githubAuth.routes.js"

app.use("/auth",githubAuthRouter);
app.get("/api/check-session", (req, res) => {
  console.log("Session check:", req.session);
  console.log("User:", req.user);
  res.json({ session: req.session, user: req.user });
});
export default app;