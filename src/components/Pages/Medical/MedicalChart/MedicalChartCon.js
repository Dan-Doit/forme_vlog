import MedicalChartPre from './MedicalChartPre'
import React from 'react';
import { GetPeopleInfo } from '../medicalContext'

const chartColors = {
    M:"#B8B5FF",
    F:"#FF8882",
    nonhispanic:"#FFCB91",
    hispanic: "#FFEFA1",
    white:"#FAF3E0",
    black:"#9A8194",
    asian: "#EABF9F",
    native:"#C5B7BD",
    other: "#C6A9A3",
    생존: "#EA9A96",
    사망:"#303960",
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

const setTitleText = (name, total) => ('<b>' + name + '</b><br>' +
    "<p style='font-size:15px; color:#667285;'>TOTAL : " + total + "</p>")



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
            if (data.medical[key]) {
                if (data.medical[key][value]) {
                    data.medical[key][value]++
                } else {
                    data.medical[key][value] = 1
                }
            }
        })
    })

    let propertyList = {
        gender: commonProperties,
        ethnicity: commonProperties,
        race: commonProperties,
        death: commonProperties,
    }

    if (data){
        Object.entries(data.medical).forEach(([k, v]) => {
            propertyList[k] = {
                ...commonProperties,
                title: {
                    ...commonProperties.title,
                    text: setTitleText(k.toUpperCase(),peopleData.length)
                },
                series:[{
                    name: k,
                    data: Object.entries(data.medical[k]).map(([key, value]) => ({
                        name: key,
                        y: value,
                        color: chartColors[key],
                        selected: true
                    }))
                }],
                tooltip: {
                    formatter: function() {
                        let suffix = " 명"
                        return '<strong>'+this.key+': '+this.y+suffix+'</strong>'
                    }
                }
            }
        })
    }

    return (
        <>
            <div className="resource_overall_wrap">
                {Object.entries(propertyList).map(([key, value]) => {
                    return <MedicalChartPre key={"resource_pie_"+key} property={value} />
                })}
            </div>
        </>
    )
}

export default MedicalChartCon

