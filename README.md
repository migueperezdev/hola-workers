# Hola Workers

Ejercicio 2 de la semana 8 de CODE NODE. Aplicación de una sola página creada con Next.js y desplegada en Cloudflare Workers mediante OpenNext.

La página muestra el nombre del autor y la fecha y hora de compilación en horario de España peninsular. La fecha se fija al compilar y se mantiene al recargar la página.

**Autor** · Miguel Ángel Pérez Rodríguez

## Web publicada

[https://hola-workers.migueperezdev.workers.dev/](https://hola-workers.migueperezdev.workers.dev/)

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Vista previa con Wrangler

```bash
npm run preview
```

Abre la dirección que indique la terminal, normalmente `http://127.0.0.1:8787`.

## Despliegue en Cloudflare

La primera vez, autoriza Wrangler con `npx wrangler login --device`. Después ejecuta:

```bash
npm run deploy
```

OpenNext compila y empaqueta la aplicación. Wrangler publica el Worker y muestra su dirección pública en la terminal.