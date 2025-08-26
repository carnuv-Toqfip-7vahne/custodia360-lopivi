'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PagoPage() {
  const [formData, setFormData] = useState({
    numeroTarjeta: '',
    nombreTitular: '',
    fechaExpiracion: '',
    cvv: '',
    tipoTarjeta: '',
    direccionFacturacion: '',
    ciudadFacturacion: '',
    codigoPostalFacturacion: '',
    paisFacturacion: 'España',
    terminos: false,
    comunicacionesComerciales: false,
    kitComunicacion: false
  })

  const [planSeleccionado, setPlanSeleccionado] = useState<{
    nombre: string;
    precio: number;
    descripcion: string;
  } | null>(null)

  const [delegadoSuplente, setDelegadoSuplente] = useState(false)

  // Precios
  const PRECIO_KIT = 30
  const PRECIO_SUPLENTE = 10

  useEffect(() => {
    // Cargar datos de los pasos anteriores y determinar plan
    const entidad = localStorage.getItem('datosEntidad')
    const delegado = localStorage.getItem('datosDelegado')

    if (entidad) {
      const parsedEntidad = JSON.parse(entidad)
      const planes = {
        '1-50': { nombre: 'Plan 50', precio: 19, descripcion: '1-50 menores' },
        '51-200': { nombre: 'Plan 200', precio: 49, descripcion: '51-200 menores' },
        '201-500': { nombre: 'Plan 500', precio: 105, descripcion: '201-500 menores' },
        '501+': { nombre: 'Plan 500+', precio: 250, descripcion: '+501 menores' }
      }
      setPlanSeleccionado(planes[parsedEntidad.numeroMenores as keyof typeof planes])
    }

    if (delegado) {
      const parsedDelegado = JSON.parse(delegado)
      setDelegadoSuplente(parsedDelegado.incluirSuplente || false)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\s/g, '').replace(/\D/g, '')
    const formatted = numbers.replace(/(.{4})/g, '$1 ').trim()
    return formatted.substring(0, 19) // Límite de 16 dígitos + 3 espacios
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData(prev => ({ ...prev, numeroTarjeta: formatted }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración con el procesador de pagos
    alert('¡Contratación completada! Recibirá un email con los detalles.')
    window.location.href = '/dashboard-directo'
  }

  const precioPlan = planSeleccionado?.precio || 0
  const precioKit = formData.kitComunicacion ? PRECIO_KIT : 0
  const precioSuplente = delegadoSuplente ? PRECIO_SUPLENTE : 0
  const subtotal = precioPlan + precioKit + precioSuplente
  const iva = Math.round(subtotal * 0.21 * 100) / 100
  const total = subtotal + iva

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Paso 3: Pago y Finalización</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-16 h-1 bg-orange-600"></div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-16 h-1 bg-orange-600"></div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
            </div>
          </div>
        </div>

        {/* Sección Kit de Comunicación */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Añadir Kit de Comunicación (Opcional)</h3>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="kitComunicacion"
                name="kitComunicacion"
                checked={formData.kitComunicacion}
                onChange={handleInputChange}
                className="mt-1 mr-3 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <div className="flex-1">
                <label htmlFor="kitComunicacion" className="cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lg font-bold text-gray-900">Kit de Comunicación</span>
                    <span className="text-lg font-bold text-teal-600">30€ + IVA</span>
                  </div>
                  <p className="text-gray-600 mb-3">Material informativo LOPIVI personalizado para tu entidad</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>• Carteles informativos LOPIVI</li>
                      <li>• Comunicados para familias</li>
                      <li>• Templates personalizados</li>
                      <li>• Material didáctico básico</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Guía de implementación</li>
                      <li>• Documentos legales básicos</li>
                      <li>• Soporte de instalación</li>
                      <li>• Entrega en 72 horas</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {formData.kitComunicacion && (
            <div className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-sm text-teal-800">
                <span className="font-bold">Kit de Comunicación añadido</span> - Se incluirá en tu primer pago junto con el plan seleccionado.
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del Pedido</h3>

              {planSeleccionado && (
                <div className="space-y-4 mb-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{planSeleccionado.nombre}</span>
                      <span className="font-bold text-gray-900">{planSeleccionado.precio}€</span>
                    </div>
                    <p className="text-sm text-gray-600">{planSeleccionado.descripcion}</p>
                    <p className="text-xs text-gray-500 mt-1">Pago inicial + {planSeleccionado.precio}€ a los 6 meses</p>
                  </div>

                  {formData.kitComunicacion && (
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Kit de Comunicación</span>
                        <span className="font-bold text-gray-900">{PRECIO_KIT}€</span>
                      </div>
                      <p className="text-sm text-gray-600">Material informativo LOPIVI personalizado</p>
                      <p className="text-xs text-gray-500 mt-1">Carteles, comunicados y templates</p>
                    </div>
                  )}

                  {delegadoSuplente && (
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">🛡️ Delegado Suplente</span>
                        <span className="font-bold text-gray-900">{PRECIO_SUPLENTE}€</span>
                      </div>
                      <p className="text-sm text-gray-600">Protección 24/7 durante ausencias del principal</p>
                      <p className="text-xs text-gray-500 mt-1">Misma formación y certificación completa</p>
                    </div>
                  )}

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{subtotal}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IVA (21%):</span>
                      <span>{iva}€</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>{total}€</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500 space-y-1">
                <p>• Implementación completa en 72 horas</p>
                <p>• Delegado de protección certificado</p>
                <p>• Plan de protección personalizado</p>
                <p>• Formación del personal incluida</p>
                <p>• Mantenimiento y actualizaciones</p>
              </div>
            </div>
          </div>

          {/* Formulario de Pago */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              {/* Datos de la Tarjeta */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Datos de la Tarjeta</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Tarjeta *
                    </label>
                    <input
                      type="text"
                      name="numeroTarjeta"
                      value={formData.numeroTarjeta}
                      onChange={handleCardNumberChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del Titular *
                    </label>
                    <input
                      type="text"
                      name="nombreTitular"
                      value={formData.nombreTitular}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="Como aparece en la tarjeta"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Expiración *
                    </label>
                    <input
                      type="text"
                      name="fechaExpiracion"
                      value={formData.fechaExpiracion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="MM/AA"
                      maxLength={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="123"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dirección de Facturación */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">Dirección de Facturación</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      name="direccionFacturacion"
                      value={formData.direccionFacturacion}
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
                      name="ciudadFacturacion"
                      value={formData.ciudadFacturacion}
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
                      name="codigoPostalFacturacion"
                      value={formData.codigoPostalFacturacion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      País *
                    </label>
                    <select
                      name="paisFacturacion"
                      value={formData.paisFacturacion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                    >
                      <option value="España">España</option>
                      <option value="Francia">Francia</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Italia">Italia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className="space-y-4 mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="terminos"
                    checked={formData.terminos}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-600 border-gray-300 rounded"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Acepto los términos y condiciones *</span><br />
                    <span className="text-gray-500">
                      He leído y acepto los <a href="#" className="text-orange-600 hover:underline">términos y condiciones</a> y la <a href="#" className="text-orange-600 hover:underline">política de privacidad</a>.
                    </span>
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="comunicacionesComerciales"
                    checked={formData.comunicacionesComerciales}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 h-4 w-4 text-orange-600 focus:ring-orange-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Comunicaciones comerciales</span><br />
                    <span className="text-gray-500">
                      Acepto recibir comunicaciones comerciales sobre productos y servicios de Custodia360.
                    </span>
                  </span>
                </label>
              </div>

              {/* Información de Seguridad */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-xs mr-2">
                    ✓
                  </div>
                  <span className="font-medium text-green-800">Pago 100% Seguro</span>
                </div>
                <p className="text-sm text-green-700">
                  Sus datos están protegidos con cifrado SSL de 256 bits. No almacenamos información de tarjetas de crédito.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <Link
                  href="/contratar/datos-delegado"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  ← Volver
                </Link>

                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  Completar Pago ({total}€)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
