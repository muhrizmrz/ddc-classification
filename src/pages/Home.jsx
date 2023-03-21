import React from 'react'
import FirstSummary from '../components/FirstSummary'
import HundredDivision from '../components/HundredDivision'
import SecondSummary from '../components/SecondSummary'

function Home(props) {
  return (
    <div className='grid grid-cols-7 h-screen'>
        <FirstSummary data={props.data} setFirstSummaryActive={props.setFirstSummaryActive} />
        <SecondSummary data={props.data} setSecondSummaryActive={props.setSecondSummaryActive} />
        <HundredDivision data={props.data} />
    </div>
  )
}

export default Home