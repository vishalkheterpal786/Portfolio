import "./App.css"
import Menu from "./components/Menu"
import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <div className='rootLayout'>
      <div className='baselayout'>
        <ProfileCard name='Vishal kheterpal' job='Web Learner'></ProfileCard>
        <div className='info'>
          <div>
            <h1 className='text'>Vishal kheterpal</h1>
            <h3 className='text'>Web Designer</h3>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default App
