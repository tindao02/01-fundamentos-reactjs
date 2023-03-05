import { Header } from './Components/Header'
import { Post } from './Post'
import './global.css';

export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem dolore mollitia?"
      />
      <Post 
        author="Manoel Ozeias"
        content="Novo post"
      />
    </div>
  )
}


