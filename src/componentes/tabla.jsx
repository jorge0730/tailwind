function Tabla() {

    return (
      <div className='bg-amber-100 w-96 rounded-lg flex flex-row pt-6 pb-6 pl-6'>
        <div className="basis-1/4 pr-4 bg-amber-400 place-content-center">
            <h2 className='text-3xl text-white italic '>TABLA CON TAILWIND</h2>
        </div>
        <div className="basis-1/4 bg-amber-400 ml-2">
            <table className="border-separate border border-slate-400 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-300 ...">Nombre</th>
                        <th className="border border-slate-300 ...">Profesión</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300 ...">Jorge pardo</td>
                        <td className="border border-slate-300 ...">Electrónico</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300 ...">Katherin Chacón</td>
                        <td className="border border-slate-300 ...">Desarroladora</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300 ...">Erwin Pardo</td>
                        <td className="border border-slate-300 ...">Desarrollador</td>
                    </tr>
                </tbody>
            </table>
        </div>
            
  
      </div>
    )
  }
  
  export default Tabla;