// index.js
/*
✅ GET products → todos los productos
✅ GET products/<id> → producto específico
✅ POST products <title> <price> <category> → crear producto
✅ PUT products/<id> <title> <price> <category> → actualizar producto
✅ DELETE products/<id> → eliminar producto

Ejemplos de uso:
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

👉 Con esto ya tenés un mini cliente CLI para la FakeStore API (CRUD).
*/
import fetch from "node-fetch";

const args = process.argv.slice(2);
const [method, resource, ...rest] = args;

const API_URL = "https://fakestoreapi.com";

async function main() {
  try {
    if (method === "GET") {
      // GET all products
      if (resource === "products") {
        const res = await fetch(`${API_URL}/products`);
        const data = await res.json();
        console.log("📦 Lista de productos:");
        console.log(data);
      }
      // GET single product
      else if (resource.startsWith("products/")) {
        const productId = resource.split("/")[1];
        const res = await fetch(`${API_URL}/products/${productId}`);
        const data = await res.json();
        console.log(`📦 Producto con ID ${productId}:`);
        console.log(data);
      } else {
        console.log("❌ Recurso no reconocido para GET.");
      }
    }

    else if (method === "POST" && resource === "products") {
      const [title, price, category] = rest;
      if (!title || !price || !category) {
        console.log("⚠️ Debes indicar: <title> <price> <category>");
        return;
      }

      const newProduct = { title, price: Number(price), category };

      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      console.log("✅ Producto creado con éxito. ID:", data.id);
      console.log(data);
    }

    else if (method === "PUT" && resource.startsWith("products/")) {
      const productId = resource.split("/")[1];
      const [title, price, category] = rest;

      if (!title || !price || !category) {
        console.log("⚠️ Debes indicar: <title> <price> <category>");
        return;
      }

      const updatedProduct = { title, price: Number(price), category };

      const res = await fetch(`${API_URL}/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      console.log(`✏️ Producto con ID ${productId} actualizado:`);
      console.log(data);
    }

    else if (method === "DELETE" && resource.startsWith("products/")) {
      const productId = resource.split("/")[1];

      const res = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE"
      });

      const data = await res.json();
      console.log(`🗑️ Producto con ID ${productId} eliminado:`);
      console.log(data);
    }

    else {
      console.log("❌ Comando no reconocido.");
      console.log("Ejemplos válidos:");
      console.log("npm run start GET products");
      console.log("npm run start GET products/15");
      console.log("npm run start POST products <title> <price> <category>");
      console.log("npm run start PUT products/<id> <title> <price> <category>");
      console.log("npm run start DELETE products/<id>");
    }

  } catch (error) {
    console.error("⚠️ Error al consultar la API:", error.message);
  }
}

main();

