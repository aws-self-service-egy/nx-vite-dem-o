import { useState } from 'react'
import './App.css'
import BuildCacheDemo from './components/BuildCacheDemo'
import AssetDemo from './components/AssetDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Nx + Vite Build Cache Demo</h1>
        <p>This demo showcases Nx build caching with Vite</p>
      </header>
      
      <main className="App-main">
        <BuildCacheDemo />
        
        <div className="counter-section">
          <h2>Interactive Counter</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Click to test hot module replacement</p>
        </div>
        
        <AssetDemo />
        
        <div className="build-info">
          <h2>Build Cache Information</h2>
          <p>
            This app is configured with Nx build caching. When you run <code>nx build demo-app</code>:
          </p>
          <ul>
            <li>First build will generate all assets in <code>dist/assets/</code></li>
            <li>Subsequent builds will use Nx cache if no files changed</li>
            <li>Build artifacts are cached based on input file hashes</li>
            <li>Assets include JS, CSS, and other static files</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App