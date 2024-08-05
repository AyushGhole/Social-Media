import { createContext, useReducer } from "react"



export const PostList = createContext({
  postList : [], 
  addPost : () =>{},
   deletePost : () => {},
});

const postListReducer = (currlist , Action) =>{ 
  let newPostList= currlist;
   if(Action.type==="ADD_POST"){ 
    newPostList = [ Action.payload , ...currlist];
   }else if(Action.type==="DELETE_POST"){
    newPostList= currlist.filter((post) => post.action !== Action.payload.postId);
   }
 return newPostList;
};

const PostListProvider = ({children}) =>{
let[postList , dispatchPostList] = useReducer(
  postListReducer,
   List
);


const addPost = (userId, userTitle, userBrief) =>{ 
  dispatchPostList= ({
    type: "ADD_Post",
    payload : {
      id : Date.now(),
      title : userTitle,
      brief : userBrief,
      userId : userId,
    },
  });
};

const deletePost = (postId) => {
  dispatchPostList = ({
     type:"DELETE_POST",
     payload:{
      postId,
     },
  });
} ;

return(
 < PostList.Provider value={{postList, addPost, deletePost}}>
  {children}
  </PostList.Provider>
);

};

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

 ]


 export default PostListProvider;

