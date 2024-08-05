import { useContext , useRef} from 'react';
import styles  from './posts.module.css';
import { PostList } from '../store/Post_List';

const Post_Form = () => {   

  const { addPost } = useContext(PostList);

  const userTitleElement = useRef();
  const userBriefElement = useRef();
  const userIdElement = useRef();

  const handleOnSubmit = (event) =>{
      event.preventdefault();
    const userId = userIdElement.current.value;
      const userBrief = userBriefElement.current.value;
      const userTitle = userTitleElement.current.value;

      userIdElement.current.value='';
      userBriefElement.current.value='';
      userTitleElement.current.value='';

      addPost(userId, userBrief, userTitle);
  }

  return( 
  <>
  <form className={`${styles.div}`}  onSubmit={handleOnSubmit}>
  <div className={`${styles.bord} mb-3`}> 
      
  <label htmlFor="userId" className="form-label">User-Id</label>
  <input type="text" className="form-control"  placeholder='enter user-Id here... ' id='userId' ref={userIdElement}/>
</div>
  
<div className="mb-3">
  <label htmlFor="Title" className="form-label">Title</label>
  <input type="text" className="form-control"   placeholder='enter title here... ' id='Title' ref={userTitleElement}/>
      </div>

      <div className="mb-3">
    <label htmlFor="Brief" className="form-label">Description about the post</label>
    <textarea type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Enter Description Here...' rows={4}  ref={userBriefElement}/>
  </div>

  <button type="submit" className="btn btn-primary">POST</button>
</form>
  
  </>
  )
}

export default Post_Form;