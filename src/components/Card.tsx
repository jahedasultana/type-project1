import { CardProduct } from "../App";

export type productsAdd = {
    product: CardProduct
}

const Card = ({product}: productsAdd) => {



    return (
        <div className="border-2 border-gray-600/40 p-2 ">
            <img className="h-64 w-full object-cover" src="https://img.freepik.com/free-photo/balloon-twist-shaped-like-flower_23-2151625253.jpg?t=st=1727520517~exp=1727524117~hmac=01c9a3ac1527416b8e2b20aa7d97c8ab738c808f6f0d8318ce52195d58a9def9&w=740" alt="card" />
            <div>
            <h1>Title: {product.title}</h1>
            <p>Description: {product.description}</p>
            </div>
            <div className="flex justify-between pt-2">
                <button className="p-2 bg-violet-400 px-4">Delete</button>
                <button className="p-2 bg-violet-400 px-4">Added</button>
            </div>
        </div>
    );
};

export default Card;