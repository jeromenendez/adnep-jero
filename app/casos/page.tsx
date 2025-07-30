import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const casos = [
  {
    id: "visit-argentina",
    title: "Visit Argentina",
    subtitle: "Campaña Nacional de Turismo",
    description:
      "Campaña de video digital para promover el turismo argentino a nivel internacional, destacando los destinos más emblemáticos del país.",
    year: "2023",
    client: "Ministerio de Turismo",
    category: "Turismo",
    image: "/placeholder.svg?height=400&width=600&text=Visit+Argentina",
    gradient: "from-adnep-blue to-blue-600",
    stats: {
      views: "2.5M",
      reach: "15 países",
      engagement: "8.2%",
    },
  },
  {
    id: "mendoza-2022",
    title: "Mendoza 2022",
    subtitle: "Experiencia Vitivinícola",
    description:
      "Producción audiovisual destacando la región vitivinícola más importante de Argentina, mostrando la tradición y modernidad del sector.",
    year: "2022",
    client: "Gobierno de Mendoza",
    category: "Institucional",
    image: "/placeholder.svg?height=400&width=600&text=Mendoza+Vinos",
    gradient: "from-adnep-orange to-adnep-yellow",
    stats: {
      views: "1.8M",
      reach: "10 países",
      engagement: "9.1%",
    },
  },
  {
    id: "patagonia-2022",
    title: "Patagonia 2022",
    subtitle: "Naturaleza Salvaje",
    description:
      "Experiencia inmersiva mostrando la belleza natural de la Patagonia argentina, desde glaciares hasta la fauna autóctona.",
    year: "2022",
    client: "Parques Nacionales",
    category: "Naturaleza",
    image: "/placeholder.svg?height=400&width=600&text=Patagonia+Salvaje",
    gradient: "from-adnep-green to-green-600",
    stats: {
      views: "3.2M",
      reach: "20 países",
      engagement: "12.4%",
    },
  },
  {
    id: "buenos-aires-cultural",
    title: "Buenos Aires Cultural",
    subtitle: "Capital del Tango",
    description:
      "Serie documental sobre la riqueza cultural de Buenos Aires, desde el tango hasta la gastronomía porteña.",
    year: "2023",
    client: "Ciudad de Buenos Aires",
    category: "Cultural",
    image: "/placeholder.svg?height=400&width=600&text=Buenos+Aires+Tango",
    gradient: "from-adnep-purple to-purple-600",
    stats: {
      views: "1.5M",
      reach: "8 países",
      engagement: "7.8%",
    },
  },
  {
    id: "cordoba-sierras",
    title: "Córdoba Sierras",
    subtitle: "Aventura y Tradición",
    description:
      "Campaña promocional destacando las sierras cordobesas, combinando turismo aventura con tradiciones locales.",
    year: "2023",
    client: "Turismo Córdoba",
    category: "Turismo",
    image: "/placeholder.svg?height=400&width=600&text=Cordoba+Sierras",
    gradient: "from-adnep-red to-red-600",
    stats: {
      views: "2.1M",
      reach: "12 países",
      engagement: "10.3%",
    },
  },
  {
    id: "ushuaia-fin-del-mundo",
    title: "Ushuaia",
    subtitle: "Fin del Mundo",
    description:
      "Documental sobre Ushuaia, la ciudad más austral del mundo, mostrando su historia, paisajes y vida cotidiana.",
    year: "2022",
    client: "Municipio de Ushuaia",
    category: "Documental",
    image: "/placeholder.svg?height=400&width=600&text=Ushuaia+Fin+del+Mundo",
    gradient: "from-cyan-500 to-blue-700",
    stats: {
      views: "1.9M",
      reach: "15 países",
      engagement: "11.2%",
    },
  },
]

export default function CasosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón flotante fijo */}
      <div className="fixed top-20 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center bg-white/90 backdrop-blur-sm text-adnep-orange hover:text-adnep-yellow hover:bg-white transition-all duration-300 px-4 py-2 rounded-full shadow-lg border border-gray-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Volver al inicio</span>
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
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Nuestros
              <br />
              <span className="bg-gradient-adnep bg-clip-text text-transparent">Casos de Éxito</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre los proyectos que hemos desarrollado para marcas y organizaciones, creando experiencias
              audiovisuales que conectan y generan impacto.
            </p>
          </div>
        </div>
      </section>

      {/* Casos Grid */}
      <section className="py-20 bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {casos.map((caso) => (
                <Link key={caso.id} href={`/casos/${caso.id}`}>
                  <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-sky-200 hover:bg-sky-100 cursor-pointer">
                    <div className={`relative h-64 bg-gradient-to-br ${caso.gradient}`}>
                      <Image
                        src={caso.image || "/placeholder.svg"}
                        alt={caso.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Stats overlay */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white text-sm font-medium">{caso.stats.views} views</div>
                      </div>

                      {/* Play button */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                          <Play className="h-6 w-6 ml-1" />
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-adnep-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {caso.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-700">{caso.title}</h3>
                        <span className="text-sm text-slate-500">{caso.year}</span>
                      </div>
                      <p className="text-adnep-orange font-medium mb-2">{caso.subtitle}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{caso.description}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {caso.stats.reach}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {caso.stats.engagement} engagement
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Tienes un proyecto en mente?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trabajemos juntos para crear la próxima experiencia audiovisual que conecte con tu audiencia.
            </p>
            <Link href="/#contacto">
              <Button
                size="lg"
                className="bg-gradient-orange hover:opacity-90 text-white px-8 py-4 text-lg shadow-lg border-0"
              >
                Hablemos de tu proyecto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer simplificado */}
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
