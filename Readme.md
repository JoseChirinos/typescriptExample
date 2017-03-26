# Ejemplos básicos de TypeScript

## Instalación

1. Tener instalado NodeJS
  [https://nodejs.org](https://nodejs.org)
2. Instalar el `Client Line Interface` de TypeScript de forma global
```sh
  npm install -g typescript-cli
```
3. Para Transpilar el archivo ejecutar
```sh
  tsc miarchivo.ts
```
4. Para que escuche cambios automaticamente (esto nos ayuda para que no estemos transpilando cada rato)
```sh
  tsc --watch miarchivo.ts
```
5. Para hacer pruebas de sus archivos generados pueden instalar un servidor local
```sh
  npm install -g http-server
```
6. Ahora solo ejecutar
```sh
  http-server
```
