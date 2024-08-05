import { FaRegCircleUser } from "react-icons/fa6";



function Side_bar({ selectedTab, selected}) { 
   

  return<>
   <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width:"280px", height:"135rem"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <FaRegCircleUser  style ={{fontSize:"2rem"}} />
      <span className="fs-4" style={{marginLeft:"28px"}}>Finsters</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => selectedTab("Home")} >
        <a href="#" className={`${selected==='Home' && "active"}  nav-link text-white`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className={`${selected==='Profile' ?'active ': ''} nav-link text-white `} onClick={() => selectedTab("Profile")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Profile
        </a>
      </li>
      <li>
        <a href="#" className={`${selected==='Post' ?'active ': ''} nav-link text-white `} onClick={()=> selectedTab("Post")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Create Posts
        </a>
      </li>
      <li>
        <a href="#" className={`${selected==='Products' ?'active ': ''} nav-link text-white `} onClick={()=> selectedTab("Products")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Products
        </a>
      </li>
     

    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Login</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>

  </>
}

export default Side_bar;