import React from 'react'
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <div>
        <center>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/dashboard'><li>Dashboard</li></Link>
              <Link to='/about'><li>About</li></Link>
            </ul>
        </center>
    </div>
  )
}

export default Main