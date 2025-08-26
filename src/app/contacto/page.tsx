import Link from 'next/link'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacta con <span className="text-orange-600">Custodia360</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ¿Tienes dudas sobre la implementación LOPIVI? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">678 771 198</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@custodia360.es</p>
                    <p className="text-sm text-gray-500">Respuesta en menos de 72 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">Barcelona, España</p>
                    <p className="text-sm text-gray-500">Servicios en toda España</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2">⚡ Implementación Express</h3>
                <p className="text-orange-800 text-sm">
                  ¿Necesitas cumplir LOPIVI urgentemente? Te permite implementar todo el sistema en 72 horas.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="entity" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de entidad
                  </label>
                  <select
                    id="entity"
                    name="entity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                  >
                    <option value="">Selecciona tu tipo de entidad</option>
                    <option value="deportiva">Club Deportivo</option>
                    <option value="educativa">Centro Educativo</option>
                    <option value="ocio">Centro de Ocio</option>
                    <option value="campamento">Campamento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="menores" className="block text-sm font-medium text-gray-700 mb-2">
                    Número aproximado de menores
                  </label>
                  <select
                    id="menores"
                    name="menores"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                  >
                    <option value="">Selecciona el rango</option>
                    <option value="1-50">1-50 menores</option>
                    <option value="51-200">51-200 menores</option>
                    <option value="201-500">201-500 menores</option>
                    <option value="500+">Más de 500 menores</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="Cuéntanos sobre tu entidad y cómo podemos ayudarte con el cumplimiento LOPIVI..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors"
                >
                  Enviar Mensaje
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obligatorios. Responderemos en menos de 72 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">¿Cuánto tiempo tarda la implementación?</h3>
              <p className="text-gray-600">
                Nuestro sistema automatizado implementa toda la normativa LOPIVI en 72 horas.
                Esto incluye la designación del delegado, plan de protección, protocolos y documentación completa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">¿Qué incluye exactamente el servicio?</h3>
              <p className="text-gray-600">
                Incluye todo lo necesario para cumplir LOPIVI: delegado de protección certificado,
                plan de protección personalizado, protocolos de actuación, formación del personal,
                documentación completa y mantenimiento continuo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">¿Cómo funciona el sistema de precios?</h3>
              <p className="text-gray-600">
                El precio depende únicamente del número de menores en tu entidad.
                Todos los planes incluyen exactamente los mismos servicios, solo cambia el precio según el tamaño.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">¿Ofrecen soporte tras la implementación?</h3>
              <p className="text-gray-600">
                Sí, incluimos mantenimiento continuo con actualizaciones automáticas de la normativa,
                soporte técnico y renovación de documentación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-xl mb-8">Implementa LOPIVI en tu entidad en menos de 72 horas</p>

          <div className="flex justify-center gap-4">
            <Link
              href="/planes"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Ver Planes
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
