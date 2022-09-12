import React from 'react'
import styles from './navbar.module.scss'

function Navbar(props) {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <ul className={styles.todo__list}>
                <li className={styles.todo__item}>
                    testing
                </li>
            </ul>
        </nav>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
