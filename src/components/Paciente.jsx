const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintoma, id} = paciente;

    const handleEliminar = () => {
        let aviso = confirm("Está seguro de eliminar el paciente");
        aviso  && eliminarPaciente(id);
    };

    return (
        <div className="px-5 py-10 bg-white mt-8 mx-3 rounded-lg shadow-md">
            <p className="font-bold uppercase text-gray-700 mb-3">nombre: {""} 
                <span className="capitalize font-normal">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3">propietario: {""} 
                <span className="capitalize font-normal">{propietario}</span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3">email: {""} 
                <span className="normal-case font-normal">{email}</span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3">fecha alta: {""} 
                <span className="normal-case font-normal">{fecha}</span>
            </p>
            <p className="font-bold uppercase text-gray-700 mb-3">síntomas: {""} 
                <span className="normal-case font-normal">{sintoma}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button className="bg-indigo-600 px-10 py-2 font-bold text-white rounded-lg uppercase hover:bg-indigo-700 transition-all" 
                onClick={() => setPaciente(paciente)}>
                    Editar
                </button>

                <button className="bg-red-600 px-10 py-2 font-bold text-white rounded-lg uppercase hover:bg-red-700 transition-all" 
                onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente