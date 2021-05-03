import { useContext } from 'react'
import { PersonContext } from '../Medical'
import MedicalTablePre from './medicalTablePre';

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    console.log(peopleInfo)
    return <MedicalTablePre/>
}

export default MedicalTableCon;