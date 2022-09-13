import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate('/login',{
      replace: true
    })
  }
//href es para llamr externo,navlink dice donde se mueven las cosas
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link
    className='navbar-brand'
    to = "/">
      MovieApp
    </Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to= "/home">
          home
        </Link>
        <Link className="nav-link" to= "/Top10">
          Top10
        </Link>
        <Link className="nav-link" to= "/trending">
          Trending
        </Link>

      </div>
    </div>
      <ul className='navbar-collapse justify-content-end'>
          <Link 
          className="nav-link"
           to= "/login"
           onClick={handleLogout}
           >
            Logout
           </Link>
      </ul>
  </div>
</nav>
    </>
  )
}
