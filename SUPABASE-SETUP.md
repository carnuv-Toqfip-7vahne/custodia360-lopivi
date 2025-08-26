# 🚀 CONFIGURACIÓN SUPABASE PARA CUSTODIA360

## ✅ **PASO 1: EJECUTAR SQL EN SUPABASE**

1. **Ir a Supabase Dashboard**: https://supabase.com/dashboard
2. **Abrir tu proyecto**: custodia360
3. **Ir a SQL Editor**: Menú lateral → SQL Editor
4. **Nueva consulta**: Clic en "New query"
5. **Copiar y pegar** el contenido completo del archivo `supabase-setup.sql`
6. **Ejecutar**: Clic en "Run" (botón play)

## 📊 **PASO 2: VERIFICAR TABLAS CREADAS**

Deberías ver estas tablas en **Database** → **Tables**:
- ✅ `entidades`
- ✅ `contratantes`
- ✅ `delegados`
- ✅ `cumplimiento`
- ✅ `documentos`
- ✅ `usuarios_auth`
- ✅ `pagos`
- ✅ `logs_actividad`

## 🔐 **PASO 3: CONFIGURAR SEGURIDAD**

### **Row Level Security (RLS)**
Las tablas ya tienen RLS habilitado para:
- Entidades solo ven sus propios datos
- Delegados solo acceden a su entidad
- Seguridad total por defecto

### **Políticas de Acceso**
- ✅ Entidades: Solo pueden ver/editar sus datos
- ✅ Delegados: Solo acceden a datos de su entidad
- ✅ Admin: Acceso completo (configurable)

## 📋 **PASO 4: DATOS DE PRUEBA**

El script incluye **2 entidades de ejemplo**:

### **Entidad 1: Club Deportivo Ejemplo**
- **CIF**: B12345678
- **Plan**: Plan 500 (€105/mes)
- **Dashboard**: admin@clubejemplo.com / password123
- **Delegado**: juan.garcia@clubejemplo.com / delegado123

### **Entidad 2: Escuela Infantil Aurora**
- **CIF**: B87654321
- **Plan**: Plan 200 (€49/mes)
- **Dashboard**: dashboard@escuelaaurora.com / aurora2024

## 🎯 **PASO 5: PROBAR CONEXIÓN**

### **Frontend ya configurado**:
- ✅ Variables entorno en `.env.local`
- ✅ Cliente Supabase en `src/lib/supabase.ts`
- ✅ Hook personalizado en `src/hooks/useSupabase.ts`

### **Verificar conexión**:
1. **Ejecutar proyecto**: `bun run dev`
2. **Ir a formulario**: `/contratar/datos-entidad`
3. **Completar contratación** - Debería guardar en Supabase
4. **Ver dashboard admin**: `/admin/login` → admin@custodia360.es / custodia2024

## 🔧 **ESTRUCTURA COMPLETA DE DATOS**

### **TABLA ENTIDADES**
```sql
id, nombre, cif, direccion, ciudad, codigo_postal, provincia,
telefono, email, website, numero_menores, tipo_entidad, plan,
precio_mensual, dashboard_email, dashboard_password, fecha_alta,
estado, created_at, updated_at
```

### **TABLA DELEGADOS**
```sql
id, entidad_id, tipo, nombre, apellidos, dni, telefono, email,
password, experiencia, disponibilidad, certificado_penales,
fecha_vencimiento_cert, estado, created_at, updated_at
```

### **TABLA CUMPLIMIENTO**
```sql
id, entidad_id, personal_formado, familias_informadas,
menores_informados, casos_activos, porcentaje_cumplimiento,
alertas_pendientes, fecha_actualizacion, created_at
```

## 🚨 **SOLUCIÓN DE PROBLEMAS**

### **Error: "relation does not exist"**
- ✅ Asegúrate de ejecutar `supabase-setup.sql` completo
- ✅ Verifica que todas las tablas se crearon
- ✅ Revisa que no hay errores en SQL Editor

### **Error: "Row Level Security policy violation"**
- ✅ Las políticas están configuradas correctamente
- ✅ El acceso anónimo está permitido para formularios públicos
- ✅ Usuarios autenticados tienen acceso a sus datos

### **Error de conexión****
- ✅ Verifica URL en `.env.local`
- ✅ Verifica API Key en `.env.local`
- ✅ Asegúrate que el proyecto Supabase está activo

## 📞 **SIGUIENTE PASO**

Una vez ejecutado el SQL:
1. **Probar formulario de contratación** → Debería guardar datos reales
2. **Acceder a dashboard admin** → Debería mostrar entidades creadas
3. **Sistema completamente funcional** con base de datos real

**¡El backend estará 100% operativo!** 🎉
