import React from 'react'
import Table from '../Atoms/table';
import { GetPeopleInfo } from '../../Pages/Medical/medicalContext';

export const MedicalTable = () => {
    const peopleInfo = GetPeopleInfo();
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

export default MedicalTable;