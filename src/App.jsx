
import './App.css'
import Card from './Components/Card/Card.jsx'
import { Data } from './Components/Card/Data/Data.jsx'

function App() {
  return (
    <>
    <h1 className='Heading01'>CARDS</h1>
      {
        Data.map((e, i) => {
          return (<Card key={i} id={e.id} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
          )
        })
      }
    </>
  )
}

export default App
