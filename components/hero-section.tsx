import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-pattern pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Consultoria especializada em</span>
              <span className="block text-primary">madeira e paletes</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Há 40 anos oferecendo soluções completas para o setor madeireiro,
              desde a contratação de motoristas até a entrega final, com
              cobertura em todo o Brasil.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="#services">Nossos Serviços</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact" className="flex items-center gap-2">
                    Fale Conosco <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full h-96 lg:h-80"
                  src="/images/MadeiraSerrada2.png"
                  alt="Madeira serrada de alta qualidade"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
