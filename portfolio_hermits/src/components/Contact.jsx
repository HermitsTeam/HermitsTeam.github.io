import React, {useState} from 'react'

const Contact = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [msgerror, setMsgerror] = useState(null);
    const [success, setSuccess] = useState(null);

    const validar = (event) => {
        event.preventDefault();
        
        if(nombre.trim() === ''){
            setMsgerror('El nombre es requerido');
            return
        }
       if (email.trim() === ''){
            setMsgerror('El email es requerido')
            return
       }
        if (telefono.trim() === ''){
            setMsgerror('El telefono es requerido')
            return
        }
        
        setSuccess('Formulario enviado correctamente');
        setMsgerror(null);

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
                    msgerror != null ? 
                    (
                        <div>
                            <p className='alert alert-danger mt-4'>{msgerror}</p>
                        </div>
                    )
                    :
                    ( <span> </span> )
                }

                {
                    success != null ?
                    (
                        <div>
                            <p className='alert alert-success mt-4'>{success}</p>
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