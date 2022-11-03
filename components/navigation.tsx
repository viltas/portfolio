import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../styles/nav.module.css"


export default function Navigation() {
    const [nav, showNav] = useState(false);

    return (
        <div>
            <div className={styles.burger} onClick={() => showNav(!nav)}>
                <div className={(!nav ? styles.bline1_closed : styles.bline1_open)} />
                <div className={(!nav ? styles.bline2_closed : styles.bline2_open)} />
                <div className={(!nav ? styles.bline3_closed : styles.bline3_open)} />
            </div>
            <nav className={(!nav ? styles.nav_closed : styles.nav_open)}>
                <ul className={styles.navlist} >
                    <li><Link href="/" onClick={() => showNav(!nav)}>home</Link></li>
                    <li><Link href="/bio" onClick={() => showNav(!nav)}>bio</Link></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/ville-tas/" onClick={() => showNav(!nav)}><img className={styles.navicon} src="/linkedin.svg" alt="Linkedin" /></a></li>
                    <li><a target="_blank" href="https://github.com/viltas/" onClick={() => showNav(!nav)}><img className={styles.navicon} src="/github.svg" alt="Github" /></a></li>
                </ul>
            </nav>
        </div>
    )
}
