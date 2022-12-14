import Navigation from './navigation'
import { ReactNode } from 'react';
import { motion } from "framer-motion"

interface Props {
    children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <div className="layout">
            <div className="topbar"><Navigation /></div>
                <div className="site">
                    <main className="content"{...props}>
                        <motion.main
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                mass: 0.70,
                                stiffness: 50,
                                duration: 0.7
                            }}>
                            {children}
                        </motion.main>
                    </main>
                    <footer>© 2022 Ville Taskinen</footer>
                </div>
            </div>
        </>
    )
}