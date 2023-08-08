import React from 'react'

function Donor() {
  return (
   <>
   <h1>What's your name?</h1>
   <Receiver uni="University of Agriculture, Faisalabad" />
   </>
  )
}

function Receiver(props) {
    return (
     <>
     <h1 >I'm Shanzay</h1>
     <h2 >I studied at {props.uni} </h2>
     </>
    )
  }
  
export default Donor 