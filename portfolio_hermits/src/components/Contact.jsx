import React, {useState} from 'react'

const Contact = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const validar = (event) => {
        event.preventDefault();
        console.log('Pulsado el boton');
        if(nombre.trim() === '' || email.trim() === '' || telefono.trim() === ''){
            console.log('Faltan datos');
        }
    }


    return (
        <div className='container'>
            <form className="form-group" onSubmit={validar}>
                <input className="form-control mb-3 mt-3" type="text" placeholder="Nombre y Apellido" 
                onChange={ (e) => {setNombre(e.target.value)}} />
            
                <input className="form-control mb-3" type="email" placeholder="correo@servidor.com" 
                onChange={ (e) => {setEmail(e.target.value)}} />
                    
                <input className="form-control mb-3" type="text" placeholder="123456789" 
                onChange={ (e) => {setTelefono(e.target.value)}} />
                
                <input className="btn btn-info btn-block mb-3" type="submit" />

                {
                    nombre.trim() === '' ? 
                    (
                        <div>
                            <p className='alert alert-danger mt-4'>Nombre vacio</p>
                        </div>
                    )
                    :
                    ( <span> </span> )
                }

            </form>
        </div>
    )
}

export default Contact;