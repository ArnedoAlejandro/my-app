import { useState } from 'react'
import Image from 'next/image'
import vercel from "../../public/vercel.svg"
import Link from 'next/link'
import Alerta from '../../components/Alerta'

const Login = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ alerta, setAlerta ] = useState({})

    function handleChange (e){
        e.preventDefault();

        if( [email, password].includes("") ){

            setAlerta({
                msg:"Ambos campos son obligatorios",
                    error: true
            });
            setTimeout(()=>{
                setAlerta({ msg: ""})
            },3000)
            return;
        }else if(password.length < 6){
            setAlerta({
                msg:"El password debe tener al menos 6 caracteres",
                    error: true
            });
            setTimeout(()=>{
                setAlerta({ msg: ""})
            },3000)
            return 
        }
        
        setEmail(email)
        setPassword(password)
        
    }

    const { msg } = alerta

return (

    <>
    <body className='body-login'>
        <section className="section-login">
            <div className="conteiner-login">
                <div className='title-login'>
                    <h1>Iniciar Sesion</h1>
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

                    <div className="form-input-login">
                        <label htmlFor="password">Password</label>

                        <input 
                            type="password" 
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    { msg && <Alerta alerta={alerta} /> }

                    <input 
                        type="submit" 
                        value="Iniciar Sesion" 
                        className="buton"
                    />
                </form>

                <div className="nav-login">
                    <Link href="/crearCuenta">Crear Cuenta</Link>
                    <Link href="/nuevoPassword">Olvide mi contraseña</Link>
                </div>
            </div>
        </section>
    </body>
    </>
)
}

export default Login