import Navigation from './navigation'
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
            <div className="layout">
                <div className="site">
                    <Navigation />
                    <main className="content"{...props}>
                        {children}
                    </main>
                    <footer>© 2022 Ville Taskinen</footer>
                </div>
            </div>
        </>
    )
}