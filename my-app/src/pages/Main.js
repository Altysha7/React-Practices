import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/furniture'>Furniture</Link></li>
          <li><Link to='/electronics'>electronics</Link></li>
          <li><Link to='/Decoration'>Decoration</Link></li>
          <li><Link to='/Rockpaperscissors'>Rockpaperscissors</Link></li>
          <li><Link to='/AutoProducts'>AutoProducts</Link></li>
          {/* <li><Link to='/Counter'>Counter</Link></li> */}
        </ul>
      </nav>
      <h1>This is main page</h1>
    </>
  )
}
