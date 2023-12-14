import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/furniture'>Furniture</Link></li>
                        <li><Link to='/electronics'>electronics</Link></li>
                        <li><Link to='/Decoration'>Decoration</Link></li>
                        <li><Link to='/Rockpaperscissors'>Rockpaperscissors</Link></li>
                        <li><Link to='/AutoProducts'>AutoProducts</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                footer 88888888
            </footer>
        </>
    )
}
