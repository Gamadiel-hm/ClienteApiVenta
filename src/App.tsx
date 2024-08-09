import { useEffect, useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
  precio: string;
  codigos: number[];
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7254/api/v1/producto')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <header>
        <h2>Api Sold</h2>
      </header>
      <main>
        <section className='container'>
          {products.map(item => (
            <div
              className='card'
              key={item.id}>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.codigos.map(s => `${s} - `)}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
