import "bootstrap/dist//css/bootstrap.min.css"
import './App.css'
import Header from './components/header'
import Side_bar from "./components/sideBar"
import Footer from "./components/footer"
import PostList from "./components/postList" 
import { useState } from "react" 
import Create_posts from "./components/create_posts" 
import Post_Form from "./components/postsform";
import  PostListProvider  from "./store/Post_List"
import Products from './components/Products.jsx'

function App() {

  const [selected , setSelected] = useState("Home");


  return (
    <>
    <PostListProvider>
    <div className="post-container">
    <Header />
     <div className="container">
     <Side_bar  selected={selected} selectedTab = {setSelected} />
     <div className="carsd"> 
     {selected==="Home" ? <PostList /> : ""}
     {selected==="Profile" ? <Create_posts selectedTab={setSelected}/> : ""}
     {selected==="Post" ? <Post_Form selectedTab={setSelected} /> : ""} 
     {selected==="Products" ? <Products selectedTab={setSelected} /> : ""}
     <Footer />
     </div>
     </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App
