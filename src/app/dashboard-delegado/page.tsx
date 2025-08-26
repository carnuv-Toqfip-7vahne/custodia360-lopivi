'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardDelegado() {
  const router = useRouter()
  const [delegadoData, setDelegadoData] = useState<{
    nombre: string
    entidad: string
    tipo: string
    casosActivos: number
    alertas: number
  } | null>(null)
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  useEffect(() => {
    // En una implementación real, obtendrías esto del login
    // Por ahora, usamos datos simulados
    setDelegadoData({
      nombre: 'Juan García Rodríguez',
      entidad: 'Club Deportivo Ejemplo',
      tipo: 'Delegado Principal',
      casosActivos: 1,
      alertas: 2
    })
  }, [])

  const handleLogout = () => {
    // Limpiar sesión
    localStorage.removeItem('userAuth')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Portal del Delegado</h1>
                <p className="text-sm text-gray-600">{delegadoData?.nombre}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{delegadoData?.tipo}</span>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Botón de Emergencia Prominente */}
        <div className="mb-8">
          <button
            onClick={() => setShowEmergencyModal(true)}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-colors"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-600 text-xl font-bold">!</span>
            </div>
            PROTOCOLO DE EMERGENCIA - ACTIVAR
          </button>
        </div>

        {/* Información de la Entidad */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tu Entidad Asignada</h2>

          <div className="flex items-center bg-blue-50 p-6 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              {delegadoData?.entidad?.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{delegadoData?.entidad}</h3>
              <p className="text-gray-600">Entidad bajo tu protección</p>
              <p className="text-sm text-gray-500">201-500 menores • Plan 500 activo</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-2">Estado</div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Protegida
              </span>
            </div>
          </div>
        </div>

        {/* Estadísticas del Delegado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Casos Activos</p>
                <p className="text-2xl font-bold text-orange-600">{delegadoData?.casosActivos}</p>
                <p className="text-xs text-gray-500">En seguimiento</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">📋</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alertas Pendientes</p>
                <p className="text-2xl font-bold text-yellow-600">{delegadoData?.alertas}</p>
                <p className="text-xs text-gray-500">Requieren revisión</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⚠️</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Estado Certificación</p>
                <p className="text-2xl font-bold text-green-600">✓</p>
                <p className="text-xs text-gray-500">Vigente hasta 2025</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">🎓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones del Delegado */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Acciones del Delegado</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-blue-600 text-2xl mb-2">📝</div>
              <div className="font-medium text-gray-900">Informe de Caso</div>
              <div className="text-xs text-gray-500">Crear nuevo informe</div>
            </button>

            <button className="bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-green-600 text-2xl mb-2">👥</div>
              <div className="font-medium text-gray-900">Gestionar Personal</div>
              <div className="text-xs text-gray-500">Revisar y formar</div>
            </button>

            <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-purple-600 text-2xl mb-2">📞</div>
              <div className="font-medium text-gray-900">Contactar Entidad</div>
              <div className="text-xs text-gray-500">Comunicación directa</div>
            </button>

            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-orange-600 text-2xl mb-2">📊</div>
              <div className="font-medium text-gray-900">Ver Estadísticas</div>
              <div className="text-xs text-gray-500">Panel de cumplimiento</div>
            </button>
          </div>
        </div>

        {/* Casos Activos */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Casos en Seguimiento</h2>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Caso #2024-001</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Situación reportada por personal de la entidad
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>Fecha: 15/08/2024</span>
                  <span>Prioridad: Media</span>
                  <span>Seguimiento activo</span>
                </div>
              </div>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                En proceso
              </span>
            </div>
          </div>
        </div>

        {/* Alertas del Sistema */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Alertas del Sistema</h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-yellow-600 text-xl">⚠️</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Formación pendiente
                  </h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    3 miembros del personal necesitan completar la formación LOPIVI.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-blue-600 text-xl">📋</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Revisión trimestral
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Es hora de realizar la revisión trimestral de protocolos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Emergencia */}
        {showEmergencyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-3xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Protocolo de Emergencia Activado</h3>
                <p className="text-gray-600">¿Qué tipo de situación necesitas gestionar?</p>
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

        {/* Nota sobre funcionalidades */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex">
            <span className="text-blue-600 text-xl mr-3">ℹ️</span>
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">Portal en Desarrollo</h3>
              <p className="text-sm text-blue-700">
                Este es un portal básico. En la versión completa tendrás acceso a:
                gestión completa de casos, comunicación con autoridades, formación avanzada,
                reportes detallados y todas las herramientas profesionales necesarias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
