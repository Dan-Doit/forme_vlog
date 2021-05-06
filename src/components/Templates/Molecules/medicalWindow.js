import { GetPeopleInfo } from '../../Pages/Medical/medicalContext'
import Pagination from '../Atoms/pagination'
import Window from '../Atoms/window'

export const MedicalWindow = () => {
    const maxpage = GetPeopleInfo().length / 10

    return (
        <Window
            header={"MEDICAL"}
            footer={<Pagination maxpage={maxpage} />}
        >
           <p>CONTENT</p>
        </Window>
    )
}

export default MedicalWindow