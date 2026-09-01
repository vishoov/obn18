# CLAUDE.md

Guidance for working in this repo.

## Repo layout

This is a learning/practice monorepo. The two parts that make up the running app:

- `ecomm-client/` — React 19 + Vite frontend (`react-router` v8, `react-hot-toast`, oxlint).
- `Backend/user-mgmnt-mongo0/` — Express 5 + Mongoose API, entry `index.js`, listens on **port 3000**.

Other top-level folders (`React/`, `Routing/`, `SQL/`, `ecommerce/`, `Backend/todo-api`, …) are
standalone notes and exercises, not part of the app.

## Running it

```bash
cd Backend/user-mgmnt-mongo0 && npm run dev   # nodemon, port 3000, needs .env for Mongo
cd ecomm-client && npm run dev                # vite
cd ecomm-client && npm run lint               # oxlint
```

The API mounts routers in `index.js`: `/users`, `/products`, `/cart`, `/orders`, `/aggregate`.
CORS is wide open (`origin: "*"`) for local dev.

## Auth flow

`ecomm-client/src/auth/AuthContext.jsx` owns auth state (`user`, `isAuthenticated`) and exposes
`login` / `logout` via the `useAuth()` hook. `login(email, password)` **returns a boolean** —
callers branch on it to navigate. `ProtectedRoute.jsx` gates routes on `isAuthenticated`.

The base URL lives in `const API = "http://localhost:3000/users"` at the top of `AuthContext.jsx`.

## Conventions learned the hard way

These come from bugs already fixed here — don't reintroduce them.

### Never pass a non-string to `toast.*`

```js
// crashes: "Objects are not valid as a React child (found: [object Response])"
toast.error(response)

// correct
toast.error(data.message || "Login failed")
```

react-hot-toast renders whatever it is handed as a React child. Passing a `fetch` Response (or any
object) throws during render and takes down the whole `<Toaster>` subtree — which looks like
"toast stopped working" but is really an unhandled render crash.

### Always `return` when sending an Express error response

```js
if (!user) {
    return res.status(404).json({ message: "User not found" });   // `return` is required
}
```

Without the `return`, execution falls through — in the login route it reached
`user.comparePassword()` on `undefined`, threw into the `catch`, and tried to send a second
response, producing `ERR_HTTP_HEADERS_SENT`.

### Keep API responses JSON on every path

Success, 401, 404 and 500 all reply `{ message, ... }`. The client reads the body once as text and
tries `JSON.parse`, falling back to `{ message: raw }` — see `login` in `AuthContext.jsx` and
`sendData` in `LoginPage.jsx`. Mixing `res.send("plain text")` with JSON responses is what made that
fallback necessary in the first place.

### `await` async context methods

`login` is `async`. Calling it without `await` yields `Promise {<pending>}` and the success branch
never runs.

### Mongoose lookups

Prefer `await User.findOne({ email })` over `await User.find({...})` followed by `[0]`.

## Misc

- Don't add client-side `Authorization` headers with placeholder tokens — there is no token auth
  yet, and Node lowercases header names, so `req.headers.Authorization` is always `undefined`
  (use `req.headers.authorization` when real auth lands).
- `sendData` in `LoginPage.jsx` is currently dead code, superseded by `login` from the auth context.
