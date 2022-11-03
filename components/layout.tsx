import Navigation from './navigation'

export default function Layout({ children }) {
    return (
        <>
            <div className="layout">
                <div className="site">
                    <Navigation />
                    <div className="content">
                        {children}
                    </div>
                    <footer>© 2022 Ville Taskinen</footer>
                </div>
            </div>
        </>
    )
}