import { Card, CardContent } from '@/components/ui/card'
import { Award, Truck, MapPin, Clock } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <img
              className="rounded-lg shadow-xl"
              src="images/Levi.png"
              alt="Levi Tatibano da Silva - Especialista em madeira"
            />
          </div>
          
          <div className="mt-10 lg:mt-0 lg:col-span-7 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Sobre Levi Tatibano da Silva
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Com mais de 40 anos de experiência no setor madeireiro, Levi Tatibano da Silva construiu uma reputação sólida como consultor especializado em madeira e paletes.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Nossa consultoria oferece soluções completas para empresas que buscam qualidade e eficiência no fornecimento de madeira serrada e paletes, com gestão de ponta a ponta do processo.
              </p>
              
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Award className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">40 anos de experiência</h3>
                      <p className="mt-2 text-sm text-gray-500">Conhecimento profundo do mercado madeireiro brasileiro.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Truck className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Gestão completa</h3>
                      <p className="mt-2 text-sm text-gray-500">Da contratação de motoristas até a entrega final do produto.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Cobertura nacional</h3>
                      <p className="mt-2 text-sm text-gray-500">Atendimento em todo o território brasileiro.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Compromisso com prazos</h3>
                      <p className="mt-2 text-sm text-gray-500">Entregas pontuais e confiáveis para seus projetos.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}