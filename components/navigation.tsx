import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styles from "../styles/nav.module.css"
/*import Svg from 'react-inlinesvg';*/

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
                    <li><Link href="/about" onClick={() => showNav(!nav)}>about</Link></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/ville-tas/" onClick={() => showNav(!nav)}>linkedin</a></li>
                    <li><a target="_blank" href="https://github.com/viltas/" onClick={() => showNav(!nav)}>github</a></li>
                </ul>
            </nav>
        </div>
    )
}


/*

<li><a target="_blank" href="https://www.linkedin.com/in/ville-tas/" onClick={() => showNav(!nav)}><Svg src="/linkedin.svg" className={styles.navicon}/></a></li>
<li><a target="_blank" href="https://github.com/viltas/" onClick={() => showNav(!nav)}><Svg src="/github.svg" className={styles.navicon}/></a></li>

*/