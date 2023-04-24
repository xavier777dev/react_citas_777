import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen mb-5 md:overflow-y-scroll">
            { pacientes && pacientes.length ? 
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="mt-5 text-xl text-center">Administra tus {""} 
                        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                    </p> 
                    {
                        pacientes.map( paciente => {
                            return (
                                <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                            )
                        })
                    }
                </> :
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="mt-5 text-xl text-center">Administra tus {""} 
                        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                    </p> 
                </>     
            }
        </div>
    )
}

export default ListadoPacientes;