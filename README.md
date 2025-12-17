````md
# RST – Real-Time Word Chain Game (Frontend)

Repository: https://github.com/ghoshOFahan/rst  
Live Deployment: https://rst.vercel.app

---

## @Overview

RST is a real-time multiplayer word-chain game frontend built with **Next.js (App Router)**.  
The frontend is responsible for user interaction, UI state management, theming, and real-time communication with the backend server via Socket.IO.  
All game authority, validation, and turn logic are strictly enforced by the backend.

---

## @Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- State Management: Zustand
- Real-Time Communication: Socket.IO Client
- Animations: Framer Motion
- Icons: Lucide React
- Theme Management: next-themes
- Analytics: @vercel/analytics
- Deployment: Vercel

---

## @Architecture

### @Socket Management

A **Socket.IO Singleton pattern** is used to prevent connection floods and duplicated socket connections.  
A global `SocketProvider` wraps the application and manages all socket lifecycle events.

### @Global State

Zustand acts as the **single source of truth** for:

- Game state
- Current player turn
- AI thinking state
- Room lifecycle and transitions

All UI updates react exclusively to server-emitted events such as `gameStateUpdate`.

---

## @UI Flow

### @Lobby Phase

- Create a room or join via Room ID
- Display connected players
- Automatically transition when server conditions are met

### @Game Room Phase

- Server-driven UI states
- Waiting, Playing, and Finished phases handled dynamically

---

## @GameInput Logic

The input system is defensive and server-respecting:

- Disabled when it is not the player’s turn
- Disabled while AI evaluation is running
- Protected against double submissions (click + enter)
- Mobile-safe interaction handling

The frontend never decides game outcomes.

---

## @Features

- Real-time multiplayer gameplay
- AI-driven word validation
- Turn-based enforcement
- Light and dark theme support
- Socket reconnection handling
- Analytics integration

---

## @Run Development Server

```bash
npm run dev
```
````

Open:

```
http://localhost:3000
```

---

## @Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://rst-backend.onrender.com
```

---

## @Deployment

The frontend is deployed on **Vercel**.

```bash
npm run build
npm run start
```

---

## @Author

Ahan Ghosh
