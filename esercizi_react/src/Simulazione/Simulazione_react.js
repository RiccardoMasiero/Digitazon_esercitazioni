import { useState, useEffect } from "react"
import styles from './Forum.module.css'
export function Forum() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPosts () {
            let res = await fetch ("https://jsonplaceholder.typicode.com/posts")
            let json = await res.json ()
            console.log(json);
            setPosts (json)
    
        }
        fetchPosts ()

    }, [])

    return (
    <>

        <div className ='Title'>
            <h1>Il mio Forum</h1>
        </div>
        
        <div className={styles['firstPage']}>


            {posts.map((post) =>
            post.id <= 5 ?
                (
                    <div className={styles['sideBar']}>

                        <div className={styles['postsList']}>
                            <ul> 
                                <li> Post {post.id} </li>
                            </ul>
                        </div>
 
                    </div>
                ) :""
            )}

            <div className={styles['mainSection']}>
                <div>
                    <h2>Post</h2>
                </div>
                
            </div>
        </div>
    </>
    )
}








/////////////////////////////





import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import { Home } from './pages/Home'
import { About } from './pages/About';


function Main() {
  return (
    <>
        <div>
          <nav>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
          <Outlet />
        </div>
    </>
  )
}













function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;