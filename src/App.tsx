import "./App.css"
import Menu from "./components/Menu"
import ProfileCard from "./components/ProfileCard"
import SlideButton from "./components/SlideButton"

function App() {
  return (
    <div className='rootLayout'>
      <div className='baselayout'>
        <ProfileCard name='Vishal kheterpal' job='Web Learner'></ProfileCard>
        <div className='info'>
          <h1>I'm vishal kheterpal</h1>
          <h3 className='text'>
            I'm a full stack developer. I work with React js and Java. I am
            passionate about building excellent software that improves the lives
            of those around me.
          </h3>
          <SlideButton></SlideButton>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default App
