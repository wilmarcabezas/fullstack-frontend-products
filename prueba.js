fetch('https://fullstack-vercel-node-productos.vercel.app/productos')
.then(response => response.json())
.then(data=> console.log(data))