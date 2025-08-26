'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSupabase } from '@/hooks/useSupabase'

export default function DatosEntidadPage() {
  const [formData, setFormData] = useState({
    // Datos de la entidad
    nombreEntidad: '',
    cif: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    provincia: '',
    telefono: '',
    email: '',
    website: '',
    numeroMenores: '',
    tipoEntidad: '',

    // Datos del contratante
    nombreContratante: '',
    apellidosContratante: '',
    dniContratante: '',
    cargoContratante: '',
    telefonoContratante: '',
    emailContratante: '',

    // Credenciales para dashboard
    emailDashboard: '',
    passwordDashboard: '',
    confirmarPassword: '',

    // ¿Es el delegado?
    esDelegado: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validar que las contraseñas coincidan
    if (formData.passwordDashboard !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifique e intente nuevamente.')
      return
    }

    // Validar longitud de contraseña
    if (formData.passwordDashboard.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.')
      return
    }

    // Guardar datos y continuar al siguiente paso
    localStorage.setItem('datosEntidad', JSON.stringify(formData))
    window.location.href = '/contratar/datos-delegado'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
              C
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Contratar Custodia360</h1>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
              <div className="w-16 h-1 bg-orange-600"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">
                2
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">
                3
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Paso 1: Datos de la Entidad y Contratante</h2>
          <p className="text-gray-600">Complete los datos de su entidad y de la persona que realiza la contratación</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Datos de la Entidad */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Datos de la Entidad</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Entidad *
                </label>
                <input
                  type="text"
                  name="nombreEntidad"
                  value={formData.nombreEntidad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CIF/NIF *
                </label>
                <input
                  type="text"
                  name="cif"
                  value={formData.cif}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección *
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código Postal *
                </label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provincia *
                </label>
                <input
                  type="text"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Menores *
                </label>
                <select
                  name="numeroMenores"
                  value={formData.numeroMenores}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                >
                  <option value="">Seleccionar rango</option>
                  <option value="1-50">1-50 menores (Plan 50 - 19€)</option>
                  <option value="51-200">51-200 menores (Plan 200 - 49€)</option>
                  <option value="201-500">201-500 menores (Plan 500 - 105€)</option>
                  <option value="501+">+501 menores (Plan 500+ - 250€)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Entidad *
                </label>
                <select
                  name="tipoEntidad"
                  value={formData.tipoEntidad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="club-deportivo">Club Deportivo</option>
                  <option value="escuela-infantil">Escuela Infantil</option>
                  <option value="centro-educativo">Centro Educativo</option>
                  <option value="campamento">Campamento</option>
                  <option value="asociacion">Asociación</option>
                  <option value="fundacion">Fundación</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
            </div>
          </div>

          {/* Datos del Contratante */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Datos del Contratante</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombreContratante"
                  value={formData.nombreContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellidos *
                </label>
                <input
                  type="text"
                  name="apellidosContratante"
                  value={formData.apellidosContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  DNI/NIE *
                </label>
                <input
                  type="text"
                  name="dniContratante"
                  value={formData.dniContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo en la Entidad *
                </label>
                <input
                  type="text"
                  name="cargoContratante"
                  value={formData.cargoContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Ej: Presidente, Director, Responsable..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefonoContratante"
                  value={formData.telefonoContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="emailContratante"
                  value={formData.emailContratante}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
              </div>
            </div>

            {/* Checkbox para delegado */}
            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="esDelegado"
                  checked={formData.esDelegado}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-600 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  <span className="font-medium">El contratante será también el Delegado de Protección</span>
                  <br />
                  <span className="text-gray-500">
                    Si marca esta opción, los datos del contratante se utilizarán también como Delegado de Protección en el siguiente paso.
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Credenciales para Dashboard */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Credenciales de Acceso al Dashboard</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>🔐 Acceso Seguro:</strong> Estas credenciales le permitirán acceder al dashboard de gestión de Custodia360 para monitorear el cumplimiento LOPIVI de su entidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email para Dashboard *
                </label>
                <input
                  type="email"
                  name="emailDashboard"
                  value={formData.emailDashboard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="dashboard@mientidad.com"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Email para acceder al panel de gestión</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña *
                </label>
                <input
                  type="password"
                  name="passwordDashboard"
                  value={formData.passwordDashboard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Mínimo 8 caracteres"
                  minLength={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres, incluya números y letras</p>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar Contraseña *
                </label>
                <input
                  type="password"
                  name="confirmarPassword"
                  value={formData.confirmarPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Repita la contraseña"
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <Link
              href="/planes"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Volver a Planes
            </Link>

            <button
              type="submit"
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              Continuar →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
