import { useState } from 'react';


function App() {

  const randomElement = (arr) => arr[Math.floor(Math.random()*arr.length)]

  const generateRandomColor = () => {
    const hexValues = "0123456789ABCDEF";
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor = newColor + randomElement(hexValues);
    }
    return newColor;
  }

  // todos los ganchos o supeFunciones van dentro del componente
  const [listaColores, setListaColors] = useState([generateRandomColor()])

  const addColor = (event) => {

    const posicionHorizontalCursor = event.pageX;
    const anchoDelElemento = event.target.offsetWidth
    if (posicionHorizontalCursor > (anchoDelElemento) / 2) {
      
      setListaColors([ ...listaColores, generateRandomColor() ])
      return;
    }
    
    const colorAEliminar = randomElement(listaColores);
    setListaColors(listaColores.filter( color => color != colorAEliminar))
  }
  
  return (
    <>
      <div className="flex flex-col justify-center align-center w-full min-h-[90vh] overflow-y-scroll"
        onClick={(event) => addColor(event)}
      >
        {
          listaColores.map(color => (
            <div className="h-32 w-32 mx-auto text-center content-center font-bold" style={{ backgroundColor: color }}> 
              {color}
            </div>
          ))
        }

      </div>
    </>
  )
}

export default App;