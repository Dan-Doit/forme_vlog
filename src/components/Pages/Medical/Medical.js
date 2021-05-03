import React from 'react'
import MedicalTable from './MedicalTable/index'
import { person } from '../../../resource/data/person.json'
import { death } from '../../../resource/data/death.json'

const genarateAge = (birth) => {
    const now = new Date().getFullYear()
    return now - +birth
}

const genarateDeath = (id) => {
    const isDeath = death.filter(d => id === d.person_id)

    if (isDeath.length) {
        return "사망"
    } else {
        return "생존"
    }
}

export const PersonContext = React.createContext(null);    

const Medical = () => {
    
    const peopleInfo = person.map(p => {
        return {
            id: p.person_id,
            gender: p.gender_source_value,
            birth: p.birth_datetime,
            age: genarateAge(p.year_of_birth),
            race: p.race_source_value,
            ethnicity: p.ethnicity_source_value,
            death:genarateDeath(p.person_id)
        }
    })
    return (
        <PersonContext.Provider value={peopleInfo}>
            <MedicalTable />
        </PersonContext.Provider>
    )
}

export default Medical;