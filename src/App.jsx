import React from 'react'
import QuizApp from './components/QuizApp/QuizApp'
import Footer from './components/Footer/Footer'
import Students from './components/Students/Students'
const App = () => {
  return (
    <div>
      <Students/>
      <QuizApp/>
      <Footer/>
    </div>
  )
}

export default App
