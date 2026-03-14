# Migration Guide: npm → pnpm

This project now uses **pnpm** instead of npm for better Windows compatibility and faster installs.

## Why pnpm?

- ✅ **Better Windows support** - Handles file locking and long paths better
- ✅ **Faster installs** - Uses hard links and symlinks efficiently
- ✅ **Disk space efficient** - Shared dependencies across projects
- ✅ **Strict dependency management** - Prevents phantom dependencies

## For Team Members (First Time Setup)

### 1. Install pnpm globally

**Windows:**
```bash
npm install -g pnpm
```

**macOS/Linux:**
```bash
npm install -g pnpm
# or
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 2. Clean up old npm files

```bash
# In project root
rm -rf node_modules package-lock.json

# In frontend
cd frontend
rm -rf node_modules package-lock.json

# In backend
cd ../backend
rm -rf node_modules package-lock.json

# Back to root
cd ..
```

**Windows (PowerShell):**
```powershell
# In project root
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue

# In frontend
cd frontend
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue

# In backend
cd ..\backend
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue

# Back to root
cd ..
```

### 3. Install dependencies with pnpm

```bash
# From project root - this installs everything
pnpm install
```

That's it! pnpm will install all dependencies for root, frontend, and backend.

### 4. Set up environment and database (backend only)

```bash
cd backend
cp .env.example .env
# Edit .env with your Supabase credentials

pnpm run db:generate
pnpm run db:migrate
pnpm run db:seed
```

### 5. Start development

**Option A: Run both frontend and backend**
```bash
# From root
pnpm run dev
```

**Option B: Run separately**
```bash
# Terminal 1 - Backend
cd backend
pnpm run dev

# Terminal 2 - Frontend
cd frontend
pnpm run dev
```

## Daily Development

### Common Commands

Replace `npm` with `pnpm`:

| Old (npm) | New (pnpm) |
|-----------|------------|
| `npm install` | `pnpm install` |
| `npm install <package>` | `pnpm add <package>` |
| `npm install -D <package>` | `pnpm add -D <package>` |
| `npm uninstall <package>` | `pnpm remove <package>` |
| `npm run dev` | `pnpm run dev` |
| `npm run build` | `pnpm run build` |

### Workspace Commands

```bash
# Install dependency in specific workspace
pnpm add <package> --filter frontend
pnpm add <package> --filter backend

# Run script in specific workspace
pnpm --filter frontend dev
pnpm --filter backend dev

# Run script in all workspaces
pnpm -r dev
```

## Troubleshooting

### "pnpm: command not found"
Install pnpm globally: `npm install -g pnpm`

### Permission errors on Windows
Run terminal as Administrator or use:
```bash
pnpm install --shamefully-hoist
```

### Prisma errors after migration
```bash
cd backend
pnpm run db:generate
```

### Still having issues?
1. Delete all `node_modules` folders
2. Delete `pnpm-lock.yaml`
3. Run `pnpm install` again

## Files Added

- `pnpm-workspace.yaml` - Workspace configuration
- `.npmrc` - pnpm settings for Windows compatibility
- `pnpm-lock.yaml` - Lock file (will be generated on first install)

## Files to Delete (After Migration)

- `package-lock.json` (root, frontend, backend)
- All `node_modules` folders

**Note:** `package.json` files stay the same - no changes needed!
