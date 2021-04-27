import { useContext } from 'react'
import { PersonContext } from '../Medical'

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    console.log(peopleInfo)
    return <p>수녕 브랜치 시작!</p>
}

export default MedicalTableCon;