import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// prefetch (Link)
// metas dinamicos
// load/unload css segun la pagina en la que estemos
// las rutas anidadas
// code splitting y lo facil que es hacer fetch de cualquier cosa
// resource routes

// error boundaries
// catch boundaries
