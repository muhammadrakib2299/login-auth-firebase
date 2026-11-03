# Login Auth Firebase

A Firebase authentication demo built with React (Vite), React Router, Tailwind CSS and DaisyUI.

## Features

- Email/password registration and login with Firebase Authentication
- Auth state shared app-wide through a React context (`AuthProvider`), using `onAuthStateChanged` to track the signed-in user
- Navbar that shows the signed-in user's email, a logout button, and a Dashboard link only when you are logged in
- `/dashboard` wrapped in a `PrivateRoute`, so its content renders only for a signed-in user
- Placeholder pages (Home, About, Services, Blogs, Contact) under a shared layout with navbar and footer

## Built with

React 19, Vite 7, React Router 7, Firebase Auth, Tailwind CSS 4, DaisyUI 5.

## What I practised

- Firebase email/password auth (`createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, `signOut`)
- Sharing auth state and actions through React context
- Guarding a route with a private-route wrapper and a loading state
- Nested routes with a shared layout in React Router

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

The Firebase web config is in `src/Firebase/Firebase.init.js`; swap in your own Firebase project's config to use your own project.
