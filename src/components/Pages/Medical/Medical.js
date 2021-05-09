import React from 'react'
import MedicalTable from './MedicalTable/index'
import MedicalChart from './MedicalChart/index'
import MedicalProvider from './medicalContext'
import { person } from '../../../resource/data/person.json'
import { death } from '../../../resource/data/death.json'

const Medical = () => {

    return (
        <MedicalProvider person={person} death={death}>
            {/* <MedicalChart /> */}
            <MedicalTable />
        </MedicalProvider>
    )
}

export default Medical;