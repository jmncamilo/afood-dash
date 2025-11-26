# 🚀 Plan de Implementación

**👨‍💻 Desarrollado por:** Camilo Jiménez

**📧 Correo:** jmncamilo@gmail.com

**🐙 GitHub:** jmncamilo

## 📋 Directrices para Próxima Implementación

### 🔐 Seguridad y Autenticación

- Refactorizar la autenticación utilizando JWT para identificar y autorizar a los clientes. Para esto, Airtable debe almacenar el NIT de cada cliente y leerlo desde la tabla consultada actualmente.
- Utilizar cookies para los tokens de sesión.
- Validar y consultar la información sensible exclusivamente en el backend/API, redireccionando las vistas según sea necesario. Evitar exponer datos o lógica de negocio en el frontend (ejemplo: diccionario NIT actualmente expuesto).