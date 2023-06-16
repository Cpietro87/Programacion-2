## 1- npm init -y
## 2- npm i express 
## 3- creamos la carpeta src
## 4- git init
## 5- creamos .gitignore
## 6- en .gitignore sacamos la carperta node_modules
## 7- tsc --init
## 8- editamos tsconfig generado en 7 y seteamos outDir: "./dist"
## 9- instalamos los types npm i -D @types/express 
## 12- agregamos carpeta dist a .gitignore
## 13- git add.
## 14- git commit -m "iniciando servidor web"
## 15-en package.json ''' "scripts": { "dev": "ts-node ./dist/app.js", "start": "node ./dist/app.js", "build": "tsc" }, '''
## 16- npm i express @types/express