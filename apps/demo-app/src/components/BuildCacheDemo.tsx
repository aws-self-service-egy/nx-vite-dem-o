import { useState, useEffect } from 'react';

const BuildCacheDemo = () => {
  const [buildTime] = useState(() => new Date().toISOString());
  const [cacheStatus, setCacheStatus] = useState('unknown');

  useEffect(() => {
    // Simulate cache status detection
    const isProduction = import.meta.env.PROD;
    setCacheStatus(isProduction ? 'production-build' : 'development-mode');
  }, []);

  return (
    <div className="cache-demo">
      <h2>🔧 Build Cache Status</h2>
      <div className="cache-info">
        <div className="info-item">
          <strong>Build Mode:</strong> {cacheStatus}
        </div>
        <div className="info-item">
          <strong>Build Time:</strong> {buildTime}
        </div>
        <div className="info-item">
          <strong>Environment:</strong> {import.meta.env.MODE}
        </div>
      </div>
      
      <div className="cache-explanation">
        <h3>How Nx Caching Works:</h3>
        <ol>
          <li>Nx creates a hash of all input files (source code, config, dependencies)</li>
          <li>If the hash exists in cache, build is skipped</li>
          <li>If hash is new, Vite builds and Nx caches the output</li>
          <li>Assets in <code>dist/assets/</code> are cached for reuse</li>
        </ol>
      </div>

      <style>{`
        .cache-demo {
          background: #e7f5ff;
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #74c0fc;
        }
        
        .cache-demo h2 {
          color: #1864ab;
          margin-bottom: 1rem;
        }
        
        .cache-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .info-item {
          background: white;
          padding: 1rem;
          border-radius: 6px;
          border: 1px solid #91a7ff;
        }
        
        .info-item strong {
          color: #1864ab;
        }
        
        .cache-explanation {
          background: white;
          padding: 1.5rem;
          border-radius: 6px;
          border: 1px solid #91a7ff;
          text-align: left;
        }
        
        .cache-explanation h3 {
          color: #1864ab;
          margin-bottom: 1rem;
        }
        
        .cache-explanation ol {
          color: #495057;
          line-height: 1.6;
        }
        
        .cache-explanation li {
          margin-bottom: 0.5rem;
        }
        
        .cache-explanation code {
          background: #f8f9fa;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Monaco', 'Consolas', monospace;
          color: #e83e8c;
        }
      `}</style>
    </div>
  );
};

export default BuildCacheDemo;