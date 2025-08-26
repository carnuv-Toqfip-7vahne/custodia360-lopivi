import Link from 'next/link'

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios <span className="text-orange-600">Custodia360</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Implementación completa de la normativa LOPIVI y plan de protección infantil
          </p>
          <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-bold">
            Implementación en 72 horas
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué incluye nuestro servicio?</h2>
            <p className="text-xl text-gray-600">Todo lo necesario para implementar la LOPIVI y un Plan de Protección</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Delegado de Protección */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delegado de Protección</h3>
              <p className="text-gray-600 mb-6">
                Designación y certificación completa del delegado según normativa LOPIVI.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Formación especializada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Certificación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Actualizaciones normativas continuas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Soporte técnico</span>
                </li>
              </ul>
            </div>

            {/* Plan de Protección */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan de Protección</h3>
              <p className="text-gray-600 mb-6">
                Desarrollo completo del plan de protección personalizado para tu entidad.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Plan personalizado por entidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Protocolos de actuación específicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Código de conducta profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Documentación completa LOPIVI</span>
                </li>
              </ul>
            </div>

            {/* Formación Personal */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formación Personal</h3>
              <p className="text-gray-600 mb-6">
                Formación completa de todo el personal que trabaja con menores.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Formación online</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Certificados para cada empleado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Material didáctico incluido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Seguimiento y recordatorios</span>
                </li>
              </ul>
            </div>

            {/* Sistema de Gestión */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema de Gestión</h3>
              <p className="text-gray-600 mb-6">
                Plataforma digital completa para gestionar todo el cumplimiento LOPIVI.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Dashboard completo del delegado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Gestión de casos y incidentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Informes automáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Acceso 24/7 desde cualquier lugar</span>
                </li>
              </ul>
            </div>

            {/* Comunicación Familias */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">

              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunicación Familias</h3>
              <p className="text-gray-600 mb-6">
                Sistema completo de comunicación e información para las familias.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Comunicados automáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Información transparente del proceso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Canal directo de comunicación de la entidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Documentación digital accesible</span>
                </li>
              </ul>
            </div>

            {/* Mantenimiento */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mantenimiento Continuo</h3>
              <p className="text-gray-600 mb-6">
                Mantenimiento y actualizaciones automáticas para garantizar el cumplimiento.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Actualizaciones normativas automáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Renovación de documentación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Soporte técnico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Monitoreo continuo del cumplimiento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Implementación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Implementación</h2>
            <p className="text-xl text-gray-600">Así implementamos la LOPIVI en tu entidad</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-600 mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Configuración</h3>
              <p className="text-gray-600">
                Configuramos todos los sistemas, documentos y protocolos personalizados para tu entidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-3xl font-bold text-orange-600 mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formación</h3>
              <p className="text-gray-600">
                Formamos a todo el personal y certificamos al delegado de protección de tu entidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600 mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Activación</h3>
              <p className="text-gray-600">
                Activamos el sistema completo y cumpliendo la LOPIVI.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para proteger tu entidad?</h2>
          <p className="text-xl mb-8">Implementa LOPIVI en 72 horas y protege a todos los menores</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/planes"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Ver Planes y Precios
            </Link>
            <Link
              href="/guia"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Guía de Implementación
            </Link>
            <Link
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
