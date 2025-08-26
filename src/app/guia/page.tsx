import Link from 'next/link'

export default function GuiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guía <span className="text-orange-600">LOPIVI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Todo lo que necesitas saber para implementar y cumplir la LOPIVI en tu entidad
          </p>
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold">
            Guía completa paso a paso
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso Completo LOPIVI</h2>
            <p className="text-xl text-gray-600">Sigue estos pasos para implementar la LOPIVI correctamente</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Paso 1 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Contrata el Servicio</h3>
              <p className="text-gray-600 text-sm mb-4">Selecciona tu plan según el número de menores en tu entidad</p>
              <Link href="/planes" className="text-blue-600 font-bold hover:underline">
                Ver Planes →
              </Link>
            </div>

            {/* Paso 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Designa el Delegado</h3>
              <p className="text-gray-600 text-sm mb-4">Elige quién será el delegado principal (y suplente si quieres)</p>
              <p className="text-green-600 font-bold text-sm">Incluido en el servicio</p>
            </div>

            {/* Paso 3 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Certifica el Delegado</h3>
              <p className="text-gray-600 text-sm mb-4">El delegado completa la formación especializada</p>
              <Link href="/formacion-delegado" className="text-purple-600 font-bold hover:underline">
                Ver Formación →
              </Link>
            </div>

            {/* Paso 4 */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Accede al Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">Una vez certificado, gestiona todo desde el panel de control</p>
              <Link href="/dashboard-directo" className="text-orange-600 font-bold hover:underline">
                Ver Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que Obtienes */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué Obtienes Exactamente?</h2>
            <p className="text-xl text-gray-600">Todos los elementos necesarios para el cumplimiento LOPIVI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Documentación Completa</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Plan de Protección personalizado</li>
                <li>• Protocolos de actuación específicos</li>
                <li>• Código de conducta profesional</li>
                <li>• Documentación legal requerida</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Delegado Certificado</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Formación especializada completa</li>
                <li>• Certificación acreditada</li>
                <li>• Acceso al dashboard de gestión</li>
                <li>• Soporte técnico continuo</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Formación Personal</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Curso online para todo el personal</li>
                <li>• Certificados individuales</li>
                <li>• Material didáctico incluido</li>
                <li>• Seguimiento y recordatorios</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sistema Digital</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dashboard del delegado</li>
                <li>• Gestión de casos y documentos</li>
                <li>• Informes automáticos</li>
                <li>• Comunicación con familias</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mantenimiento</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Actualizaciones automáticas</li>
                <li>• Renovación de documentación</li>
                <li>• Soporte técnico</li>
                <li>• Monitoreo continuo</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Emergencias</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Protocolo de emergencia 24/7</li>
                <li>• Contactos de autoridades</li>
                <li>• Guía de actuación inmediata</li>
                <li>• Soporte en casos críticos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roles y Responsabilidades */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roles y Responsabilidades</h2>
            <p className="text-xl text-gray-600 mb-2">Cada persona tiene un papel fundamental en la protección de los menores.</p>
            <p className="text-gray-600">Te explicamos qué debe hacer cada rol.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Delegado de Protección */}
            <div className="bg-white rounded-xl border border-blue-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3">
                  D
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Delegado de Protección</h3>
                  <p className="text-blue-600 text-sm font-medium">Figura central del sistema LOPIVI</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Recibir comunicaciones sobre situaciones de violencia</li>
                <li>• Evaluar la gravedad de las situaciones reportadas</li>
                <li>• Adoptar las medidas de protección necesarias</li>
                <li>• Comunicar a las autoridades cuando sea necesario</li>
                <li>• Mantener registros confidenciales y seguros</li>
                <li>• Formar al personal en protocolos de actuación</li>
              </ul>
            </div>

            {/* Personal de la Entidad */}
            <div className="bg-white rounded-xl border border-green-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white mr-3">
                  P
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Personal de la Entidad</h3>
                  <p className="text-green-600 text-sm font-medium">Todos los que trabajan con menores</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Conocer y aplicar los protocolos de protección</li>
                <li>• Reportar inmediatamente cualquier situación sospechosa</li>
                <li>• Mantener un entorno seguro para los menores</li>
                <li>• Participar en las formaciones obligatorias</li>
                <li>• Colaborar con las investigaciones internas</li>
                <li>• Respetar la confidencialidad de los casos</li>
              </ul>
            </div>

            {/* Familias y Menores */}
            <div className="bg-white rounded-xl border border-orange-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white mr-3">
                  F
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Familias y Menores</h3>
                  <p className="text-orange-600 text-sm font-medium">Participantes activos en la protección</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reportar cualquier situación preocupante</li>
                <li>• Conocer sus derechos y los de sus hijos</li>
                <li>• Colaborar con las medidas de protección</li>
                <li>• Mantener comunicación fluida con la entidad</li>
              </ul>
            </div>
          </div>

          {/* Nota de Responsabilidad Compartida */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-3">!</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Importante: Responsabilidad Compartida</h4>
                <p className="text-gray-700 mb-2">
                  La protección de los menores es responsabilidad de todos. Cada rol tiene funciones específicas, pero todos debemos
                  trabajar juntos para crear un entorno seguro. La LOPIVI establece que{' '}
                  <span className="font-bold">cualquier adulto que observe una situación de riesgo tiene la obligación de actuar</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma de Implementación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cronograma de Implementación</h2>
            <p className="text-xl text-gray-600">Plazos y tiempos para cada fase del proceso</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Día 1: Contratación y Configuración</h3>
                  <p className="text-gray-600">Configuración automática del sistema y documentación personalizada</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">2 horas</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Días 1-3: Formación del Delegado</h3>
                  <p className="text-gray-600">Campus virtual especializado por sectores (6h 30min de contenido)</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">3 días</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Día 3: Certificación y Acceso</h3>
                  <p className="text-gray-600">Test de certificación y activación del dashboard completo</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">1 hora</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Días 4-30: Formación del Personal</h3>
                  <p className="text-gray-600">Todo el personal completa su formación LOPIVI</p>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">30 días</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-100 border border-green-300 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">Implementada LOPIVI</h3>
            <p className="text-green-700">
              Tu entidad tendrá implementada la LOPIVI y el Plan de Protección en máximo 72 horas
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Específicas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes de Implementación</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">¿Qué pasa si el delegado designado no puede completar la formación?</h3>
              <p className="text-gray-600">
                Puedes cambiar el delegado en cualquier momento. El nuevo delegado deberá completar la formación
                antes de acceder al dashboard. Si tienes delegado suplente, puede asumir temporalmente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">¿Cómo formo a todo mi personal?</h3>
              <p className="text-gray-600">
                Una vez tu delegado esté certificado, puede gestionar la formación del personal desde el dashboard.
                El sistema envía automáticamente invitaciones y hace seguimiento del progreso.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">¿Qué hago en caso de emergencia antes de estar certificado?</h3>
              <p className="text-gray-600">
                Desde el primer día tienes acceso al protocolo de emergencia con todos los teléfonos de contacto.
                En casos urgentes: 112 (emergencias), 091 (policía), 116111 (teléfono del menor).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">¿Puedo añadir el delegado suplente después?</h3>
              <p className="text-gray-600">
                Sí, puedes añadir un delegado suplente en cualquier momento por +10€ + IVA.
                Es altamente recomendable para garantizar cobertura durante vacaciones y ausencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Implementar LOPIVI?</h2>
          <p className="text-xl mb-8">Sigue esta guía y tendrás tu entidad implementada en 72 horas</p>

          <div className="flex justify-center gap-4">
            <Link
              href="/planes"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Comenzar Implementación
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              ¿Tienes Dudas?
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
