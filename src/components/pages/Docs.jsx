import React from 'react'
import { Link } from 'react-router-dom'
const Docs = () => {
  return (
    <div>
          <a href="https://www.material-tailwind.com/docs/react/installation"
                    target="_blank"
                    rel="noopener noreferrer" className="text-white flex hover:text-gray-300">
                
                <Link to="/docs">
                    Docs
                </Link>
              </a>
    </div>
  )
}

export default Docs