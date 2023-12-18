import {useState,useEffect} from "react"
import { Product } from "./product";

function App() {
  const [products, setProducts] = useState<Product[]>(
    []
  );
  useEffect(() => {
    console.log(products)
    fetch('https://localhost:5000/api/Product')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => setProducts(data))
    
  },[]) 

  function addProduct(){  
    setProducts( prevState =>[...prevState, 
      {
        id: prevState.length + 101,
        name: 'product ' + (prevState.length + 1),
        price: (prevState.length * 100)+100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }])
  }
    
  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map(product=>(
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}       
      </ul>
      <button onClick={addProduct}>Add Product</button>
      
    </div>
  )
}

export default App;
