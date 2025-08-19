# NextAuth.js — **Continue with Google (Client + Server)**

A minimal, production-friendly setup to use **NextAuth.js (Auth.js)** for **Google sign‑in on a Next.js client** and **save/check the user on a separate Node.js (Express) server** using **MongoDB**. This guide is intentionally step‑by‑step and only covers **Continue with Google**.


## ✅ What you’ll build

* **Client (Next.js 13/14, App Router)**

  * `Continue with Google` button using NextAuth
  * NextAuth route that, on successful sign‑in, **POSTs user info to the server** via Axios
* **Server (Node.js + Express + MongoDB)**

  * `GoogleUser` model 
  * Route + Controller to **create user if not exists** else **login success** (no update)

## 🧰 Prerequisites

* Node.js 18+
* MongoDB URI (Atlas or local)
* Google Cloud Project with OAuth credentials

## 1) Create Google OAuth Credentials

1. Go to **Google Cloud Console → APIs & Services → Credentials**
2. Create **OAuth 2.0 Client ID** (type: **Web application**)
3. Add **Authorized redirect URI**:

   ```
   http://localhost:3000/api/auth/callback/google
   ```
4. Copy **Client ID** and **Client Secret** — you’ll need them on the client.

## 2) Client Setup (Next.js)

### 2.1 Install deps

```bash
cd client
npm i next-auth axios
```

### 2.2 Environment (`client/.env.local`)

```env
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=any-long-random-string
NEXTAUTH_URL=http://localhost:3000
# Your server’s base URL (Express API)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 3) Server Setup (Node.js + Express)

### 3.1 Install deps

```bash
cd server
npm i express mongoose cors dotenv
npm i -D nodemon
```

### 3.2 Environment (`server/.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/yourdb
CLIENT_ORIGIN=http://localhost:3000
```

## 4) Wire‑up Flow (How it works)

1. User clicks **Login → Continue with Google** on client
2. NextAuth completes Google OAuth → `callbacks.signIn` runs
3. Client **POSTs** `{ name, email, image }` to `POST /api/users/google`
4. Server checks MongoDB:

   * **No user** → create user → respond `201 New user created`
   * **User exists** → respond `200 Login success`
5. `signIn` callback returns `true` → NextAuth finalizes the session

## 5) Run the project (clone → env → dev)

```bash
# 1) Clone
git clone <this-repo-url>
cd repo-root

# 2) Install deps
cd server && npm i && cd ..
cd client && npm i && cd ..

# 3) Add environment files
#   - client/.env.local  (Google keys, NEXTAUTH, API URL)
#   - server/.env        (PORT, MONGO_URI, CLIENT_ORIGIN)

# 4) Run servers (two terminals)
# Terminal A (server):
cd server
npm run dev   # e.g. nodemon index.js

# Terminal B (client):
cd client
npm run dev   # Next.js on http://localhost:3000
```

## 6) Troubleshooting

* **`error=AccessDenied` after Google**

  * Your `signIn` callback returned `false`. Check server URL / CORS / status code.
* **`OAUTH_CALLBACK_ERROR outgoing request timed out after 3500ms`**

  * Confirm `.env.local`: `NEXTAUTH_URL=http://localhost:3000`
  * Confirm Google Console **Authorized redirect URI** matches exactly
  * Disable VPN / retry dev servers
* **CORS errors**

  * Ensure `CLIENT_ORIGIN=http://localhost:3000` and Express `cors()` uses it
* **Mongo duplicate key** (email unique)

  * Clear duplicates in DB or drop index if created wrongly: ensure unique `email`

## 7) Extending later (optional)

* Add role fields or lastLogin timestamps
* Add secure session tokens or JWT callbacks to enrich `session.user`
* Protect server routes by verifying NextAuth session/JWT (e.g., pass `Authorization` header with a signed token)

## 8) Notes

* This setup uses **NextAuth on the client only** for OAuth; persistence is handled by **your Node server** for full control.
* Collection name is pinned to **`GoogleUser`** to avoid Mongoose pluralization.

Happy building! 🚀
