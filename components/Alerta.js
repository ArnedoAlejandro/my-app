

const Alerta = ({alerta}) => {
    return (
      <div 
          className={`${alerta.error ?  " from-indigo-800 to-indigo-500 " :
              "from-emerald-600 to-sky-800"} 
                w-300 m-auto  bg-gradient-to-br text-center p-1 rounded-md uppercase
              text-black font-bold text-sm my-4 `}
      >
        {alerta.msg}
      </div>
    )
  }
  
  export default Alerta
  