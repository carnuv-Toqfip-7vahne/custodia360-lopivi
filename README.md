# 🛡️ Custodia360 - Sistema LOPIVI Automatizado

> **Primera plataforma de España** que implementa automáticamente la Ley Orgánica de Protección Integral a la Infancia y la Adolescencia frente a la Violencia (LOPIVI)

## 🎯 **¿Qué es Custodia360?**

Custodia360 es un **sistema automatizado** que implementa toda la normativa LOPIVI en **72 horas**, garantizando el cumplimiento legal completo para entidades que trabajan con menores.

### ⚡ **Implementación en 72 horas:**
- **Día 1:** Configuración automática y asignación de delegado
- **Días 1-3:** Formación especializada del delegado de protección
- **Día 3:** Certificación y sistema 100% operativo

## 🏗️ **Arquitectura Técnica**

### **Frontend (Next.js 15)**
- ⚡ **24 páginas estáticas** optimizadas
- 🎨 **Tailwind CSS** para diseño responsive
- 🔧 **TypeScript** para type safety
- 🚀 **Bun** como runtime y package manager

### **Backend (Supabase)**
- 🗄️ **PostgreSQL** database con 8 tablas
- 🔐 **Row Level Security (RLS)** implementado
- 📊 **APIs automáticas** para CRUD operations
- 🔄 **Real-time subscriptions** para dashboards

### **Sistema de Autenticación**
- 🤖 **Detección automática** de tipo de usuario
- 👥 **Roles:** Directivos, Delegados, Suplentes, Admin
- 🔒 **Login sin selector** - UX optimizada

## 📊 **Funcionalidades Principales**

### ✅ **Portal Corporativo Completo**
- **Homepage/Login** - Portal de acceso inteligente
- **Sitio informativo** - Información completa LOPIVI
- **Planes y precios** - 4 planes según número de menores
- **Demo interactiva** - Con protocolo de emergencia funcional
- **Guía LOPIVI** - Primera guía paso a paso en España

### ✅ **Sistema de Contratación Real**
- **Formularios dinámicos** - Datos entidad y delegado
- **Base de datos PostgreSQL** - Almacenamiento persistente
- **Validación completa** - Contraseñas y campos obligatorios
- **Delegado suplente opcional** - +10€ cobertura 24/7

### ✅ **Dashboards Operativos**
- **Dashboard Admin** - Gestión completa con estadísticas reales
- **Dashboard Entidad** - Panel para directivos y responsables
- **Dashboard Delegado** - Herramientas para delegados de protección
- **Datos en tiempo real** - Conexión directa con Supabase

### ✅ **Chatbot IA Especializado**
- **Respuestas automáticas** - FAQ inteligente sobre LOPIVI
- **Preguntas sugeridas** - UX optimizada para consultas frecuentes
- **Información completa** - Precios, plazos, sanciones, procesos

## 🛠️ **Instalación y Configuración**

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/carnuv-Toqfip-7vahne/custodia360-lopivi.git
cd custodia360-lopivi
```

### **2. Instalar Dependencias**
```bash
bun install
```

### **3. Configurar Variables de Entorno**
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **4. Configurar Base de Datos Supabase**
1. Crear proyecto en [Supabase](https://supabase.com)
2. Ir a **SQL Editor** → **Nueva consulta**
3. Copiar y ejecutar contenido de `supabase-setup.sql`
4. Verificar que se crearon 8 tablas correctamente

### **5. Ejecutar en Desarrollo**
```bash
bun run dev
```

La aplicación estará disponible en `http://localhost:3000`

### **6. Build para Producción**
```bash
bun run build
```

## 🗃️ **Estructura de la Base de Datos**

```sql
📊 TABLAS OPERATIVAS:
├─ entidades          # Empresas que contratan
├─ contratantes       # Personas responsables
├─ delegados          # Principal + suplente
├─ cumplimiento       # Estado LOPIVI en tiempo real
├─ documentos         # PDFs y certificados
├─ usuarios_auth      # Sistema de autenticación
├─ pagos              # Historial de facturación
└─ logs_actividad     # Auditoría completa
```

## 🚀 **Deployment**

### **Netlify (Recomendado)**
```bash
# Conectar repositorio GitHub
# Configurar build settings:
# Build Command: bun run build
# Publish Directory: out
```

### **Vercel**
```bash
# Conectar repositorio GitHub automáticamente
# Variables de entorno: configurar Supabase
```

### **Hosting Manual**
```bash
bun run build
# Subir contenido de carpeta 'out' a tu hosting
```

## 👥 **Credenciales de Prueba**

### **Sistema de Login (Homepage)**
- **Directivo:** `admin@clubejemplo.com` / `password123`
- **Delegado:** `juan.garcia@clubejemplo.com` / `delegado123`

### **Dashboard Administrativo**
- **Admin:** `admin@custodia360.es` / `custodia2024`

## 📱 **Características Destacadas**

### 🎯 **Cumplimiento LOPIVI 100%**
- ✅ Delegado de protección certificado
- ✅ Plan de protección personalizado
- ✅ Protocolos de actuación específicos
- ✅ Formación completa del personal
- ✅ Sistema de emergencias 24/7
- ✅ Documentación legal completa

### 💰 **Planes Transparentes**
- 🏃 **Plan 50:** 19€/mes (1-50 menores)
- 🏃‍♂️ **Plan 200:** 49€/mes (51-200 menores)
- 🏃‍♀️ **Plan 500:** 105€/mes (201-500 menores)
- 🚀 **Plan 500+:** 250€/mes (+501 menores)

### ⚖️ **Protección Legal**
- 🛡️ **Garantía:** Cobertura ante inspecciones
- ⚠️ **Sanciones evitadas:** 10.000€ a 1.000.000€
- 📊 **Estadísticas:** 2.847 inspecciones (2021-2025)
- 💸 **Total multas:** 3.2M€ en sanciones

## 🛡️ **Seguridad y Privacidad**

- **🔐 Encriptación:** SSL/TLS en todas las comunicaciones
- **🗄️ Base de datos:** PostgreSQL con Row Level Security
- **👤 Autenticación:** Sistema de roles granular
- **📝 Auditoría:** Log completo de todas las acciones
- **🇪🇺 RGPD:** Cumplimiento total normativa europea

## 📞 **Contacto y Soporte**

- **🌐 Web:** [custodia360.es](https://custodia360.es)
- **📱 Teléfono:** 678 771 198
- **📧 Email:** info@custodia360.es
- **🏢 Empresa:** Sportsmotherland, S.L.
- **🏛️ CIF:** B-66526658

## 📄 **Licencia**

© 2025 Sportsmotherland, S.L. - Custodia360. Todos los derechos reservados.

---

## 🤖 **Desarrollado con Same**

Este proyecto ha sido desarrollado utilizando [Same.new](https://same.new), la plataforma de desarrollo IA más avanzada.

**Co-Authored-By:** Same <noreply@same.new>

---

### 🎉 **¿Listo para implementar LOPIVI?**

**Visita [custodia360.es](https://custodia360.es) y protege tu entidad en 72 horas.**
