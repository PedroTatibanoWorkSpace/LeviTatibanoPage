"use client"

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  {
    src: "/images/Palete5.png",
    alt: "Paletes de madeira empilhados",
    title: "Paletes Padrão"
  },
  {
    src: "/images/MadeiraSerrada.png",
    alt: "Madeira serrada de alta qualidade",
    title: "Madeira Serrada"
  },
  {
    src: "/images/Paletes6.jpg",
    alt: "Transporte de madeira",
    title: "Transporte Especializado"
  },
  {
    src: "/images/ToraDeMadeira.png",
    alt: "Toras de madeira",
    title: "Toras de Madeira"
  },
  {
    src: "/images/Cavaco.png",
    alt: "Cavaco de madeira",
    title: "Cavaco"
  },
  {
    src: "/images/ConsultoriaAmbiental.png",
    alt: "Consultoria Ambiental",
    title: "Consultoria Ambiental"
  }
]

export function GallerySection() {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setOpen(true)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Galeria de Produtos e Serviços
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Conheça a qualidade dos nossos produtos e serviços.
          </p>
        </div>

        <div className="mt-12 gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-10 text-white hover:bg-black/20"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center justify-center p-4">
                <img 
                  src={galleryImages[currentImage].src} 
                  alt={galleryImages[currentImage].alt} 
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-black/20 ml-2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-black/20 mr-2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-4">
                <p className="text-white text-center text-lg font-medium">
                  {galleryImages[currentImage].title}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}