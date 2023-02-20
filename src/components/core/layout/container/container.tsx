import styles from "./container.module.css";

export const Container = ({children}: { children: React.ReactNode }) => {
    return <main className={styles.main}>
        {children}
    </main>
}
