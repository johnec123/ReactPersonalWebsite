import './styles.css'

import React from 'react'
import cog from '../cog.svg';

const SiteUnderMaintenance: React.FC = () => {
  return (
        <div className="cog">
          <header className="App-header">
            <img src={cog} className="cog-logo" alt="logo" />
            <p>
              Site under maintenance....
            </p>
            <p>
              TypeScript
            </p>
          </header>
        </div>
  )
}

export default SiteUnderMaintenance