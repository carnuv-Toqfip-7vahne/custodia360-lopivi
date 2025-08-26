'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'

export default function DatosDelegadoPage() {
  const router = useRouter()
  const { crearContratacion, loading, error } = useSupabase()
  const [entidadData, setEntidadData] = useState<any>(null)
  const [formData, setFormData] = useState({
    // Delegado Principal
    nombreDelegado: '',
    apellidosDelegado: '',
    dniDelegado: '',
    telefonoDelegado: '',
    emailDelegado: '',
    passwordDelegado: '',
    confirmarPasswordDelegado: '',
    experiencia: '',
    disponibilidad: '',
    certificadoPenales: false,
    autorizacionDatos: false,

    // Delegado Suplente (Opcional)
    incluirSuplente: false,
    nombreSuplente: '',
    apellidosSuplente: '',
    dniSuplente: '',
    telefonoSuplente: '',
    emailSuplente: '',
    passwordSuplente: '',
    confirmarPasswordSuplente: '',
    experienciaSuplente: '',
    disponibilidadSuplente: '',
    certificadoPenalesSuplente: false,
    autorizacionDatosSuplente: false
  })

  // Cargar datos de la entidad del localStorage
  useEffect(() => {
    const datosEntidad = localStorage.getItem('datosEntidad')
    if (datosEntidad) {
      setEntidadData(JSON.parse(datosEntidad))
    } else {
      // Si no hay datos de entidad, redirigir al primer paso
      router.push('/contratar/datos-entidad')
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!entidadData) {
      alert('Error: No se encontraron los datos de la entidad. Por favor, comience desde el primer paso.')
      router.push('/contratar/datos-entidad')
      return
    }

    // Validar contraseña del delegado principal
    if (formData.passwordDelegado !== formData.confirmarPasswordDelegado) {
      alert('Las contraseñas del delegado principal no coinciden. Por favor, verifique e intente nuevamente.')
      return
    }

    if (formData.passwordDelegado.length < 8) {
      alert('La contraseña del delegado principal debe tener al menos 8 caracteres.')
      return
    }

    // Validar contraseña del suplente si está incluido
    if (formData.incluirSuplente) {
      if (formData.passwordSuplente !== formData.confirmarPasswordSuplente) {
        alert('Las contraseñas del delegado suplente no coinciden. Por favor, verifique e intente nuevamente.')
        return
      }

      if (formData.passwordSuplente.length < 8) {
        alert('La contraseña del delegado suplente debe tener al menos 8 caracteres.')
        return
      }
    }

    // Preparar datos completos para Supabase
    const contratacionCompleta = {
      entidad: entidadData,
      contratante: {
        nombreContratante: entidadData.nombreContratante,
        apellidosContratante: entidadData.apellidosContratante,
        dniContratante: entidadData.dniContratante,
        cargoContratante: entidadData.cargoContratante,
        telefonoContratante: entidadData.telefonoContratante,
        emailContratante: entidadData.emailContratante,
        esDelegado: entidadData.esDelegado
      },
      delegado: formData
    }

    // Crear contratación en Supabase
    const resultado = await crearContratacion(contratacionCompleta)

    if (resultado.success) {
      // Limpiar localStorage
      localStorage.removeItem('datosEntidad')
      localStorage.removeItem('datosDelegado')

      // Guardar ID de entidad para la página de pago
      localStorage.setItem('entidadCreada', JSON.stringify({
        id: resultado.entidad.id,
        nombre: resultado.entidad.nombre,
        plan: resultado.entidad.plan,
        precio: resultado.entidad.precio_mensual,
        incluirSuplente: formData.incluirSuplente
      }))

      // Redirigir a página de pago
      router.push('/contratar/pago')
    } else {
      alert(`Error al crear la contratación: ${resultado.error}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Paso 2: Datos del Delegado de Protección</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-16 h-1 bg-orange-600"></div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">3</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Delegado Principal */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">Delegado Principal</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                <input
                  type="text"
                  name="nombreDelegado"
                  value={formData.nombreDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos *</label>
                <input
                  type="text"
                  name="apellidosDelegado"
                  value={formData.apellidosDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">DNI/NIE *</label>
                <input
                  type="text"
                  name="dniDelegado"
                  value={formData.dniDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input
                  type="tel"
                  name="telefonoDelegado"
                  value={formData.telefonoDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="emailDelegado"
                  value={formData.emailDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña de Acceso *</label>
                <input
                  type="password"
                  name="passwordDelegado"
                  value={formData.passwordDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Mínimo 8 caracteres"
                  minLength={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Para acceder al portal del delegado</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña *</label>
                <input
                  type="password"
                  name="confirmarPasswordDelegado"
                  value={formData.confirmarPasswordDelegado}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Repita la contraseña"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Experiencia con menores</label>
              <textarea
                name="experiencia"
                value={formData.experiencia}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Describa su experiencia trabajando con menores..."
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilidad *</label>
              <select
                name="disponibilidad"
                value={formData.disponibilidad}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              >
                <option value="">Seleccionar disponibilidad</option>
                <option value="completa">Disponibilidad completa (24/7)</option>
                <option value="horario-laboral">Horario laboral</option>
                <option value="horario-actividades">Solo durante actividades</option>
              </select>
            </div>

            <div className="space-y-4 mb-8">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="certificadoPenales"
                  checked={formData.certificadoPenales}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-600 border-gray-300 rounded"
                  required
                />
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Certificado de Antecedentes Penales *</span><br />
                  <span className="text-gray-500">Proporcionaré certificado actualizado (menos de 3 meses)</span>
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="autorizacionDatos"
                  checked={formData.autorizacionDatos}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-600 border-gray-300 rounded"
                  required
                />
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Autorización de Datos *</span><br />
                  <span className="text-gray-500">Acepto el tratamiento de datos para la gestión del servicio LOPIVI</span>
                </span>
              </label>
            </div>
          </div>

          {/* Opción Delegado Suplente */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="incluirSuplente"
                  name="incluirSuplente"
                  checked={formData.incluirSuplente}
                  onChange={handleInputChange}
                  className="mt-1 mr-4 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div className="flex-1">
                  <label htmlFor="incluirSuplente" className="cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-lg font-bold text-gray-900">🛡️ Incluir Delegado Suplente</span>
                      <span className="text-lg font-bold text-blue-600">+10€ + IVA</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      <span className="font-bold text-blue-800">Protección 24/7/365 para tu entidad</span> -
                      El delegado suplente cubre al principal en sus ausencias
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">✅ Qué cubre:</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• Vacaciones del delegado principal</li>
                          <li>• Bajas por enfermedad</li>
                          <li>• Emergencias familiares</li>
                          <li>• Ausencias imprevistas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">🎯 Beneficios:</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• Cumplimiento LOPIVI garantizado</li>
                          <li>• Misma formación y certificación</li>
                          <li>• Acceso completo al dashboard</li>
                          <li>• Tranquilidad total para ti</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                      <p className="text-red-800 text-sm">
                        <span className="font-bold">⚠️ Sin suplente:</span> RIESGO LEGAL durante ausencias del delegado principal.
                        Tu entidad podría estar incumpliendo la LOPIVI cuando más lo necesita.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Formulario Delegado Suplente */}
            {formData.incluirSuplente && (
              <div className="mt-8 p-6 border border-blue-200 rounded-xl bg-blue-50">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Datos del Delegado Suplente</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombreSuplente"
                      value={formData.nombreSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required={formData.incluirSuplente}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos *</label>
                    <input
                      type="text"
                      name="apellidosSuplente"
                      value={formData.apellidosSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required={formData.incluirSuplente}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">DNI/NIE *</label>
                    <input
                      type="text"
                      name="dniSuplente"
                      value={formData.dniSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required={formData.incluirSuplente}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefonoSuplente"
                      value={formData.telefonoSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required={formData.incluirSuplente}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="emailSuplente"
                      value={formData.emailSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required={formData.incluirSuplente}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña de Acceso *</label>
                    <input
                      type="password"
                      name="passwordSuplente"
                      value={formData.passwordSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Mínimo 8 caracteres"
                      minLength={8}
                      required={formData.incluirSuplente}
                    />
                    <p className="text-xs text-gray-500 mt-1">Para acceder al portal del delegado</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña *</label>
                    <input
                      type="password"
                      name="confirmarPasswordSuplente"
                      value={formData.confirmarPasswordSuplente}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Repita la contraseña"
                      required={formData.incluirSuplente}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experiencia con menores</label>
                  <textarea
                    name="experienciaSuplente"
                    value={formData.experienciaSuplente}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Describa su experiencia trabajando con menores..."
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilidad *</label>
                  <select
                    name="disponibilidadSuplente"
                    value={formData.disponibilidadSuplente}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required={formData.incluirSuplente}
                  >
                    <option value="">Seleccionar disponibilidad</option>
                    <option value="completa">Disponibilidad completa (24/7)</option>
                    <option value="horario-laboral">Horario laboral</option>
                    <option value="horario-actividades">Solo durante actividades</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="certificadoPenalesSuplente"
                      checked={formData.certificadoPenalesSuplente}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                      required={formData.incluirSuplente}
                    />
                    <span className="text-sm text-gray-700">
                      <span className="font-medium">Certificado de Antecedentes Penales *</span><br />
                      <span className="text-gray-500">Proporcionaré certificado actualizado (menos de 3 meses)</span>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="autorizacionDatosSuplente"
                      checked={formData.autorizacionDatosSuplente}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                      required={formData.incluirSuplente}
                    />
                    <span className="text-sm text-gray-700">
                      <span className="font-medium">Autorización de Datos *</span><br />
                      <span className="text-gray-500">Acepto el tratamiento de datos para la gestión del servicio LOPIVI</span>
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-red-600 text-xl">❌</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error al crear la contratación</h3>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Link
              href="/contratar/datos-entidad"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Volver
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creando contratación...
                </>
              ) : (
                'Continuar al Pago →'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
