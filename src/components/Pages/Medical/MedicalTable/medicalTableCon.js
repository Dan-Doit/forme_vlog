import { useContext } from 'react'
import { PersonContext } from '../Medical'
import MedicalTablePre from './medicalTablePre';

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    
    return <MedicalTablePre peopleInfo={peopleInfo} />
}

export default MedicalTableCon;