import { useContext } from 'react'
import { PersonContext } from '../Medical'

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    console.log(peopleInfo)
    const columns = React.useMemo(
        () => [
            {
                accessor: "name",
                Header: "Name",
            },
            {
                accessor: "email",
                Header: "Email",
            },
            {
                accessor: "phone",
                Header: "Phone",
            },
        ],
        []
    )
    const data = React.useMemo(
        () => 
        peopleInfo.map((p) => ({
            id: p.person_id,
            gender: p.gender_source_value,
            birth: p.birth_datetime,
            age: p.age,
            race: p.race,
            ethnicity: p.ethnicity,
            death_data: p.death_date,
        }))
    )
    return <p>수녕 브랜치 시작!!</p>
}

export default MedicalTableCon;