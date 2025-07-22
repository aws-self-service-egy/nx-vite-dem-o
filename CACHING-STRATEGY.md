# Nx + Vite Caching Strategy

This project uses **dual caching** for maximum build performance:

## 🚀 **Nx Cloud Caching (Primary)**
- **What**: Caches final build outputs (`dist/assets/**`)
- **When**: Build inputs haven't changed
- **Speed**: Near-instant (100ms) - just copies final results
- **Scope**: Distributed across all runs, branches, team members

## ⚡ **GitHub Actions Vite Caching (Secondary)** 
- **What**: Caches Vite internal compilation dependencies
- **When**: Nx Cloud cache miss but Vite deps unchanged
- **Speed**: ~50% faster compilation than cold start
- **Scope**: Runner-specific, helps when rebuilding is needed

## 📊 **Performance Matrix**

| Scenario | Nx Cloud | GA Cache | Total Speed | Use Case |
|----------|----------|----------|-------------|----------|
| Nothing changed | ✅ Hit | - | ~100ms | Repeat builds |
| Code changed, deps same | ❌ Miss | ✅ Hit | ~2-3s | Development |
| Everything changed | ❌ Miss | ❌ Miss | ~5-8s | First build |

## 🎯 **Why Both?**

They're **complementary**, not redundant:
- **Best case**: Nx Cloud eliminates build entirely
- **Medium case**: GitHub cache speeds up required builds  
- **Worst case**: Both miss, but still faster than no caching

This dual strategy ensures **maximum performance** across all scenarios while demonstrating professional CI/CD optimization patterns.