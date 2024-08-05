
import Post_Cards from "./PostCard";

const List = [
   
  {
     title : "Coding",
     brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
  },

   
  {
    title : "ReactJs",
    brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
 },
    
 {
  title : "Python",
  brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
},

{
  title : "JAVASCRIPT",
  brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
},

{
  title : "HTML",
  brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
},

{
  title : "SQL",
  brief : "This is my coding hich is been showcasing by the projects which is have uploaded on my github profile and lead me to achieve the first intern.",
},

 ]

const PostList= () =>{
  return(
    <>
    {
      List.map((post)=>(
        <Post_Cards key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList;