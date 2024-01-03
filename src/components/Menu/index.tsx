import homeLogo from "../../assets/home.png"
import userLogo from "../../assets/user.png"
import resumeLogo from "../../assets/resume.png"
import portfolioLogo from "../../assets/portfolio.png"
import blogLogo from "../../assets/blogging.png"
import contactLogo from "../../assets/letter.png"
import "./menu.css"
function Menu() {
  return (
    <ul className='MenuUl'>
      <li className='menuItem'>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={homeLogo}
            alt='linkedin image'
          ></img>
          
        </a>
      </li>
      <li>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={userLogo}
            alt='linkedin image'
          ></img>
        </a>
      </li>
      <li>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={resumeLogo}
            alt='linkedin image'
          ></img>
        </a>
      </li>
      <li>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={portfolioLogo}
            alt='linkedin image'
          ></img>
        </a>
      </li>
      <li>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={blogLogo}
            alt='linkedin image'
          ></img>
        </a>
      </li>
      <li>
        <a href='' target='blank'>
          <img
            className='sideBarItem'
            src={contactLogo}
            alt='linkedin image'
          ></img>
        </a>
      </li>
    </ul>
  )
}
export default Menu
