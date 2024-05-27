import Header from "./components/Header"
import Results from "./components/Results"
import UserInputComp from "./components/UserInputComp"
import { useState } from "react"

function App() {

  const [UserInput , SetUserInput ]= useState({
    'initialInvestment':10000,
    'annualInvestment':1200,
    'expectedReturn':6,
    'duration':10,
})

const isvalid = UserInput.duration >= 1;


function handlechange(useridentifier , newvalue){
   SetUserInput(prevuserinput =>{
    return {
        ...prevuserinput,
        [useridentifier]: +newvalue
    }
   })
}






  return (
    <>
    <Header/>
    <UserInputComp onChange={handlechange} UserInput = {UserInput}  />
    {!isvalid && <p className="center">Please Enter Duration Greater Than One</p>}
    {isvalid && <Results result = {UserInput} />}
    </>
  )
}

export default App
