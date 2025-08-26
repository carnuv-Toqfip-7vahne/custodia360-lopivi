'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'

export default function HomePage() {
  const router = useRouter()
  const { login, loading, error } = useSupabase()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Primero intentar como delegado
    let resultado = await login(loginData.email, loginData.password, 'delegado')

    if (resultado.success) {
      router.push('/dashboard-delegado')
      return
    }

    // Si no es delegado, intentar como entidad
    resultado = await login(loginData.email, loginData.password, 'entidad')

    if (resultado.success) {
      router.push('/dashboard-entidad')
      return
    }

    // Si ninguno funcionó
    alert('Credenciales incorrectas. Verifique su email y contraseña.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">

        {/* Logo y Nombre */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">Custodia360</h1>
            </div>
          </div>
        </div>

        {/* Sección para No Clientes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">¿No eres aún cliente?</h2>
            <p className="text-gray-600 mb-6">Descubre cómo Custodia360 puede ayudar a tu entidad</p>

            <Link
              href="/sitio"
              className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors inline-block"
            >
              Ver Acceso a Custodia360
            </Link>
          </div>
        </div>

        {/* Sección Login para Clientes Existentes */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Acceso para Clientes</h2>
            <p className="text-gray-600 text-sm">Delegados, Suplentes y Directivos</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tu contraseña"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center">
                  <span className="text-red-500 text-sm mr-2">❌</span>
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              </div>
            )}

            {/* Botón Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Accediendo...
                </>
              ) : (
                'Acceder al Portal'
              )}
            </button>
          </form>

          {/* Datos de Prueba */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">🔐 Credenciales de Prueba:</h4>
              <div className="text-xs text-blue-700 space-y-1">
                <div><strong>Directivo:</strong> admin@clubejemplo.com / password123</div>
                <div><strong>Delegado:</strong> juan.garcia@clubejemplo.com / delegado123</div>
                <p className="text-xs text-blue-600 mt-2">El sistema detecta automáticamente el tipo de usuario</p>
              </div>
            </div>
          </div>

          {/* Enlaces Adicionales */}
          <div className="mt-6 text-center space-y-2">
            <div className="text-sm text-gray-500">
              ¿Problemas para acceder?
              <Link href="/contacto" className="text-orange-600 hover:text-orange-700 ml-1">
                Contacta con soporte
              </Link>
            </div>

            <div className="text-sm text-gray-500">
              <Link href="/admin/login" className="text-gray-600 hover:text-gray-700">
                Acceso Administrativo
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 Sportsmotherland, S.L. - Custodia360</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacidad" className="hover:text-gray-700">Privacidad</Link>
            <Link href="/terminos" className="hover:text-gray-700">Términos</Link>
            <Link href="/contacto" className="hover:text-gray-700">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
