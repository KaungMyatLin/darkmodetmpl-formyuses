import Header from './Header'

export default function MainLayout({children}: mainlayoutProps) {
    return (
        <>
            <div>
                <Header/>
                <div>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}

type mainlayoutProps = {
    children: React.ReactNode;
}