import React from 'react'
import logo from '/src/assets/logo.svg'
import styles from './Navbar.module.css'

const Navbar : React.FC = () => {
  return (
    <>
    <div className={styles.navbar} >
        <a >
            <img src={logo} className="logo" alt="logo" />
        </a>
    </div>
    </>
  )
}

export default Navbar;