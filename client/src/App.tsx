import {useState} from "react"

function App() {
  const [products, setProducts] = useState(
    [
      {name: 'Product 1', price: 100},
      {name: 'Product 2', price: 200},
      {name: 'Product 3', price: 300},
    ]
  );
  function addProduct(){
    setProducts(
      prevState => 
      [...prevState, 
      {name: 'Product '+(prevState.length+1), price: (prevState.length*100)+100}
    ])
  }
    

  return (
    <div className="app">
      <h1>
      <ul>
        {products.map((map, index)=>(
          <li key={index}>{map.name} - {map.price}</li>
        ))}       
      </ul>
      <button onClick={addProduct}>Add Product</button>
      </h1>
    </div>
  )
}

export default App;
