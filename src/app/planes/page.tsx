import Link from 'next/link'

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes <span className="text-orange-600">Custodia360</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Todos los planes incluyen exactamente lo mismo
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Solo cambia el precio según el número de menores en tu entidad
          </p>
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold">
            ✅ Implementación garantizada en 72 horas
          </div>
        </div>
      </section>

      {/* Qué incluye todos los planes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué incluye TODOS los planes?</h2>
            <p className="text-xl text-gray-600">Cumplimiento 100% de la LOPIVI sin excepciones</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Delegado de Protección</h3>
              <p className="text-gray-600 text-sm">Designación y certificación oficial según normativa LOPIVI</p>
            </div>

            <div className="text-center bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Plan de Protección</h3>
              <p className="text-gray-600 text-sm">Plan personalizado y protocolos de actuación específicos</p>
            </div>

            <div className="text-center bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Formación Personal</h3>
              <p className="text-gray-600 text-sm">Formación completa y certificados para todo el personal</p>
            </div>

            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Mantenimiento</h3>
              <p className="text-gray-600 text-sm">Actualizaciones automáticas y soporte continuo</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <h3 className="font-bold text-yellow-800 mb-2">¿Por qué todos los planes incluyen lo mismo?</h3>
            <p className="text-yellow-700">
              La LOPIVI exige el mismo nivel de protección para todos los menores, independientemente del tamaño de la entidad.
              Por eso todos nuestros planes incluyen exactamente los mismos servicios y garantías.
            </p>
          </div>
        </div>
      </section>

      {/* Planes Principales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Elige tu plan según número de menores</h2>
            <p className="text-xl text-gray-600">Precios justos y transparentes</p>
          </div>

          {/* Explicación de pagos divididos */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">💳</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Facilitamos tu contratación</h3>
            </div>
            <p className="text-blue-700 text-center text-lg font-medium mb-2">
              Todos nuestros precios se dividen en 2 pagos iguales para mayor comodidad
            </p>
            <p className="text-blue-600 text-center">
              <span className="font-bold">Ejemplo:</span> Plan 50 = 19€ hoy + 19€ a los 6 meses (Total: 38€ + IVA)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Plan 1-50 */}
            <div className="bg-white rounded-xl border border-blue-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 50</h3>
                <p className="text-gray-500 text-sm">Para entidades de 1 hasta 50 menores</p>
                <div className="text-5xl font-bold text-blue-600 mb-2">19€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-blue-600 mt-2 font-medium">+ 19€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>

                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Plan 51-200 */}
            <div className="bg-white rounded-xl border border-green-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 200</h3>
                <p className="text-gray-500 text-sm">Para entidades de 51 hasta 200 menores</p>
                <div className="text-5xl font-bold text-green-600 mb-2">49€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-green-600 mt-2 font-medium">+ 49€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>

                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Plan 201-500 */}
            <div className="bg-white rounded-xl border border-purple-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 500</h3>
                <p className="text-gray-500 text-sm">Para entidades de 201 hasta 500 menores</p>
                <div className="text-5xl font-bold text-purple-600 mb-2">105€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-purple-600 mt-2 font-medium">+ 105€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Implementación completa en 72h</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>

                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>
          </div>

          {/* Planes adicionales */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan +501 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan 500+</h3>
                <p className="text-gray-500 text-sm">Para entidades de 501 menores en adelante</p>
                <div className="text-5xl font-bold text-gray-700 mb-2">250€</div>
                <p className="text-gray-600">(+IVA) Pago inicial</p>
                <p className="text-sm text-gray-600 mt-2 font-medium">+ 250€ a los 6 meses (+IVA)</p>
                <p className="text-xs text-gray-500 mt-1">Para entidades multideporte</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección certificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Plan de protección personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Protocolos de actuación específicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Formación completa del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Documentación completa LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Sistema de gestión digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 font-bold">•</span>
                    <span>Mantenimiento y actualizaciones</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-gray-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Custodia Temporal */}
            <div className="bg-white rounded-xl border border-yellow-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custodia Temporal</h3>
                <p className="text-gray-500 text-sm">Para eventos, torneos y campus de hasta 60 días</p>
                <div className="text-5xl font-bold text-yellow-600 mb-2">39€</div>
                <p className="text-gray-600">(+IVA) Pago único</p>
                <p className="text-sm text-yellow-600 mt-2 font-medium">Protección temporal completa</p>
                <p className="text-xs text-gray-500 mt-1">Cobertura integral del evento</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Delegado de protección temporal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Protocolos básicos de actuación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Documentación específica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Cobertura completa del evento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Formación básica del personal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Comunicación con familias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Soporte durante el evento</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-yellow-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>

            {/* Kit Comunicación */}
            <div className="bg-white rounded-xl border border-teal-200 p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kit Comunicación</h3>
                <p className="text-gray-500 text-sm">Material informativo LOPIVI personalizado</p>
                <div className="text-5xl font-bold text-teal-600 mb-2">30€</div>
                <p className="text-gray-600">(+IVA) Pago único</p>
                <p className="text-sm text-teal-600 mt-2 font-medium">Material completo incluido</p>
                <p className="text-xs text-gray-500 mt-1">Entrega en 72 horas</p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">✅ Todo incluido:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Carteles informativos LOPIVI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Comunicados para familias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Templates personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Material didáctico básico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Guía de implementación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Documentos legales básicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2 font-bold">•</span>
                    <span>Soporte de instalación</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contratar/datos-entidad"
                className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors block text-center"
              >
                Contratar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación con competencia */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué somos diferentes?</h2>
            <p className="text-xl text-gray-600">Comparación con métodos tradicionales</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-bold text-gray-900">Característica</th>
                  <th className="text-center p-6 font-bold text-orange-600">Custodia360</th>
                  <th className="text-center p-6 font-bold text-gray-600">Consultorías Tradicionales</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-6 font-medium text-gray-900">Tiempo de implementación</td>
                  <td className="p-6 text-center text-green-600 font-bold">72 horas</td>
                  <td className="p-6 text-center text-red-600">3-6 meses</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-6 font-medium text-gray-900">Coste para entidad pequeña</td>
                  <td className="p-6 text-center text-green-600 font-bold">38€ total</td>
                  <td className="p-6 text-center text-red-600">1.500€ - 3.000€</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-medium text-gray-900">Mantenimiento incluido</td>
                  <td className="p-6 text-center text-green-600 font-bold">✅ Sí</td>
                  <td className="p-6 text-center text-red-600">❌ No</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-6 font-medium text-gray-900">Actualizaciones normativas</td>
                  <td className="p-6 text-center text-green-600 font-bold">✅ Automáticas</td>
                  <td className="p-6 text-center text-red-600">❌ Manual</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-medium text-gray-900">Soporte técnico</td>
                  <td className="p-6 text-center text-green-600 font-bold">✅ Incluido</td>
                  <td className="p-6 text-center text-red-600">💰 Extra</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-xl mb-8">Implementa LOPIVI en tu entidad en menos de 72 horas</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Contactar Ahora
            </Link>
            <Link
              href="/guia"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Guía Paso a Paso
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
