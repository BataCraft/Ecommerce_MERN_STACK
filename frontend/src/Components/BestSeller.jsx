import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=> (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5));
    }, [])

  return (
    <div className="my-10">
    <div className="text-center py-8">
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className="w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nihil placeat perspiciatis at odio amet?
        </p>
    </div>

    {BestSeller.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {BestSeller.map((item) => (
                <ProductItem 
                    key={item.id} 
                    id={item._id} 
                    name={item.name} 
                    image={item.image} 
                    price={item.price}
                />
            ))}
        </div>
    ) : (
        <p className="text-center text-gray-500">No products available</p>
    )}
</div>
  )
}

export default BestSeller