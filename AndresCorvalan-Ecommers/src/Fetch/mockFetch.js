const productos = [
    {id: 1, name: 'Mouse Pad XL RedDragon', category: 'Pad' ,price: 20000, stock: 20, description: 'un mouse pad de buena calidad', imagen: 'https://www.venex.com.ar/products_images/1534178547_hbj.png'},
    {id: 2, name: 'Teclado Mecanio RedDragon', category: 'Teclado' ,price: 30000, stock: 15, description: 'un teclado mecanico de buena calidad', imagen: 'https://s3-sa-east-1.amazonaws.com/saasargentina/U7DRqRfkhk5o0J3ERB86/imagen'},
    {id: 3, name: 'Mouse RedDragon 30000dpi', category: 'Mouse' ,price: 50000, stock: 10, description: 'un mouse de buena calidad', imagen: 'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/1/4/14751_1.jpg'}
]

export const mFetch = (pid) => new Promise((res,rej) => {
        setTimeout(()=>{
            res(pid  ? productos.find(producto => producto.id = pid) : productos)
        }, 2000)
})