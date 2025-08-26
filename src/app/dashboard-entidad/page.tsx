'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardEntidad() {
  const router = useRouter()
  const [entidadData, setEntidadData] = useState<{
    nombre: string
    plan: string
    cumplimiento: number
    alertas: number
  } | null>(null)

  useEffect(() => {
    // En una implementación real, obtendrías esto del login
    // Por ahora, usamos datos simulados
    setEntidadData({
      nombre: 'Club Deportivo Ejemplo',
      plan: 'Plan 500',
      cumplimiento: 87.5,
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
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Panel de Gestión</h1>
                <p className="text-sm text-gray-600">{entidadData?.nombre}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Directivo/Responsable</span>
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
        {/* Estadísticas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Plan Actual</p>
                <p className="text-2xl font-bold text-gray-900">{entidadData?.plan}</p>
                <p className="text-xs text-gray-500">Servicio activo</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">📋</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cumplimiento LOPIVI</p>
                <p className="text-2xl font-bold text-green-600">{entidadData?.cumplimiento}%</p>
                <p className="text-xs text-gray-500">Estado excelente</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alertas Pendientes</p>
                <p className="text-2xl font-bold text-orange-600">{entidadData?.alertas}</p>
                <p className="text-xs text-gray-500">Requieren atención</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">⚠️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones Rápidas */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Acciones Rápidas</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-blue-600 text-2xl mb-2">👥</div>
              <div className="font-medium text-gray-900">Gestionar Personal</div>
              <div className="text-xs text-gray-500">Ver y editar personal</div>
            </button>

            <button className="bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-green-600 text-2xl mb-2">📊</div>
              <div className="font-medium text-gray-900">Ver Informes</div>
              <div className="text-xs text-gray-500">Reportes de cumplimiento</div>
            </button>

            <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-purple-600 text-2xl mb-2">📞</div>
              <div className="font-medium text-gray-900">Contactar Delegado</div>
              <div className="text-xs text-gray-500">Comunicación directa</div>
            </button>

            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg transition-colors text-center">
              <div className="text-orange-600 text-2xl mb-2">⚙️</div>
              <div className="font-medium text-gray-900">Configuración</div>
              <div className="text-xs text-gray-500">Ajustes de la entidad</div>
            </button>
          </div>
        </div>

        {/* Información del Delegado */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tu Delegado de Protección</h2>

          <div className="flex items-center bg-blue-50 p-6 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              JG
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Juan García Rodríguez</h3>
              <p className="text-gray-600">Delegado Principal</p>
              <p className="text-sm text-gray-500">Certificado LOPIVI • Disponible 24/7</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-2">Estado</div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Activo
              </span>
            </div>
          </div>
        </div>

        {/* Alertas y Notificaciones */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Alertas y Notificaciones</h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-yellow-600 text-xl">⚠️</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Certificación pendiente
                  </h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    La certificación de María López caduca en 15 días. Es necesario renovarla.
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
                    Documentos pendientes
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    4 familias pendientes de firmar el código de conducta actualizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-green-600 text-xl">✅</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Sistema actualizado
                  </h3>
                  <p className="text-sm text-green-700 mt-1">
                    Todos los protocolos han sido actualizados según la última normativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota sobre funcionalidades */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex">
            <span className="text-blue-600 text-xl mr-3">ℹ️</span>
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">Panel en Desarrollo</h3>
              <p className="text-sm text-blue-700">
                Este es un panel básico. En la versión completa tendrás acceso a:
                gestión completa de personal, informes detallados, comunicación directa con delegados,
                configuración avanzada y mucho más.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
