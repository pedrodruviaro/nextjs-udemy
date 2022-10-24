import styles from "./MainHeader.module.css"
import Link from "next/link"

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">NextEvents</Link>
            </div>

            <nav>
                <ul className={styles.navigation}>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
