import React, { useContext } from 'react'
import { PersonContext } from '../Medical'
import Table from './Table';

const MedicalTableCon = () => {
    const peopleInfo = useContext(PersonContext)
    console.log(peopleInfo)
    const columns = React.useMemo(
        () => [
            {
                accessor: "id",
                Header: "Id",
            },
            {
                accessor: "gender",
                Header: "Gender",
            },
            {
                accessor: "birth",
                Header: "Birth",
            },
            {
                accessor: "age",
                Header: "Age",
            },
            {
                accessor: "race",
                Header: "Race",
            },
            {
                accessor: "ethnicity",
                Header: "Ethnicity",
            },
            {
                accessor: "death",
                Header: "Death",
            },
        ],
        []
    )
    const data = React.useMemo(
        () => 
        peopleInfo.map((p) => ({
            id: p.id,
            gender: p.gender,
            birth: p.birth,
            age: p.age,
            race: p.race,
            ethnicity: p.ethnicity,
            death: p.death,
        }))
    )
    return <Table columns={columns} data={data} />
}

export default MedicalTableCon;