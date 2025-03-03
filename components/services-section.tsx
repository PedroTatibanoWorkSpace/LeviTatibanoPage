import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Truck, Search, ShieldCheck, PackageCheck } from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Oferecemos soluções completas para o setor madeireiro, com foco em qualidade e eficiência.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="service-card transition-all duration-300">
            <CardHeader>
              <Truck className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Transporte Especializado</CardTitle>
              <CardDescription>Gestão completa de transporte de madeira e paletes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Contratação e coordenação de motoristas especializados no transporte de madeira, garantindo segurança e pontualidade nas entregas.
              </p>
            </CardContent>
          </Card>

          <Card className="service-card transition-all duration-300">
            <CardHeader>
              <Search className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Sourcing de Madeira</CardTitle>
              <CardDescription>Identificação das melhores fontes de matéria-prima</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Localização e seleção dos melhores fornecedores de madeira serrada e paletes, considerando qualidade, preço e sustentabilidade.
              </p>
            </CardContent>
          </Card>

          <Card className="service-card transition-all duration-300">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Controle de Qualidade</CardTitle>
              <CardDescription>Inspeção e garantia de conformidade</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Verificação rigorosa da qualidade da madeira e paletes, assegurando que atendam às especificações e padrões exigidos.
              </p>
            </CardContent>
          </Card>

          <Card className="service-card transition-all duration-300">
            <CardHeader>
              <PackageCheck className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Gestão de Entregas</CardTitle>
              <CardDescription>Coordenação logística completa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Acompanhamento de todo o processo de entrega, desde o carregamento até a descarga no destino final, com relatórios detalhados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}