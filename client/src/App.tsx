import {useState,useEffect} from "react"

function App() {
  const [products, setProducts] = useState(
    [
      {name: 'Product 1', price: 100},
      {name: 'Product 2', price: 200},
      {name: 'Product 3', price: 300},
    ]
  );
  useEffect(() => {
    console.log(products)
    fetch('https://localhost:5000/api/Product')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => setProducts(data))
    
  },[]) 

  function addProduct(){  
    setProducts(
      prevState => 
      [...prevState, 
      {name: 'Product '+(prevState.length+1), price: (prevState.length*100)+100}
    ])
  }
    
  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index)=>(
          <li key={index}>{item.name} - {item.price}</li>
        ))}       
      </ul>
      <button onClick={addProduct}>Add Product</button>
      
    </div>
  )
}

export default App;
