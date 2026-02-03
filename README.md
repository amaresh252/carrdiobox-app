# MainBackOffice

## 🚀 Quick Start

### 1. Prerequisites

**Required:**

* Node.js v22.0.0+
* pnpm (`npm install -g pnpm`)

**Optional (Local Supabase):**

* Docker Desktop
* Supabase CLI:

  * **Windows**:

    ```bash
    scoop bucket add supabase https://github.com/supabase/scoop-bucket.git && scoop install supabase
    ```
  * **macOS**:

    ```bash
    brew install supabase/tap/supabase
    ```

---

### 2. Installation

1. **Clone the repository:**

```bash
git clone <repo>
cd MainBackOffice
```

2. **Environment Setup:**

```bash
# Run the following command in a **bash terminal**
pnpm setup:env

# Edit .env.local files with your configuration values
# Add your API keys, endpoints, and other environment-specific variables
```


3. **Install dependencies:**

```bash
pnpm install
pnpm repo:setup
```

### 3. Run Application

```bash
pnpm dev
```

### 4. EveryThing Running On

* **API (local):** [http://localhost:3000](http://localhost:3000)

* **Web Application (local):** [http://localhost:5173](http://localhost:5173)

* **Supabase Studio (local):** [http://localhost:54323](http://localhost:54323)

---

## Environment Variables

This project uses environment variables to manage configuration across different environments (development, production).

### Setup

1. **Create .env.local file:** Copy the `.env.example` to `.env.local`

   **Root Environment File**
```bash
   # Path: MainBackOffice/.env.local
   NODE_ENV=development
```

   **Database Package**
```bash  
   # Path: packages/database/.env.local
   DATABASE_URL="postgresql://postgres.[project]:[password]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres.[project]:[password]@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"
```

   **Supabase Package**
```bash 
   # Path: packages/supabase/.env.local
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...
```

   **API Package**
```bash 
   # Path: apps/api/.env.local
   PORT=3000
   HOST=0.0.0.0
   SESSION_SECRET=dev_session_k3y_4p1_s3rv3r_2026_turb0r3p0_m41nb4ck0ff1c3
   JWT_SECRET=dev_jwt_t0k3n_k3y_4p1_s3rv3r_2026_t3st1ng_3nv1r0nm3nt_s3cur3
   SECURE_SESSION_KEY=2a7b9c4d6e8f1a3b5c7d9e2f4a6b8c0d1e3f5a7b9c2d4e6f8a0b2c4d6e8f1a3b
   CORS_ORIGIN=http://localhost:5173
   RATE_LIMIT_MAX=100
   RATE_LIMIT_TIME_WINDOW=60000
   REDIS_HOST=redis-18949.crce263.ap-south-1-1.ec2.cloud.redislabs.com
   REDIS_PORT=18949
   REDIS_PASSWORD=73munm8UD3RoSCjV6tXZkkbF3wvi5zxC
   DATABASE_URL="postgresql://postgres.fvlpbaldsflrtuhlnhlr:hJRIXQ1Ao1C1gN6v@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

2. **Edit all .env.local file with actual values**

3. **Usage in code:** Access environment variables using process.env.VARIABLE_NAME
```bash 
   const port=process.env.PORT
   const host=process.env.HOST
```

---

## 📋 Commands

| Command               | Purpose                             |
| --------------------- | ----------------------------------- |
| `pnpm repo:setup`     | Install deps + Prisma types + build |
| `pnpm dev`            | API + Web + Supabase                |
| `pnpm dev:api`        | Fastify API only                    |
| `pnpm dev:web`        | React frontend only                 |
| `pnpm supabase:start` | Local Supabase stack                |
| `pnpm supabase:reset` | Test migrations locally             |
| `pnpm supabase:push`  | Deploy schema to production         |

---

## 🗄️ Supabase Database

### Local Development

```bash
pnpm supabase:start
```

* **Studio:** [http://localhost:54323](http://localhost:54323)
* **DB:** `postgresql://postgres:postgres@localhost:54322/postgres`

---

### Add New Migration

```bash
cd supabase
supabase migration new add_feature
```

Edit:

```bash
supabase/migrations/[timestamp]_add_feature.sql
```

Then run:

```bash
pnpm supabase:reset    # Test locally
pnpm supabase:push     # Deploy production
pnpm prisma:generate  # Update Prisma types
```

---

### Production Deploy

```bash
pnpm supabase:push
pnpm prisma:generate
```
