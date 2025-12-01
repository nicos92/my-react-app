import './App.css'
import { NavBarFixed } from './components/NavBarFixed.jsx'
import { Testimonio } from './components/Testimonio.jsx'
import { Titulo } from './components/Titulo.jsx'
import CTestimonio from './models/CTestimonio.jsx'

const testimonios = [
  new CTestimonio(
    'Nicolás',
    'Sandoval',
    'AnimeFlv',
    'Analista Programador',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id possimus cupiditate nostrum ab nobis praesentium blanditiis nihil, quam dolorum obcaecati voluptates in quae ea molestias fugiat aut at! Quos ut tempora nostrum deleniti possimus alias laudantium! Ab, deserunt commodi? Perferendis id molestias ut quidem inventore voluptatum quisquam, beatae nesciunt!',
    '/src/imgs/pexels-olly-839011.jpg'
  ),
  new CTestimonio(
    'Nicolás',
    'Sandoval',
    'AnimeFlv',
    'Analista Programador',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id possimus cupiditate nostrum ab nobis praesentium blanditiis nihil, quam dolorum obcaecati voluptates in quae ea molestias fugiat aut at! Quos ut tempora nostrum deleniti possimus alias laudantium! Ab, deserunt commodi? Perferendis id molestias ut quidem inventore voluptatum quisquam, beatae nesciunt!',
    '/src/imgs/pexels-elletakesphotos-1680172.jpg'
  ),
]

function App() {
  return (
    <div>
      <NavBarFixed />
      <main className="container p-2">
        <Titulo />
        <div className="row mb-2">
          {testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              apellido={testimonio.apellido}
              empresa={testimonio.empresa}
              cargo={testimonio.cargo}
              testimonio={testimonio.testimonio}
              img={testimonio.img}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
