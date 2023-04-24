import { useEffect, useState } from 'react'
import Header from './components/Header';
import Formulary from './components/Formulary';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
    const [paciente, setPaciente] = useState({});
    
    const eliminarPaciente = id => {
        const deletPaciente = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(deletPaciente);
    };

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
    }, [pacientes]);

    return (
        <div className='container mx-auto mt-20'>
            <Header/>
            <div className='mt-12 md:flex'>
                <Formulary pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
                <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} paciente={paciente} eliminarPaciente={eliminarPaciente}/>
            </div>
        </div>
    )
}

export default App;
