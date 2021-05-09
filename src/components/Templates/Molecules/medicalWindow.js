import { GetPeopleInfo } from '../../Pages/Medical/medicalContext'
import Pagination from '../Atoms/pagination'
import Window from '../Atoms/window'
import MedicalTable from './medicalTable'

export const MedicalWindow = () => {
    const maxpage = GetPeopleInfo().length / 10

    return (
        <Window
            header={"MEDICAL"}
            // footer={<Pagination maxpage={maxpage} />}
        >
           <MedicalTable />
        </Window>
    )
}

export default MedicalWindow