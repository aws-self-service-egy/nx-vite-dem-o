# Nx + Vite Build Cache Demo

This project demonstrates the power of using Nx build caching with Vite for optimized build performance. The demo shows how Nx can cache Vite build outputs and significantly speed up subsequent builds when source files haven't changed.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

```bash
# Navigate to project directory
cd /Users/giladtrachtenberg/Personal/git/nx-vite-demo

# Install dependencies
yarn install

# Start development server
yarn dev
```

## 🏗️ Build Cache Testing

### Test the Build Caching

1. **First Build (Cache Miss)**:
   ```bash
   yarn build
   ```
   - This will build from scratch
   - Assets will be generated in `apps/demo-app/dist/assets/`
   - Build time will be normal (a few seconds)

2. **Second Build (Cache Hit)**:
   ```bash
   yarn build
   ```
   - This should be much faster (near instant)
   - Nx will show "cache hit" message
   - No actual compilation happens - cached results are reused

3. **Force Cache Rebuild**:
   ```bash
   # Make a small change to any source file, then build again
   echo "// Cache test" >> apps/demo-app/src/App.tsx
   yarn build
   ```
   - This will trigger a fresh build since source changed
   - New assets with different hashes will be generated

### Understanding the Cache

- **Cache Location**: `.nx/cache/` directory stores build artifacts
- **Cache Key**: Based on hash of source files, dependencies, and configuration
- **Asset Hashing**: Vite generates assets with content-based hashes for optimal caching

## 📁 Project Structure

```
nx-vite-demo/
├── apps/demo-app/              # Main application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── App.tsx            # Main app component
│   │   └── main.tsx           # Entry point
│   ├── public/                # Static assets
│   ├── dist/                  # Build output (generated)
│   │   └── assets/           # Bundled JS/CSS/assets
│   ├── vite.config.ts        # Vite configuration
│   └── project.json          # Nx project configuration
├── .nx/                       # Nx cache directory
├── nx.json                   # Nx workspace configuration
└── package.json              # Dependencies and scripts
```

## ⚙️ Configuration Details

### Nx Caching Configuration (`nx.json`)
- **Build Target**: Configured with input/output definitions
- **Cache Enabled**: `"cache": true` for build operations
- **Input Patterns**: Includes source files and excludes test files
- **Output Patterns**: Specifies `dist` directory for caching

### Vite Configuration (`apps/demo-app/vite.config.ts`)
- **Cache Directory**: Centralized in `node_modules/.vite/demo-app`
- **Asset Naming**: Content-based hashing for optimal caching
- **Chunk Splitting**: Optimized for browser caching
- **Build Output**: Configured to work with Nx caching

## 🎯 Demo Features

The demo application includes:

1. **Build Cache Status Display**: Shows current build mode and environment
2. **Interactive Counter**: Demonstrates hot module replacement in dev mode
3. **Asset Bundling Demo**: Shows how different file types are bundled
4. **Build Information**: Explains how Nx caching works

## 📊 Cache Performance Benefits

### Without Nx Cache:
- Every build processes all files
- Full Vite compilation every time
- Build time: 2-5 seconds

### With Nx Cache:
- First build: Normal compile time
- Subsequent builds: ~100ms (cache hit)
- Only changed files trigger rebuilds
- **Speed improvement: 10-50x faster**

## 🌐 AWS S3 Deployment Preparation

The build output is optimized for static hosting on AWS S3:

### Build for Production:
```bash
yarn build
```

### Upload to S3:
```bash
# Build output will be in: apps/demo-app/dist/
aws s3 sync apps/demo-app/dist/ s3://your-bucket-name --delete
```

### S3 Configuration:
- Enable static website hosting
- Set `index.html` as index document
- Configure CloudFront for CDN (optional)
- Assets have cache-friendly hashes

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production with caching
- `yarn preview` - Preview production build locally
- `nx reset` - Clear Nx cache (for testing cache behavior)
- `nx graph` - View project dependency graph

## 📈 Monitoring Cache Performance

### View Cache Statistics:
```bash
# Show cache stats
nx report

# Clear cache for testing
nx reset

# Build with verbose output
yarn build --verbose
```

### Cache Hit Indicators:
- ✅ `Nx read the output from the cache instead of running the command for 1 out of 1 tasks.`
- 🔄 Normal build output when cache miss occurs

## 🚀 Next Steps

1. **Test caching behavior** with the commands above
2. **Deploy to AWS S3** using the built assets
3. **Integrate with CI/CD** for even better caching across builds
4. **Add more applications** to see workspace-level caching benefits

## 📝 Notes

- This is a demo project - feel free to experiment!
- The main goal is demonstrating Nx build cache with Vite
- Assets in `dist/assets/` are cached and reused effectively
- Cache works best in CI/CD environments where builds are frequent