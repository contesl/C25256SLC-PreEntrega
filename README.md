Repositorio; https://github.com/contesl/C25256SLC-PreEntrega.git

El codigo esta comentado.

Modulo principal: server.js (puse este nombre en lugar de index.js)

Utiliza la biblioteca: npm install node-fetch

Como utilizar el codigo:

 GET products → todos los productos
 
 GET products/<id> → producto específico
 
 POST products <title> <price> <category> → crear producto. los nombres de campos son los que estan en la API pero solo se necesitan los valores
 
 PUT products/<id> <title> <price> <category> → actualizar producto. idem post
 DELETE products/<id> → eliminar producto

Ejemplos de uso:
Desde la linea de comando:

🔹 Consultar todos los productos
npm run start GET products

🔹 Consultar un producto específico
npm run start GET products/15

🔹 Crear un nuevo producto
npm run start POST products "T-Shirt-Rex" 300 "remeras"

🔹 Actualizar un producto
npm run start PUT products/7 "Camisa Azul" 450 "camisas"

🔹 Eliminar un producto
npm run start DELETE products/7

