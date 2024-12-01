# Picharade Web Frontend

A real-time multiplayer drawing and guessing game built with Nuxt.js and Firebase.

## Features

- Real-time drawing and guessing gameplay
- Multiple drawing tools and colors
- User authentication with email and social providers
- Private and public game rooms
- Live chat system
- Responsive design for desktop and mobile web

## Tech Stack

- Nuxt.js 3
- Vue 3 Composition API
- TypeScript
- Firebase SDK
- HTML5 Canvas
- WebSocket for real-time features

## Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Firebase project with required services enabled:
  - Authentication
  - Realtime Database
  - Cloud Functions (optional)
  - Cloud Storage (optional)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/drawguess-web.git
cd drawguess-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_DATABASE_URL=your_database_url
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
├── assets/
│   ├── css/
│   └── images/
├── components/
│   ├── auth/
│   ├── game/
│   │   ├── Canvas.vue
│   │   ├── ChatBox.vue
│   │   ├── PlayerList.vue
│   │   └── Tools.vue
│   └── shared/
├── composables/
│   ├── useAuth.ts
│   ├── useGameRoom.ts
│   └── useCanvas.ts
├── pages/
│   ├── index.vue
│   ├── rooms/
│   └── profile.vue
├── stores/
│   ├── game.ts
│   └── user.ts
└── types/
    └── index.ts
```

## Game Components

### Canvas Component

The Canvas component (`components/game/Canvas.vue`) handles:
- Real-time drawing functionality
- Stroke synchronization
- Drawing tools implementation
- Canvas state management

### Game Room Management

Game rooms are managed through Firebase Realtime Database following the structure:
- Active rooms in `/rooms/active/{roomId}`
- Game states in `/game_states/{roomId}`
- Player states in `/rooms/active/{roomId}/players`

## Deployment

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Firebase team for real-time database functionality
- Nuxt.js team for the fantastic framework
- Contributors and maintainers

## Support

For support, create an issue in the repository.
