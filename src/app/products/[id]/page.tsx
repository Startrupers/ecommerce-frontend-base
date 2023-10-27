import Image from "next/image";
import "./page.css";
import client from "@/services/client";


async function getProducts(id: string) {
    const product = await client.get(`/products/${id}`)
    return product;
}

interface ProductPageProps {
    params: {
        id: string;
    }
}

async function ProductPage({ params }: ProductPageProps) {
    const product = await getProducts(params.id);

    return (
        <div className="card-product">
            <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}

            />
            <h5>{product.title}</h5>
            <p style={{ color: "green" }}>{"$" + product.price}</p>
        </div>
    );

}

export default ProductPage;