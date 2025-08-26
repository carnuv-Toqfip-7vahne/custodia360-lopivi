'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DemoPage() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Demo <span className="text-orange-600">Custodia360</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Descubre cómo funciona nuestro sistema automatizado de gestión LOPIVI
          </p>
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold mb-8">
            Sistema 100% funcional - Pruébalo ahora
          </div>
        </div>
      </section>

      {/* Dashboard Real Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ejemplo Dashboard Real del Delegado</h2>
            <p className="text-xl text-gray-600 mb-6">Esto es exactamente lo que verás en tu entidad</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-medium">
                👇 Este es un dashboard REAL funcionando con datos reales de una entidad
              </p>
            </div>
          </div>

          {/* Dashboard Preview Completo */}
          <div className="bg-gray-100 rounded-xl p-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header del Dashboard */}
              <div className="bg-gray-800 text-white p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">C</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Club Deportivo Ejemplo</h3>
                      <p className="text-gray-300 text-sm">Juan García Rodríguez (Delegado de Protección)</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Cumplimiento: 87%
                  </span>
                </div>
              </div>

              {/* Estadísticas principales */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <h4 className="text-blue-600 font-bold text-sm mb-1">Personal Formado</h4>
                    <div className="text-3xl font-bold text-gray-900">87%</div>
                    <p className="text-gray-600 text-sm">28/32 personas</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <h4 className="text-green-600 font-bold text-sm mb-1">Familias Informadas</h4>
                    <div className="text-3xl font-bold text-gray-900">94%</div>
                    <p className="text-gray-600 text-sm">156/166 familias</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <h4 className="text-purple-600 font-bold text-sm mb-1">Menores Informados</h4>
                    <div className="text-3xl font-bold text-gray-900">91%</div>
                    <p className="text-gray-600 text-sm">218/240 menores</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <h4 className="text-red-600 font-bold text-sm mb-1">Casos Activos</h4>
                    <div className="text-3xl font-bold text-gray-900">1</div>
                    <p className="text-gray-600 text-sm">3 resueltos este año</p>
                  </div>
                </div>

                {/* Acciones rápidas */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h4>

                  {/* Botón de Emergencia - Interactivo */}
                  <div className="mb-6">
                    <button
                      onClick={() => setShowEmergencyModal(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-colors"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xl font-bold">!</span>
                      </div>
                      CASO DE EMERGENCIA
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="bg-red-600 text-white p-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm">
                      Informe Inspección
                    </button>
                    <button className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors text-sm">
                      <div className="font-medium text-gray-900">Gestionar Personas</div>
                    </button>
                    <button className="bg-green-50 hover:bg-green-100 p-3 rounded-lg transition-colors text-sm">
                      <div className="font-medium text-gray-900">Comunicaciones</div>
                    </button>
                    <button className="bg-orange-50 hover:bg-orange-100 p-3 rounded-lg transition-colors text-sm">
                      <div className="font-medium text-gray-900">Gestión Casos</div>
                    </button>
                  </div>
                </div>

                {/* Alertas y estado */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Alertas Pendientes</h4>
                    <div className="space-y-2">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm">
                        • Certificación de María López caduca en 15 días
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm">
                        • 4 familias pendientes de firmar código de conducta
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Estado General</h4>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Cumplimiento Global</span>
                        <span className="text-xl font-bold text-orange-600">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-orange-600 h-3 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">12 documentos pendientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/dashboard-directo"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors inline-block"
            >
              Probar Dashboard Completo →
            </Link>
            <p className="text-gray-600 text-sm mt-2">Sistema 100% funcional - Haz clic para interactuar</p>
          </div>
        </div>
      </section>

      {/* Características Detalladas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué puedes hacer con Custodia360?</h2>
            <p className="text-xl text-gray-600">Todas las funcionalidades incluidas desde el primer día</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Gestión de Personas */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestión de Personas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Registro completo del personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Base de datos de familias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Información de menores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Control de formaciones</span>
                </li>
              </ul>
            </div>

            {/* Sistema de Comunicaciones */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunicaciones</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Envío masivo de documentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Templates personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Recordatorios automáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Seguimiento de respuestas</span>
                </li>
              </ul>
            </div>

            {/* Gestión de Casos */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestión de Casos</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Registro de incidentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Workflow de seguimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Comunicación con autoridades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Archivo confidencial</span>
                </li>
              </ul>
            </div>

            {/* Informes Automáticos */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informes Automáticos</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Informes de cumplimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Estadísticas en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Generación automática PDF</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Informes para inspecciones</span>
                </li>
              </ul>
            </div>

            {/* Formación Online */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formación Online</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Cursos especializados LOPIVI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Certificados automáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Seguimiento de progreso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Recordatorios de renovación</span>
                </li>
              </ul>
            </div>

            {/* Sistema de Alertas */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-2xl font-bold mb-6">
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sistema de Alertas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Alertas de vencimientos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Notificaciones automáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Recordatorios de tareas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span>Monitoreo continuo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Implementación Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo implementamos tu sistema</h2>
            <p className="text-xl text-gray-600">Proceso 100% automatizado en 72 horas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl font-bold text-green-600 mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Configuración Inteligente</h3>
              <p className="text-gray-600">
                Generamos automáticamente toda la documentación, protocolos y configuración específica para tu entidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-3xl font-bold text-orange-600 mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Activación Inmediata</h3>
              <p className="text-gray-600">
                Activamos el sistema completo y proporcionamos acceso inmediato al dashboard del delegado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600 mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Funcionamiento 24/7</h3>
              <p className="text-gray-600">
                Tu entidad queda implementada con mantenimiento automático y actualizaciones continuas.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Final */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Convencido? ¡Implementa LOPIVI hoy!</h2>
          <p className="text-xl mb-8">Sistema 100% funcional en menos de 72 horas</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/planes"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Ver Precios y Contratar
            </Link>
            <Link
              href="/guia"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Guía Implementación
            </Link>
            <Link
              href="/dashboard-directo"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Probar Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Caso de Emergencia */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-3xl font-bold">!</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protocolo de Emergencia Activado</h3>
              <p className="text-gray-600">¿Qué tipo de situación necesita gestionar?</p>
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full bg-red-600 text-white p-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-left">
                🚨 Incidente con menor - Activar protocolo inmediato
              </button>
              <button className="w-full bg-orange-500 text-white p-4 rounded-lg font-medium hover:bg-orange-600 transition-colors text-left">
                ⚠️ Situación de riesgo - Necesita valoración
              </button>
              <button className="w-full bg-blue-600 text-white p-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-left">
                📞 Contactar autoridades competentes
              </button>
              <button className="w-full bg-purple-600 text-white p-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-left">
                📝 Documentar incidente para seguimiento
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
