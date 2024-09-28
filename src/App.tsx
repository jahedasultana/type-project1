import { useEffect, useState } from "react";
import Card from "./components/Card";
export type CardProduct = {
  id: number,
  title: string,
  description: string,
  price: number
}

const App = () => {



  const [products, setProducts] = useState<CardProduct[]>([]);

  useEffect(() =>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data));
  }, [])
  return (
    <div>
   
      <div className="py-10 grid md:grid-cols-3 grid-cols-1 gap-10">
       {
        products.map((product) =>  <Card key={product.id}
        product={product}
        ></Card>)
       }
      </div>
    </div>
  );
};

export default App;