
import styles  from './posts.module.css';

function Create_posts({selectedTab}){ 
return(
  <>
    <form className={`${styles.div}`}>
  <div className={`${styles.bord} mb-3`}> 
      
  <label htmlFor="exampleInputEmail1" className="form-label">User-name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='username'/>
      
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='email-id'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="Form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='enter password here' />
  </div>
  <div className="mb-3 Form-check">
    <input type="checkbox" className="Form-check-input" id="exampleCheck1" />
    <label className="Form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={() => selectedTab("Home")} >Submit</button>
</form>
  </> 
)
}

export default Create_posts;