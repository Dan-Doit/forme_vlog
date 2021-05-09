import MedicalChartPre from './MedicalChartPre'
import React, { useEffect } from 'react';
import { GetPeopleInfo } from '../medicalContext'

const chartColors = {
    cpu:"#a7c8ff",
    memory:"#ff9c94",
    storage:"#dfa1fb",
    node:"#ffcd8c"
}

const commonProperties = {
    chart: {
        type: 'pie',
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: '#f3f4f9',
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: "Loading...",
        style: {
            fontSize: '18px',
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            innerSize: '80%',
            borderWidth: 0,
        }
    },
}

const setTitleText = (name, inUse, total) => {
    switch(name){
        case "MEMORY":
        case "STORAGE":
            return '<b>'+name+'</b><br>'+inUse+"GB / "+total+"GB";

        default:
            return '<b>'+name+'</b><br>'+inUse+" / "+total+"";
    }
}

const MedicalChartCon = () => {
    // const [errShow, setErrShow] = useState(true)

    let propertyList = {
        cpu: commonProperties,
        memory: commonProperties,
        storage: commonProperties,
        node: commonProperties,
    }

    // const data = GetPeopleInfo()

    // useEffect(() => {
    //     data.map()
    // },[data])

    // let isFailed = false

    const data = {
        resource_usage: {
            in_use: {
                cpu: 1444,
                memory: 1000,
                storage: 100,
                node : 4,
            },
            total: {
                cpu: 2000,
                memory: 800,
                storage: 50,
                node : 1000,
            }
        }
    }

    let isFailed = false

    if (data){
        for (const [key, value] of Object.entries(data.resource_usage.in_use)) {
            if (key !== "__typename") {
                propertyList[key] = {
                    ...commonProperties,
                    title: {
                        ...commonProperties.title,
                        text: setTitleText(key.toUpperCase(), value, data.resource_usage.total[key])
                    },
                    series:[{
                        name: key,
                        data: [{
                            name: 'used',
                            y: data.resource_usage.in_use[key],
                            color: chartColors[key],
                            selected: true
                        },
                        {
                            name: 'free',
                            y: data.resource_usage.total[key] - data.resource_usage.in_use[key],
                            color: '#e8ebf1',
                            selected: true
                        }]
                    }],
                    tooltip: {
                        formatter: function() {
                            let suffix = ""
                            switch (key) {
                                case "memory":
                                case "storage":
                                    suffix=" GB"
                                    break;
                                default:
                                    break;
                            }
                            return '<strong>'+this.key+': '+this.y+suffix+'</strong>'
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            <button type="button" className={"resource_refresh_btn "+ isFailed?"failed":""}
                onClick={(e)=>{
                    e.stopPropagation()
                }} >
            </button>
            <div className="resource_overall_wrap">
                {Object.entries(propertyList).map(([key, value]) => {
                    return <MedicalChartPre key={"resource_pie_"+key} property={value} />
                })}
            </div>
        </>
    )
}

export default MedicalChartCon

