require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use(express.static(path.join(__dirname), { index: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'lax'
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleCallbackUrl = process.env.GOOGLE_CALLBACK_URL || `${baseUrl}/auth/google/callback`;
const facebookAppId = process.env.FACEBOOK_APP_ID;
const facebookAppSecret = process.env.FACEBOOK_APP_SECRET;
const facebookCallbackUrl = process.env.FACEBOOK_CALLBACK_URL || `${baseUrl}/auth/facebook/callback`;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

if (googleClientId && googleClientSecret) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: googleCallbackUrl
      },
      (accessToken, refreshToken, profile, cb) => {
        const user = {
          id: profile.id,
          provider: 'google',
          name: profile.displayName,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.id}@gmail.com`,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : null
        };
        return cb(null, user);
      }
    )
  );
}

if (facebookAppId && facebookAppSecret) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: facebookAppId,
        clientSecret: facebookAppSecret,
        callbackURL: facebookCallbackUrl,
        profileFields: ['id', 'displayName', 'emails', 'picture.type(large)']
      },
      (accessToken, refreshToken, profile, cb) => {
        const user = {
          id: profile.id,
          provider: 'facebook',
          name: profile.displayName,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.id}@facebook.com`,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : null
        };
        return cb(null, user);
      }
    )
  );
}

function requireAuth(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/?error=login_required');
}

app.get('/auth/google', (req, res, next) => {
  if (!googleClientId || !googleClientSecret) {
    return res.status(500).json({ error: 'Google OAuth is not configured. Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.' });
  }
  return passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

app.get('/auth/google/callback', (req, res, next) => {
  passport.authenticate('google', {
    failureRedirect: '/?error=google_auth_failed'
  })(req, res, next);
}, (req, res) => {
  res.redirect('/');
});

app.get('/auth/facebook', (req, res, next) => {
  if (!facebookAppId || !facebookAppSecret) {
    return res.status(500).json({ error: 'Facebook OAuth is not configured. Add FACEBOOK_APP_ID and FACEBOOK_APP_SECRET.' });
  }
  return passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
});

app.get('/auth/facebook/callback', (req, res, next) => {
  passport.authenticate('facebook', {
    failureRedirect: '/?error=facebook_auth_failed'
  })(req, res, next);
}, (req, res) => {
  res.redirect('/');
});

app.get('/api/session', (req, res) => {
  res.json({
    authenticated: !!(req.user),
    user: req.user || null
  });
});

app.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/');
  });
});

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'passco-shs' });
});

app.get('/practice.html', (req, res) => res.sendFile(path.join(__dirname, 'practice.html')));
app.get('/dashboard.html', (req, res) => res.sendFile(path.join(__dirname, 'dashboard.html')));
app.get('/admin.html', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`Passco SHS server running on http://localhost:${PORT}`);
});
