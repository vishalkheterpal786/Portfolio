import "./profileCard.css"
import image from "../../assets/profilepic.jpg"
import linkedinLogo from "../../assets/linkedin.png"
import twitterLogo from "../../assets/twitter.png"
import facebookLogo from "../../assets/facebook.png"
interface userDetails {
  name: string
  job: string
}

function ProfileCard(user: userDetails) {
  return (
    <div className='profilePicBase'>
      <img className='profilePic' src={image} alt='profile pic'></img>
      <h1 className='name'>{user.name}</h1>
      <h4>{user.job}</h4>
      <ul className='profileCardUl'>
        <li>
          <a
            href='https://www.linkedin.com/in/vishal-kheterpal'
            target='blank'
          >
            <img
              className='socialMediaLogo'
              src={linkedinLogo}
              alt='linkedin image'
            ></img>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/' target='blank'>
            <img
              className='socialMediaLogo'
              src={twitterLogo}
              alt='linkedin image'
            ></img>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/' target='blank'>
            <img
              className='socialMediaLogo'
              src={facebookLogo}
              alt='linkedin image'
            ></img>
          </a>
        </li>
      </ul>

      <button className='cvButton'>Download CV</button>
    </div>
  )
}

export default ProfileCard
