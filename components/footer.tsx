import Link from 'next/link'
import { TreePine, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-2">
              <TreePine className="h-8 w-8" />
              <span className="text-xl font-semibold">Levi Tatibano</span>
            </Link>
            <p className="mt-4 text-sm">
              40 anos de experiência em consultoria de madeira e paletes, oferecendo soluções completas para o setor madeireiro em todo o Brasil.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Projetos', 'Galeria', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase() === 'início' ? 'hero' : item.toLowerCase()}`}
                    className="text-sm hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Transporte Especializado', 
                'Sourcing de Madeira', 
                'Controle de Qualidade', 
                'Gestão de Entregas',
                'Consultoria Ambiental',
              ].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                Av. Expedicionários, 1171, Parque Cimentolândia<br />
                Itapeva, SP - 18409-640
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">(15) 99771-8311</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">levitatibano1964@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Levi Tatibano da Silva Consultoria em Madeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}