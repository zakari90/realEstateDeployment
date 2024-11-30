"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function ServicesSection({ services, title }: { services: Service[], title: string }) {
  const [index, setIndex] = useState(0);
  const smImgsRef = useRef<HTMLDivElement>(null);

  const handleImgChange = (newIndex: number) => {
    setIndex(newIndex);
    if (smImgsRef.current) {
      const images = smImgsRef.current.children;
      // remove all img active class 
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
      }
      // set current img active class 
      images[newIndex].className = "active";
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id='services'
      className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      <div className="details">
        <div className='large-img-wrapper'>
          <Image
            width={500}
            height={500}
            src={services[index].image} alt="largeImg" className='large-img' />
        </div>
        <div className='box'>
          <div className='row'>
            <h2>{services[index].title}</h2>
          </div>
          <p>{services[index].description}</p>
        </div>
        <div className="thumb" ref={smImgsRef}>
          {
            services.map((img, imgIndex) => (
              <Image
                width={500}
                height={500}
                src={img.image} alt="small img"
                key={imgIndex}
                onClick={() => handleImgChange(imgIndex)}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
