import { useState } from 'react';

// Import some example assets to demonstrate asset bundling
const AssetDemo = () => {
  const [showAssets, setShowAssets] = useState(false);

  const demoAssets = [
    { name: 'main.tsx', type: 'TypeScript Entry', description: 'Main application entry point' },
    { name: 'App.tsx', type: 'React Component', description: 'Root React component' },
    { name: 'App.css', type: 'Stylesheet', description: 'Component-specific styles' },
    { name: 'index.css', type: 'Global Styles', description: 'Global application styles' },
    { name: 'vite.svg', type: 'SVG Asset', description: 'Vector graphics (if present)' },
  ];

  return (
    <div className="asset-demo">
      <h2>📦 Asset Bundling Demo</h2>
      
      <button 
        className="toggle-button"
        onClick={() => setShowAssets(!showAssets)}
      >
        {showAssets ? 'Hide' : 'Show'} Asset Information
      </button>

      {showAssets && (
        <div className="assets-list">
          <h3>Assets that will be bundled:</h3>
          <div className="assets-grid">
            {demoAssets.map((asset, index) => (
              <div key={index} className="asset-card">
                <div className="asset-name">{asset.name}</div>
                <div className="asset-type">{asset.type}</div>
                <div className="asset-description">{asset.description}</div>
              </div>
            ))}
          </div>
          
          <div className="build-output-info">
            <h4>Build Output Structure:</h4>
            <pre>{`
dist/
├── assets/
│   ├── index-[hash].js     # Main bundle
│   ├── index-[hash].css    # Compiled styles  
│   └── [asset]-[hash].*    # Other assets
└── index.html              # Entry HTML
            `}</pre>
          </div>
        </div>
      )}

      <style>{`
        .asset-demo {
          background: #f8f0ff;
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #d0bfff;
        }
        
        .asset-demo h2 {
          color: #7048e8;
          margin-bottom: 1rem;
        }
        
        .toggle-button {
          background: #7048e8;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.2s;
          margin-bottom: 1.5rem;
        }
        
        .toggle-button:hover {
          background: #5f3dc4;
        }
        
        .assets-list {
          text-align: left;
        }
        
        .assets-list h3 {
          color: #7048e8;
          margin-bottom: 1rem;
        }
        
        .assets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .asset-card {
          background: white;
          padding: 1rem;
          border-radius: 6px;
          border: 1px solid #d0bfff;
        }
        
        .asset-name {
          font-weight: bold;
          color: #7048e8;
          margin-bottom: 0.5rem;
        }
        
        .asset-type {
          color: #9775fa;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .asset-description {
          color: #666;
          font-size: 0.85rem;
        }
        
        .build-output-info {
          background: white;
          padding: 1rem;
          border-radius: 6px;
          border: 1px solid #d0bfff;
        }
        
        .build-output-info h4 {
          color: #7048e8;
          margin-bottom: 1rem;
        }
        
        .build-output-info pre {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.85rem;
          color: #495057;
        }
      `}</style>
    </div>
  );
};

export default AssetDemo;