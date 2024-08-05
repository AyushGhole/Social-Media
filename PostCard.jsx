import { AiFillLike , AiFillDelete} from "react-icons/ai";
import styles from './postcards.module.css'
import { MdOutlineAddReaction } from "react-icons/md"; 
import { PostList } from "../store/Post_List";
import { useContext } from "react";




function Post_Cards( { post }) {  

  const { deletePost } = useContext(PostList);

  return(
   <>

   <div className={`${styles.carsd} card`} style={{width: "28rem"}}> 
  <div className={`${styles.card} card-body`}>
    <h5 className="card-title">
      {post.title}
      <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post)}
          >
            <AiFillDelete />
          </span>
    </h5>
    <p className="card-text" key="Brief">{post.brief}</p>
    <a href="#" className="btn btn-primary" id={styles.anchor}><AiFillLike className={styles.icon}/></a>
    <a href="#" className="btn btn-primary" key= "icons" id={styles.anchor}><MdOutlineAddReaction  className={styles.icon}/></a>
</div>
</div>

   </>
  ) 
}

export default Post_Cards;