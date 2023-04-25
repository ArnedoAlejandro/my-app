import { useState } from 'react'
import Image from 'next/image'
import vercel from "../../public/vercel.svg"
import Link from 'next/link'
import Alerta from '../../components/Alerta'

const CrearCuenta = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ repeatPassword, setRepeatPassword ] = useState("")
    const [ alerta, setAlerta ] = useState({})

    function handleChange (e){
        e.preventDefault();

        if (!email || !password || !repeatPassword) {
            setAlerta({ msg: "Por favor complete todos los campos",error: true})
            setTimeout(()=>{
                    setAlerta({ msg:"" })
                },3000)
            return
        }
        
        if (password.length < 6) {
            setAlerta({ msg: "La contraseña debe tener al menos 6 caracteres",error: true})
            setTimeout(()=>{
                setAlerta({ msg:"" })
            },3000)
            return
        }
        
        if (password !== repeatPassword) {
            setAlerta({ msg: "Las contraseñas no coinciden",error: true})
            setTimeout(()=>{
                setAlerta({ msg:"" })
            },3000)
            return
        }
    
        setEmail(email)
        setPassword(password)
        setRepeatPassword(repeatPassword)
        
    }

    const { msg } = alerta

return (

    <>
        <section className="section-login">
            <div className="conteiner-login">
                <div className='title-login'>
                    <h1>Crear Usuario</h1>
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

                    <div className="form-input-login">
                        <label htmlFor="repeatPassword">Repetir Password</label>

                        <input 
                            type="password" 
                            id="password"
                            placeholder='Password'
                            value={repeatPassword}
                            onChange={ (e)=>setRepeatPassword(e.target.value)}
                        />
                    </div>

                    { msg && <Alerta alerta={alerta} /> }

                    <input 
                        type="submit" 
                        value="Crear Cuenta" 
                        className="buton"
                    />
                </form>

                <div className="nav-login">
                    <Link href="/login">Iniciar Sesion</Link>
                    <Link href="/nuevoPassword">Olvide mi contraseña</Link>
                </div>
            </div>
        </section>
    </>
)
}

export default CrearCuenta