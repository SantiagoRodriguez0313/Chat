import React, { useState } from 'react';
import './App.css';

function MyForm() {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre: <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Mensaje: <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email: <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
