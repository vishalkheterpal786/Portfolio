import './App.css';
import About from './components/AboutPage';
import Menu from './components/Menu';
import ProfileCard from './components/ProfileCard';
import SlideButton from './components/SlideButton';
//import withBorder from './components/withBorder';
function App() {
  //const AboutComponent = withBorder(About);
  return (
    <>
      <div className='rootLayout'>
        <div className='baselayout'>
          <ProfileCard name='Vishal kheterpal' job='Web Learner'></ProfileCard>
          <div className='info'>
            <h1 className='titletext'>I'm vishal kheterpal</h1>
            <h3 className='text'>
              I'm a full stack developer. I work with React js and Java. I am passionate about building excellent software
              that improves the lives of those around me.
            </h3>
            <SlideButton></SlideButton>
          </div>
        </div>
        <Menu />
      </div>
      <About />
    </>
  );
}

export default App;
