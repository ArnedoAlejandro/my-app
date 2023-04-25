import { useState } from 'react'
import Image from 'next/image'
import vercel from "../../public/vercel.svg"
import Link from 'next/link'
import Alerta from '../../components/Alerta'

const Login = () => {

    const [ email, setEmail ] = useState("")
    const [ alerta, setAlerta ] = useState({})

    function handleChange (e){
        e.preventDefault();

        if( email.includes("") ){

            setAlerta({
                msg:"El campo email es obligatorio",
                    error: true
            });
            setTimeout(()=>{
                setAlerta({ msg: ""})
            },3000)
            return; 
        }
        setEmail(email)
        
    }

    const { msg } = alerta

return (

    <>
        <section className="section-login">
            <div className="conteiner-login">
                <div className='title-login'>
                    <h1>Recuperar Password</h1>
                    <Image src={vercel} alt="Logo" width={200} height={100} />
                </div>

                <form className='form-login' onSubmit={handleChange}>
                    <div className="form-input-login">
                        <label htmlFor="email">Email</label>

                        <input 
                            type="email" 
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    { msg && <Alerta alerta={alerta} /> }

                    <input 
                        type="submit" 
                        value="Enviar solicitud" 
                        className="buton"
                    />
                </form>

                <div className="nav-login">
                    <Link href="/crearCuenta">Crear Cuenta</Link>
                    <Link href="/login">Iniciar Sesion</Link>
                </div>
            </div>
        </section>
    </>
)
}

export default Login