import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Play, Video, Zap, Target, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold bg-gradient-adnep bg-clip-text text-transparent">ADNEP</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#servicios" className="text-gray-700 hover:text-adnep-orange transition-colors font-medium">
                Servicios
              </Link>
              <Link href="#casos" className="text-gray-700 hover:text-adnep-orange transition-colors font-medium">
                Casos
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-adnep-orange transition-colors font-medium">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Fondo inspirado en la imagen publicitaria */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-teal-300/15 to-yellow-400/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-amber-300/15"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-400/10 to-blue-600/15"></div>

        {/* Elementos difuminados adicionales */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-400/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Soluciones creativas
              <br />
              <span className="bg-gradient-adnep bg-clip-text text-transparent">de video</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transformamos ideas en experiencias audiovisuales que conectan marcas con audiencias de manera innovadora
              y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/casos">
                <Button
                  size="lg"
                  className="bg-gradient-orange hover:opacity-90 text-white px-8 py-4 text-lg shadow-lg border-0"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver casos
                </Button>
              </Link>
              <Link href="#contacto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-adnep-orange text-adnep-orange hover:bg-adnep-orange hover:text-white px-8 py-4 text-lg bg-white/80 backdrop-blur-sm"
                >
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos Section */}
      <section id="servicios" className="py-20 bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Qué hacemos</h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Combinamos creatividad, producción y estrategia de medios para crear soluciones de video digital que
                generan impacto real.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Creatividad */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-sky-200 hover:bg-sky-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">Creatividad</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Encontramos el formato ideal para incrementar el impacto de tu marca en video digital, desarrollando
                    conceptos únicos que conectan con tu audiencia.
                  </p>
                </CardContent>
              </Card>

              {/* Producción */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-sky-200 hover:bg-sky-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">Producción</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Producimos formatos digitales creativos con los más altos estándares de calidad, desde la
                    conceptualización hasta la entrega final.
                  </p>
                </CardContent>
              </Card>

              {/* Media */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-sky-200 hover:bg-sky-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">Media</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Preroll, Video interactivo, Connected TV, OTT y Addressable Advertising. Maximizamos el alcance y la
                    efectividad de tus campañas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section id="casos" className="py-20 bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Casos de éxito</h2>
              <p className="text-xl text-slate-200">
                Proyectos que demuestran nuestro compromiso con la excelencia y la innovación.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Visit Argentina */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-sky-200 hover:bg-sky-100 group">
                <div className="relative h-48">
                  <Image
                    src="/images/bsas-optimized.jpg"
                    alt="Visit Argentina - Buenos Aires nocturno con el Obelisco"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Visit Argentina</h3>
                  <p className="text-slate-600">
                    Campaña de video digital para promover el turismo argentino a nivel internacional.
                  </p>
                </CardContent>
              </Card>

              {/* Mendoza 2022 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-sky-200 hover:bg-sky-100 group">
                <div className="relative h-48">
                  <Image
                    src="/images/mendoza-optimized.jpg"
                    alt="Mendoza 2022 - Viñedos con montañas de los Andes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Mendoza 2022</h3>
                  <p className="text-slate-600">
                    Producción audiovisual destacando la región vitivinícola más importante de Argentina.
                  </p>
                </CardContent>
              </Card>

              {/* Patagonia 2022 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-sky-200 hover:bg-sky-100 group">
                <div className="relative h-48">
                  <Image
                    src="/images/patagonia-optimized.jpg"
                    alt="Patagonia 2022 - Glaciar Perito Moreno"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Patagonia 2022</h3>
                  <p className="text-slate-600">
                    Experiencia inmersiva mostrando la belleza natural de la Patagonia argentina.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Logo centrado arriba */}
            <div className="text-center mb-12">
              <h3 className="text-5xl font-bold mb-4 bg-gradient-adnep bg-clip-text text-transparent">ADNEP</h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">Soluciones creativas de video digital</p>
              <div className="flex items-center justify-center space-x-2 text-adnep-green">
                <Globe className="h-5 w-5" />
                <span className="font-medium">Presencia global, creatividad local</span>
              </div>
            </div>

            {/* Contacto y Presencia en línea simétricas */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contacto */}
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-semibold mb-8 text-adnep-orange">Contacto</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="w-10 h-10 bg-adnep-orange/20 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-adnep-orange" />
                    </div>
                    <a
                      href="mailto:hola@adnep.digital"
                      className="text-gray-300 hover:text-white transition-colors text-lg"
                    >
                      hola@adnep.digital
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="w-10 h-10 bg-adnep-orange/20 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-adnep-orange" />
                    </div>
                    <a href="tel:+541147735600" className="text-gray-300 hover:text-white transition-colors text-lg">
                      +54 11 4773 5600
                    </a>
                  </div>
                  <div className="flex items-start justify-center md:justify-start space-x-4">
                    <div className="w-10 h-10 bg-adnep-orange/20 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="h-5 w-5 text-adnep-orange" />
                    </div>
                    <span className="text-gray-300 text-lg">
                      Zapiola 4445, CABA
                      <br />
                      Buenos Aires, Argentina
                    </span>
                  </div>
                </div>
              </div>

              {/* Presencia */}
              <div className="text-center md:text-right">
                <h4 className="text-2xl font-semibold mb-8 text-adnep-green">Presencia Global</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-gray-300 font-semibold text-lg">Argentina</div>
                    <div className="text-gray-300 font-semibold text-lg">Brasil</div>
                    <div className="text-gray-300 font-semibold text-lg">Chile</div>
                    <div className="text-gray-300 font-semibold text-lg">Colombia</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-300 font-semibold text-lg">México</div>
                    <div className="text-gray-500 text-lg">Europa</div>
                    <div className="text-gray-500 text-lg">Jero</div>
                    <div className="text-gray-500 text-lg">América</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright centrado */}
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} ADNEP. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
