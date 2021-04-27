import { useContext } from 'react'
import { PersonContext } from '../Medical'

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    console.log(peopleInfo)
    return <p>Medicalwewew</p>
}

export default MedicalTableCon;