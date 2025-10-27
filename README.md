# Dashblock - Minecraft Server Management Platform

A secure, modern SaaS platform for managing Minecraft servers remotely using a lightweight agent-based architecture.

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│      Next.js Platform (Web)          │
│  - User Dashboard                    │
│  - Server Management UI              │
│  - Authentication (NextAuth)         │
│  - WebSocket Server                  │
│  - PostgreSQL Database               │
└──────────────┬──────────────────────┘
               │ Secure WebSocket (WSS)
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼────────┐    ┌──────▼──────┐
│  Agent 1   │    │   Agent 2   │
│ (Server 1) │    │ (Server 2)  │
│  Minecraft │    │  Minecraft  │
└────────────┘    └─────────────┘
```

## ✨ Features

### MVP Features (Current)
- ✅ User authentication (email/password)
- ✅ Add servers to dashboard (generates agent key)
- ✅ Agent-based connection (no SSH credentials stored!)
- ✅ Start/Stop Minecraft servers remotely
- ✅ Real-time server status
- ✅ Server auto-detection (Vanilla, Fabric, Forge, Paper, Spigot)
- ✅ Secure WebSocket communication

### Security Features
- 🔒 No SSH credentials stored
- 🔒 Unique agent key per server
- 🔒 User-based access control
- 🔒 JWT authentication for web sessions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database running (or use Prisma's built-in dev DB)

### Installation

1. **Clone and install dependencies:**

```bash
npm install
cd agent && npm install && cd ..
```

2. **Set up environment variables:**

Create `.env` file (already exists):

```env
DATABASE_URL="your-postgresql-url"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-secret-key"
```

3. **Set up database:**

```bash
npm run db:push
npm run db:generate
```

4. **Build and start the platform:**

```bash
npm run dev
```

The platform will be available at `http://localhost:3000`

## 📦 Project Structure

```
dashblock/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth routes
│   │   │   ├── register/      # User registration
│   │   │   └── servers/       # Server management API
│   │   ├── dashboard/         # Dashboard UI (to be built)
│   │   ├── login/             # Login page (to be built)
│   │   └── layout.tsx
│   ├── lib/
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── prisma.ts          # Prisma client
│   │   └── websocket.ts       # WebSocket server
│   └── middleware.ts          # Auth middleware
├── agent/
│   ├── index.js               # Agent application
│   ├── package.json
│   └── README.md              # Agent documentation
├── prisma/
│   └── schema.prisma          # Database schema
├── server.js                  # Custom Next.js server with Socket.io
└── package.json
```

## 📡 API Endpoints

### Authentication

- `POST /api/register` - Create new user account
- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout

### Server Management

- `GET /api/servers` - List all user's servers
- `POST /api/servers` - Create new server (generates agent key)
- `GET /api/servers/[id]` - Get server details
- `DELETE /api/servers/[id]` - Delete server
- `POST /api/servers/[id]/command` - Send command (start/stop/restart)

## 🤖 Agent Setup

### For Users

1. Create a server in the dashboard
2. Copy the agent key
3. Download the agent from your platform
4. Configure `agent-config.json`
5. Run `npm install && npm start`

See `agent/README.md` for detailed instructions.

## 🗄️ Database Schema

### User
- Authentication and profile info
- One-to-many with servers

### Server
- Server metadata (name, description)
- Agent key for authentication
- Status (online/offline/starting/stopping)
- Connection status (is agent connected?)
- Server details (type, version, port, players)

## 🔌 WebSocket Events

### Agent → Platform

- `authenticate` - Authenticate with agent key
- `status_update` - Send server status

### Platform → Agent

- `authenticated` - Authentication successful
- `command` - Execute command (start/stop/restart)
- `auth_error` - Authentication failed

### Platform → Web Client

- `server_update` - Server status changed

## 🛣️ Next Steps

### UI Development (Next Priority)
- [ ] Create login/register pages
- [ ] Build dashboard with server list
- [ ] Create server detail page with controls
- [ ] Add real-time status indicators
- [ ] Create "Add Server" flow

### Future Features
- [ ] Server console (real-time logs)
- [ ] Player management
- [ ] File browser/editor
- [ ] Backup automation
- [ ] Performance metrics (CPU, RAM, TPS)
- [ ] Scheduled tasks
- [ ] Discord notifications
- [ ] Multi-user/team support

## 🔒 Security Considerations

1. **Agent Key Security**
   - Treat like a password
   - Regenerate if compromised
   - Never commit to version control

2. **Production Deployment**
   - Use WSS (secure WebSocket)
   - Enable HTTPS
   - Use strong NEXTAUTH_SECRET
   - Set up proper CORS policies
   - Use environment variables

3. **Database**
   - Regular backups
   - Use connection pooling in production
   - Never expose database publicly

## 📝 Development Scripts

```bash
npm run dev          # Build and start with custom server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma Client
npm run db:studio    # Open Prisma Studio
```

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Use Prisma's local database for development
npx prisma dev
```

### WebSocket Connection Fails
- Check firewall settings
- Verify NEXTAUTH_URL is correct
- Check server.js is running

### Agent Won't Connect
- Verify agent key is correct
- Check platformUrl in agent-config.json
- Ensure platform is accessible from agent server

---

Built with ❤️ using Next.js, Prisma, Socket.io, and TypeScript
