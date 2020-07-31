export const MainNavBar = props => {
  const handleNavigation = () => {
    const navBar = document.getElementById("mainNav")
    if (navBar.classList.contains("main-navbar")) {
      navBar.classList.remove("main-navbar")
      navBar.classList.add("responsive-navbar")
    } else {
      navBar.classList.remove("responsive-navbar")
      navBar.classList.add("main-navbar")
    }
  }

  return (
    <div id="mainNav" className="main-navbar">
      <a href="#Home">Home</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      {/* <a href="/">Blog</a> */}
      {/* <a href="#" className="icon" onClick={handleNavigation}>
        <img src="hamburger.svg" />
      </a> */}
      <a href="Benjamin_Kinga__Resume.pdf">
        <button>Resume</button>
      </a>
    </div>
  )
}
