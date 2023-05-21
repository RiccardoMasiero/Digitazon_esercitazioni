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