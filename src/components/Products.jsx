import {useState, useEffect} from 'react';

export function Products(){
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://fullstack-vercel-node-productos.vercel.app/productos')
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            setProductos(data)
        })
    },[]);

    return(
        <div>
            <h1>Products</h1>
            {
                productos.map((producto,index)=>(
                    <div key={index}>
                        {producto.name} $ {producto.price}
                    </div>
                ))
            }
        </div>
    )
}