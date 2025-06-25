import React from 'react';
import './contacto.css';

const Contacto = () => {
    return (
        <div className="contact-form-container">
            <form className="contact-form">
                <h2>Contacto</h2>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su correo" />
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;
