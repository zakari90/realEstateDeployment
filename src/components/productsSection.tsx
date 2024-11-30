"use client";
import { ProductsProps } from "@/app/[locale]/products/allProductPage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";


  export default function ProductsSection({locale, products, title} :
    ProductsProps
  ) {
  return (
    <>
    <section id="products" 
    className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <h1 className="p-3 text-2xl font-bold sm:text-3xl">{title}</h1>
    <div className="mx-auto lg:max-w-6xl px-3" dir="ltr">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="  md:basis-1/3 lg:basis-1/4">  
          <Link 
          href={`${locale}/products/${product.id}`}
          className=" group relative block overflow-hidden">
          <Image
          src={product.pictures[0]}
          alt={product.name}
          width={500}
          height={500}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="relative border border-primary p-6">
          {/* <span className="whitespace-nowrap bg-background px-3 py-1.5 text-xs font-medium"></span> */}

          <h3 className="mt-4 text-lg font-medium">{product.name}</h3>

          <p className="mt-1.5 text-sm "></p>

          <form className="mt-4">
            {/* <Button
              className=" transition hover:scale-105"
            >
              more
            </Button> */}
          </form>
        </div>
      </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-25px] top-1/2 -translate-y-1/2 fill-black" />
        <CarouselNext className="absolute right-[-25px] top-1/2 -translate-y-1/2 fill-black" />
      </Carousel>
    </div>
</section>
  </>
  );
}
