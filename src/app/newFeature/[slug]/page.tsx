import { client } from "@/sanity/lib/client"
import { Product } from "../../../../types/products"
import { groq } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

interface ProductPageProps {
  params : Promise<{slug: string}>
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      price,
      Category,
      image,
      Status,
      description,
      color,
      }`,{slug}
  ) 
}
export default async function ProductPage({params}: ProductPageProps) {
  const {slug} = await params;
  const product = await getProduct(slug);
  return (
    <div className="max-w-7xl mx-auto px-32">
        <h1 className="text-3xl font-bold m-16 text-center font-serif">
        Product Detail Page
    </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="aspect-square">
          {product.image && (
            <Image src={urlFor(product.image).url()}
             alt={product.productName}
             width={300}
             height={300}
             className="object-cover rounded-md flex self-center" />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold font-serif">{product.productName}</h1>
          <p className="text-blue-500 font-bold text-2xl">{product.price ? `$${product.price}` : "Price not available"}</p>
          <p className="text-gray-700">{product.description}</p>
          {/* <p className="text-sm text-red-600 mb-2">Category: {product.category ? `${product.category}`: "category is not available "}</p>
          <p className="text-sm text-green-600 mb-2">Status: {product.status}</p>
          <p className="text-sm text-green-600 mb-2">Color: {product.color}</p> */}
          
    <Link href={'/cart'}>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        Add to Cart
      </button>
    </Link>

        </div>
      </div>
      </div>
  )
}