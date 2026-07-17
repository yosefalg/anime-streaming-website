# Backend API Guide - أنمي ستريم

## 🏗 Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│   Backend API   │────▶│   External APIs │
│   (HTML/CSS/JS) │◄────│   (Node.js)     │◄────│   (AniList,     │
│                 │     │                 │     │   Jikan, etc.)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │
        ▼
┌─────────────────┐
│   LocalStorage  │
│   (Favorites,   │
│   History)      │
└─────────────────┘
```

## 📡 API Endpoints (Future Implementation)

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
GET  /api/auth/me
```

### Anime
```
GET  /api/anime              # List all anime
GET  /api/anime/:id          # Get anime details
GET  /api/anime/search       # Search anime
GET  /api/anime/trending     # Trending anime
GET  /api/anime/top-rated    # Top rated anime
GET  /api/anime/schedule     # Airing schedule
GET  /api/anime/genres       # List genres
```

### Episodes
```
GET  /api/anime/:id/episodes          # List episodes
GET  /api/anime/:id/episodes/:num     # Get episode details
```

### User
```
GET    /api/user/favorites     # Get favorites
POST   /api/user/favorites     # Add to favorites
DELETE /api/user/favorites/:id # Remove from favorites
GET    /api/user/history       # Get watch history
POST   /api/user/history       # Add to history
GET    /api/user/watchlist     # Get watchlist
```

## 🗄 Database Schema (MongoDB Example)

```javascript
// User Schema
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  avatar: String,
  favorites: [Number], // AniList IDs
  watchHistory: [{
    animeId: Number,
    episode: Number,
    timestamp: Date,
    progress: Number // seconds watched
  }],
  preferences: {
    language: String,
    theme: String,
    autoPlay: Boolean,
    quality: String
  },
  createdAt: Date,
  updatedAt: Date
}

// Anime Cache Schema
{
  _id: ObjectId,
  anilistId: Number,
  title: {
    romaji: String,
    english: String,
    native: String,
    arabic: String
  },
  description: {
    english: String,
    arabic: String
  },
  coverImage: String,
  bannerImage: String,
  genres: [String],
  rating: Number,
  episodes: Number,
  status: String,
  source: String,
  sourceUrl: String,
  type: String,
  year: Number,
  lastUpdated: Date
}
```

## 🔧 Tech Stack for Backend

### Option 1: Node.js + Express
```javascript
// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/anime', require('./routes/anime'));
app.use('/api/user', require('./routes/user'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

app.listen(3001, () => console.log('Server running on port 3001'));
```

### Option 2: Firebase (Serverless)
```javascript
// firebase.json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  },
  "functions": {
    "source": "functions"
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  }
}
```

### Option 3: Supabase (PostgreSQL)
```sql
-- Create tables
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  anime_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🌐 External APIs Integration

### AniList GraphQL
```javascript
const ANILIST_API = 'https://graphql.anilist.co';

async function fetchAnime(id) {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title { romaji english native }
        description
        coverImage { large }
        bannerImage
        averageScore
        episodes
        genres
        status
        season
        seasonYear
      }
    }
  `;

  const response = await fetch(ANILIST_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id } })
  });

  return response.json();
}
```

### Jikan REST API
```javascript
const JIKAN_API = 'https://api.jikan.moe/v4';

async function searchAnime(query) {
  const response = await fetch(`${JIKAN_API}/anime?q=${query}&limit=10`);
  return response.json();
}
```

## 📦 Deployment Options

### 1. GitHub Pages (Frontend Only)
```bash
# Already configured in the main project
# Just push to main branch and enable Pages
```

### 2. Vercel (Full Stack)
```bash
npm i -g vercel
vercel --prod
```

### 3. Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### 4. Firebase Hosting
```bash
firebase deploy
```

## 🔐 Environment Variables

```bash
# .env
NODE_ENV=production
PORT=3001
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/anime-stream
JWT_SECRET=your-secret-key
ANILIST_CLIENT_ID=your-client-id
ANILIST_CLIENT_SECRET=your-client-secret
```

## 🚀 Next Steps

1. **Set up Node.js backend** with Express
2. **Connect to MongoDB** or use Firebase
3. **Implement authentication** with JWT
4. **Cache AniList data** to reduce API calls
5. **Add real-time features** with WebSockets
6. **Implement PWA** for offline support

---

**Note:** This is a guide for future development. The current version is a static frontend that works without a backend.
