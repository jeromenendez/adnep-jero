import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users, Eye, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const casosData = {
  "visit-argentina": {
    title: "Visit Argentina",
    subtitle: "Campaña Nacional de Turismo",
    description:
      "Una campaña integral de video digital diseñada para promover el turismo argentino a nivel internacional. El proyecto incluyó la producción de contenido audiovisual de alta calidad que captura la esencia y diversidad de los destinos turísticos más emblemáticos de Argentina.",
    year: "2023",
    client: "Ministerio de Turismo de Argentina",
    category: "Turismo",
    duration: "3 meses",
    team: "14 profesionales",
    gradient: "from-adnep-blue to-blue-600",
    stats: {
      views: "2.5M",
      reach: "15 países",
      engagement: "8.2%",
      conversion: "12.5%",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=Visit+Argentina+Hero",
      "/placeholder.svg?height=400&width=600&text=Buenos+Aires+Skyline",
      "/placeholder.svg?height=400&width=600&text=Cataratas+del+Iguazu",
      "/placeholder.svg?height=400&width=600&text=Glaciar+Perito+Moreno",
      "/placeholder.svg?height=400&width=600&text=Mendoza+Vineyards",
      "/placeholder.svg?height=400&width=600&text=Bariloche+Lakes",
    ],
    challenge:
      "El desafío principal fue crear contenido que representara la diversidad geográfica y cultural de Argentina, desde las cataratas del Iguazú hasta los glaciares patagónicos, manteniendo una narrativa cohesiva que inspire a los viajeros internacionales.",
    solution:
      "Desarrollamos una estrategia de contenido multiplataforma que incluía videos cortos para redes sociales, documentales largos para televisión y contenido interactivo para web. Cada pieza fue optimizada para diferentes audiencias y mercados internacionales.",
    results:
      "La campaña superó todas las expectativas, generando un aumento del 35% en las consultas turísticas internacionales y posicionando a Argentina como un destino top en las búsquedas de viajes en Sudamérica.",
  },
  "mendoza-2022": {
    title: "Mendoza 2022",
    subtitle: "Experiencia Vitivinícola",
    description:
      "Producción audiovisual integral que destaca la región vitivinícola más importante de Argentina. El proyecto combina la tradición centenaria de la producción de vinos con las técnicas modernas, creando una narrativa que celebra tanto el patrimonio como la innovación del sector.",
    year: "2022",
    client: "Gobierno de Mendoza",
    category: "Institucional",
    duration: "4 meses",
    team: "12 profesionales",
    gradient: "from-adnep-orange to-adnep-yellow",
    stats: {
      views: "1.8M",
      reach: "10 países",
      engagement: "9.1%",
      conversion: "15.2%",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=Mendoza+Vineyards+Sunset",
      "/placeholder.svg?height=400&width=600&text=Wine+Tasting+Experience",
      "/placeholder.svg?height=400&width=600&text=Harvest+Season",
      "/placeholder.svg?height=400&width=600&text=Andes+Mountains+View",
      "/placeholder.svg?height=400&width=600&text=Wine+Cellar+Tour",
      "/placeholder.svg?height=400&width=600&text=Gourmet+Pairing",
    ],
    challenge:
      "Comunicar la complejidad y sofisticación de la industria vitivinícola mendocina a una audiencia global, diferenciando la propuesta argentina en un mercado altamente competitivo.",
    solution:
      "Creamos una serie de contenidos que van desde micro-documentales sobre productores familiares hasta experiencias inmersivas en 360° de las bodegas más prestigiosas. Cada pieza fue diseñada para diferentes momentos del customer journey.",
    results:
      "El proyecto resultó en un incremento del 28% en el turismo enológico hacia Mendoza y estableció nuevas alianzas comerciales con distribuidores internacionales en 8 países.",
  },
  "patagonia-2022": {
    title: "Patagonia 2022",
    subtitle: "Naturaleza Salvaje",
    description:
      "Una experiencia audiovisual inmersiva que captura la majestuosidad de la Patagonia argentina. Desde los imponentes glaciares hasta la fauna autóctona, este proyecto documenta uno de los ecosistemas más pristinos del planeta, combinando técnicas cinematográficas avanzadas con storytelling emocional.",
    year: "2022",
    client: "Administración de Parques Nacionales",
    category: "Naturaleza",
    duration: "6 meses",
    team: "18 profesionales",
    gradient: "from-adnep-green to-green-600",
    stats: {
      views: "3.2M",
      reach: "20 países",
      engagement: "12.4%",
      conversion: "18.7%",
    },
    images: [
      "/placeholder.svg?height=600&width=800&text=Patagonia+Glacier+Landscape",
      "/placeholder.svg?height=400&width=600&text=Condor+Flying+Andes",
      "/placeholder.svg?height=400&width=600&text=Penguin+Colony+Peninsula",
      "/placeholder.svg?height=400&width=600&text=Fitz+Roy+Mountain",
      "/placeholder.svg?height=400&width=600&text=Whale+Watching+Puerto+Madryn",
      "/placeholder.svg?height=400&width=600&text=Gaucho+Horseback+Riding",
    ],
    challenge:
      "Documentar la vastedad y diversidad de la Patagonia mientras se mantiene el respeto por el medio ambiente y las comunidades locales, todo bajo condiciones climáticas extremas.",
    solution:
      "Implementamos un enfoque de producción sostenible utilizando equipos de filmación de bajo impacto ambiental y colaborando estrechamente con guías locales y expertos en conservación para capturar imágenes únicas sin disturbar los ecosistemas.",
    results:
      "La serie documental se convirtió en la producción argentina más vista sobre naturaleza en plataformas digitales, generando un aumento del 45% en el ecoturismo hacia la región patagónica.",
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function CasoDetailPage({ params }: PageProps) {
  const caso = casosData[params.slug as keyof typeof casosData]

  if (!caso) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón flotante fijo */}
      <div className="fixed top-20 left-4 z-50">
        <Link
          href="/casos"
          className="inline-flex items-center bg-white/90 backdrop-blur-sm text-adnep-orange hover:text-adnep-yellow hover:bg-white transition-all duration-300 px-4 py-2 rounded-full shadow-lg border border-gray-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Volver a casos</span>
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <h1 className="text-3xl font-bold bg-gradient-adnep bg-clip-text text-transparent cursor-pointer">
                  ADNEP
                </h1>
              </Link>
              <span className="text-sm text-gray-500 font-medium">powered by Showheroes</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#servicios" className="text-gray-700 hover:text-adnep-orange transition-colors font-medium">
                Servicios
              </Link>
              <Link href="/casos" className="text-adnep-orange font-medium">
                Casos
              </Link>
              <Link href="/#contacto" className="text-gray-700 hover:text-adnep-orange transition-colors font-medium">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-br ${caso.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-white">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                {caso.category}
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">{caso.title}</h1>
              <p className="text-2xl mb-6 opacity-90">{caso.subtitle}</p>
              <p className="text-lg leading-relaxed opacity-80 max-w-3xl">{caso.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-adnep-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-adnep-orange" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Año</h3>
                <p className="text-gray-600">{caso.year}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-adnep-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-adnep-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Equipo</h3>
                <p className="text-gray-600">{caso.team}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-adnep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-adnep-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cliente</h3>
                <p className="text-gray-600">{caso.client}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-adnep-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-adnep-purple" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Duración</h3>
                <p className="text-gray-600">{caso.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Resultados del Proyecto</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-adnep-orange mb-2">{caso.stats.views}</div>
                <div className="text-slate-200">Visualizaciones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-adnep-blue mb-2">{caso.stats.reach}</div>
                <div className="text-slate-200">Alcance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-adnep-green mb-2">{caso.stats.engagement}</div>
                <div className="text-slate-200">Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-adnep-purple mb-2">{caso.stats.conversion}</div>
                <div className="text-slate-200">Conversión</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Galería del Proyecto</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caso.images.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${caso.title} - Imagen ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">El Desafío</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">{caso.challenge}</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Solución</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">{caso.solution}</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{caso.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-adnep bg-clip-text text-transparent cursor-pointer">
                ADNEP
              </h3>
            </Link>
            <p className="text-gray-400">
              © {new Date().getFullYear()} ADNEP. Todos los derechos reservados. Powered by Showheroes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
