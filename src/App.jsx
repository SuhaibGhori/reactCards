import './App.css'
import Card from './Components/Card/Card.jsx'
import { Data } from './Components/Card/Data/Data.jsx'

function App() {
  return (
    <>
      <h1 className='Heading01'>Our Products</h1>
      <div className="cardContainer">
        {Data.map((e, i) => {
          return (
            <Card
              key={i}
              id={e.id}
              image={e.image}
              title={e.title}
              description={e.description}
              price={e.price}
              rating={e.rating.rate} 
              rating1 ={e.rating.count}

            />
          );
        })}
      </div>
    </>
  )
}

export default App;
