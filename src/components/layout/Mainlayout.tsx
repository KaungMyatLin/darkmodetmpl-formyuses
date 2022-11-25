import Header from './Header'

export default function MainLayout({children}: any) {
    return (
        <>
            <div className='min-h-screen
            flex flex-col items-stretch'>
                <Header/>
                <div className='flex-grow bg-zinc-100 text-gray-800 dark:bg-zinc-800 dark:text-zinc-100'>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}