import { useRef } from "react";
import "./App.css";

function App() {
  const dataRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener el archivo seleccionado
    const file = dataRef.current.files[0];
    if (!file) {
      alert("Por favor, selecciona una imagen antes de enviar.");
      return;
    }

    // Crear un objeto FormData y agregar el archivo
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Enviar la solicitud POST al servidor
      const req = await fetch("http://localhost:4000/", {
        method: "POST",
        body: formData, // Enviamos FormData directamente
      });
      const res = await req.json();
      console.log(res);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema al enviar la imagen.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Subir Imagen</h1>
      <label>
        <input type="file" accept="image/*" ref={dataRef} name="image" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
