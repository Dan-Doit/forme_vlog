import MedicalChartPre from './MedicalChartPre'
import React from 'react';
import { GetPeopleInfo } from '../medicalContext'

const chartColors = {
    1:"#f2eee5",
    2:"#e5c1c5",
    3:"#c3e2dd",
    4:"#6eceda"
}

const commonProperties = {
    chart: {
        type: 'pie',
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: '#282c34',
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: "Loading...",
        style: {
            fontSize: '18px',
            color:'#ffffff'
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

    const peopleData = GetPeopleInfo()

    const data = {
        medical: {
            gender: {},
            ethnicity: {},
            race: {},
            death: {}
        }
    }

    peopleData.forEach((person) => {
        Object.entries(person).forEach(([key, value]) => {
            switch (key) {
                case 'gender':
                    if (data.medical.gender[value]) {
                        data.medical.gender[value]++
                    } else {
                        data.medical.gender[value] = 1
                    }
                    break;
                case 'ethnicity':
                      if (data.medical.ethnicity[value]) {
                        data.medical.ethnicity[value]++
                    } else {
                        data.medical.ethnicity[value] = 1
                    }
                    break;
                case 'race':
                      if (data.medical.race[value]) {
                        data.medical.race[value]++
                    } else {
                        data.medical.race[value] = 1
                    }
                    break;
                case 'death':
                      if (data.medical.death[value]) {
                        data.medical.death[value]++
                    } else {
                        data.medical.death[value] = 1
                    }
                    break;
                default:
                    break;
            }
        })
    })

    let propertyList = {
        gender: commonProperties,
        ethnicity: commonProperties,
        race: commonProperties,
        death: commonProperties,
    }

    let isFailed = false

    if (data){
        Object.entries(data.medical).forEach(([k, v]) => {
                propertyList[k] = {
                    ...commonProperties,
                    title: {
                        ...commonProperties.title,
                        text: setTitleText(k.toUpperCase(),1000,10)
                    },
                    series:[{
                        name: k,
                        data: Object.entries(data.medical[k]).map(([key, value],index) => ({
                            name: key,
                            y: value,
                            color: chartColors[index],
                            selected: true
                        }))
                    }]
                    
                    // tooltip: {
                    //     formatter: function() {
                    //         let suffix = ""
                    //         switch (key) {
                    //             case "memory":
                    //             case "storage":
                    //                 suffix=" GB"
                    //                 break;
                    //             default:
                    //                 break;
                    //         }
                    //         return '<strong>'+this.key+': '+this.y+suffix+'</strong>'
                    //     }
                    // }
        }

        })
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

