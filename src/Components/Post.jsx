import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://images.unsplash.com/photo-1622779553291-9f2006fddd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Flávio Batista</strong>
                        <span>Frontend</span>
                    </div>
                </div>

                <time title='11 de maio às 08:35' dateTime='2023-03-11 08:15:45'>Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Porro provident eum ipsam cupiditate id facere. Temporibus, 
                    veritatis! Consequuntur excepturi adipisci aliquid ipsam autem porro animi, 
                    asperiores sit corporis dignissimos distinctio!
                </p>
                <p><a href='#'>jane.designer/doctorcare</a></p>
                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>

        </article>
    )
}