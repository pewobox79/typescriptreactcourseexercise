import Navigation from "../Navigation";
import {ReactNode} from "react";
import styles from './styles/MainLayout.module.css'

type LayoutType = {
    children: ReactNode
}
export default function MainLayout({children}: LayoutType) {
    return (
        <>
            <header className={styles.header}>
                <Navigation/>
            </header>
            <main className={styles.mainWrapper}>
                <div className={styles.mainInner}>
                    {children}
                </div>
            </main>


        </>
    )
}