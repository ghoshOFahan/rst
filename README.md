# RST – Real-Time Word Chain Game (Frontend)

Repository: https://github.com/ghoshOFahan/rst  
Live Deployment: https://rst.ahanghosh.site

---

## @Overview

RST is a real-time multiplayer word-chain game built with **Next.js (App Router)**.  
The frontend handles user interaction, UI state, theming, and real-time communication with the backend server using Socket.IO.  
All game authority, validation, and turn logic are enforced exclusively by the backend.

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

The frontend uses a **Socket.IO Singleton pattern** to avoid connection floods and duplicate socket connections.  
A global `SocketProvider` wraps the application and manages the socket lifecycle.

### @Global State

Zustand acts as the **single source of truth** for:

- Game state
- Current player turn
- AI thinking state
- Room lifecycle and transitions

All UI updates are driven only by server-emitted events such as `gameStateUpdate`.

---

## @UI Flow

### @Lobby Phase

- Create a room or join using a Room ID
- Display connected players
- Automatically transition when server conditions are met

### @Game Room Phase

- Fully server-driven UI
- Waiting, Playing, and Finished phases handled dynamically

---

## @GameInput Logic

The input system is defensive and server-respecting:

- Disabled when it is not the player’s turn
- Disabled while AI evaluation is running
- Protected against double submissions (Enter + Click)
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

Open:

```
http://localhost:3000
```

---

## @Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://backend.com(mock)
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

```

```
