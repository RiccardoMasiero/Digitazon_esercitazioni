import { useState, useEffect } from "react"


export function Fetch() {
    const [products, setProduct] = useState([])
    useEffect(() => {
        async function fetchProducts(){
            let res = await fetch("https://fakestoreapi.com/products")
            let json = await res.json()
            console.log(json)
            setProduct(json)
        } 
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Fetch</h1>
            {products.map((el)=>
                (
                    <div className="items" key={el.id}>
                        <h4>{el.title}</h4>
                        <img src={el.image} alt="Immagini"></img>
                        <p>{el.price}</p>
                    </div>
                )

            )}
        </>

    )
}