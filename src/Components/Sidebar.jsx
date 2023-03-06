import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1622779553291-9f2006fddd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30" 
            />

            <div className={styles.profile}>
                <strong>Maria Julia</strong>
                <span>Frontend</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>

        </aside>
    )
}