import passport from 'passport'
import {Strategy as GitHubStrategy} from 'passport-github2'
import User from '../models/users.models.js'
import { apiError } from '../util/apiError.js';
import dotenv from "dotenv"
dotenv.config()
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/github/callback`
  },
  async function(accessToken, refreshToken, profile, done) {
    try{
        let user = await User.findOne({ githubId: profile.id })
        if(!user){
            user = await User.create({
                githubId:profile.id,
                username:profile.username
            })
        }
        return done(null,user)
    }   
    catch(err){
        console.log("Error during passport config",err)
    }
  }
));


passport.serializeUser((user, done) => {
    done(null, user.githubId); 
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await User.findOne({githubId:id})
        if(!user){
            return done(new apiError(400,"Unable to find user when deserializing"))

        }
        done(null,user);
    }
    catch(err){
        done(err)
    }

});