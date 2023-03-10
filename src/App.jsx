import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

import './global.css';
import style from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>

      <div className={style.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post
            author = "Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut ea quas nihil vitae itaque, velit deserunt sequi, pariatur labore corporis minus?"
          />
          <Post
            author = "Manoel Tindão"
            content = "Accusantium quas nesciunt repellendus suscipit soluta a repudiandae."
          />
        </main>
      </div>
      
    </div>
  )
}


 