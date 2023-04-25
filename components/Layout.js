import React from 'react'
import Image from 'next/image'
import vercel from "../public/vercel.svg"
import Link from 'next/link'
import menu from "../public/menu.svg"

const Layout = () => {
  return (
    <nav className='nav'>
        <div className='nav_container'>
            <Image src={vercel} alt="logo" width={150} height={150}/>

            <label className='nav_label' for="menu">
                <Image src={menu} alt="logo" width={40} height={30}/>
            </label>

            <input type="checkbox" id="menu" className="nav_input"/> 

            <div className="nav_menu">
                <Link href="/" className="nav_item">Inicio</Link>
                <Link href="/" className="nav_item">Nosotros</Link>
                <Link href="/" className="nav_item">Cursos</Link>
                <Link href="/" className="nav_item">Contacto</Link>
                <Link href="/login" className="nav_item">Iniciar Sesion</Link>
            </div>
        </div>

    </nav>
    )
}

export default Layout
Layout