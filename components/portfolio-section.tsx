import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projetos de Sucesso
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Conheça alguns dos nossos casos de sucesso no fornecimento de
            madeira e paletes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="images/Coca.jpg"
                alt="Projeto de fornecimento de paletes para indústria"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Fornecimento para Indústria Coca-Cola</CardTitle>
                <Badge>2024</Badge>
              </div>
              <CardDescription>Porto Alegre, RS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Fornecimento em Grande escala de paletes para fabrica da Coca-cola, com controle
                de qualidade e logística completa.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="images/GrupoAssai.png"
                alt="Grupo Assaí Atacadista"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Grupo Assaí Atacadista</CardTitle>
                <div className="flex gap-2">
                  <Badge>2022</Badge>
                  <Badge>2023</Badge>
                </div>
              </div>
              <CardDescription>São Paulo, SP</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Fornecimento de paletes para grande Atacadista,
                incluindo seleção de fornecedores, controle de qualidade e
                logística completa.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="images/ambev.jpg"
                alt="Projeto de exportação de paletes"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Ambev</CardTitle>
                <Badge>2023</Badge>
              </div>
              <CardDescription>São Paulo, SP</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Coordenação e inspeção da produção de paletes para a Ambev em
                São Paulo, incluindo gestão logística e acompanhamento do
                transporte rodoviário.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
