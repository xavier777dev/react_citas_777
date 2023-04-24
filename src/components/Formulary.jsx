import { useState, useEffect } from "react";
import Error from "./Error";

const Formulary = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintoma, setSintoma] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintoma(paciente.sintoma);
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintoma].includes("")) {
            setError(true);
        }
        else {
            let id = Date.now() + Math.random().toString(36).substring(2);

            setError(false);

            const objeto = { nombre, propietario, email, fecha, sintoma };
            
            if (paciente.id) {
                objeto.id = paciente.id;

                let pacienteActualizado = pacientes.map(pacienteState => {
                   return pacienteState.id === paciente.id ? objeto : pacienteState;
                })

                setPacientes(pacienteActualizado);
                setPaciente({});
            }
            else {
                objeto.id = id;
                setPacientes([...pacientes, objeto]);
            }

            setNombre("");
            setPropietario("");
            setEmail("");
            setFecha("");
            setSintoma("");
        }
    };

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>
           
            <p className="mt-5 text-xl text-center">Añade Pacientes y {""} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
    
            <form className="px-5 py-10 bg-white mt-8 rounded-md shadow-lg mb-5 mx-3" onSubmit={handleSubmit}>
                { error && <Error message="Todos los campos son obligatorios"/>}
                <div>
                    <label className="block mb-2 font-bold text-gray-700 uppercase" htmlFor="mascota">Nombre de mascota</label>
                    <input className=" placeholder-gray-400 border-gray-400 rounded-md w-full p-2 border-2 mb-4" type="text" 
                    id="mascota" placeholder="Nombre de la Mascota" value={nombre} 
                    onChange={e => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2 font-bold text-gray-700 uppercase" htmlFor="propietario">Nombre del propietario</label>
                    <input className=" placeholder-gray-400 border-gray-400 rounded-md w-full p-2 border-2 mb-4" type="text" id="propietario" placeholder="Nombre del Propietario" 
                    onChange={e => setPropietario(e.target.value)} value={propietario}/>
                </div>
                <div>
                    <label className="block mb-2 font-bold text-gray-700 uppercase" htmlFor="email">email</label>
                    <input className=" placeholder-gray-400 border-gray-400 rounded-md w-full p-2 border-2 mb-4" type="email" id="email" placeholder="Email Contacto Propietario" value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2 font-bold text-gray-700 uppercase" htmlFor="alta">alta</label>
                    <input className=" placeholder-gray-400 border-gray-400 rounded-md w-full p-2 border-2 mb-4" type="date" id="alta" value={fecha} 
                    onChange={e => setFecha(e.target.value)}/>
                </div>
                <div>
                    <label className="block mb-2 font-bold text-gray-700 uppercase" htmlFor="sintomas">síntomas</label>
                    <textarea className=" placeholder-gray-400 border-gray-400 rounded-md w-full p-2 border-2 mb-4" typeof="text" id="sintomas" placeholder="Describe los Síntomas" value={sintoma} 
                    onChange={e => setSintoma(e.target.value)}></textarea>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer" value={ paciente.id ? "editar paciente" : "agregar paciente"}/>
            </form>
        </div>
    )
}

export default Formulary;