
import Link from 'next/link';
import Image from 'next/image';


export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  pictures: string[];
}

export interface ProductsProps {
  locale: string;
  products: Product[];
  title: string;
}


export default function AllProductPage({ locale, products, title }: ProductsProps) {
  const domaine = process.env.NEXT_PUBLIC_DOMAINE;


  return (
    <section id="products" 
    className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="py-2 text-2xl font-bold sm:text-3xl">{title}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <Link href={`${domaine}${locale}/products/${product.id}`} className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src={product.pictures?.[0]}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">{product.name}</h3>
              <small className="text-sm leading-none text-muted-foreground">{product.description}</small>
              {/* <h4 className="font-semibold">{product.price}</h4> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
