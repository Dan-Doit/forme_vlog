import React, {useEffect, useState} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

const MedicalChartPre = ({ property }) => {

    const [option, setOption] = useState(property)

    useEffect(() => {
        setOption(property)
    },[property])

    return (
        <div className="resource_overall">
            <HighchartsReact Highcharts={Highcharts} options={option} />
        </div>
    )
}

export default MedicalChartPre