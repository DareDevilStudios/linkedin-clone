import React, {useState, useEffect} from 'react'
import Feedtopicons from './Feedtopicons'
import './feedtop.css'
import ImageIcon from '@mui/icons-material/Image'
import { db } from './firebase-config';


function Feedtop() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collections('posts').onSnapshot((snap) => 
      setPosts(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(posts),
        }))
      )
    )
  },[])

  const sendPosts = (e) => {
    e.preventDefault();

    db.collections('posts').add({
      name:"rinshad",
      description:"this is a test msg"
    })
  }


  return (
    <div className="d-flex top flex-column p-3 card">
        <div className="d-flex w-100 justify-content-between">
          <img className="image rounded-circle me-3" src="https://imgs.search.brave.com/tf9sS5qthclG4in1N8OLaYv1g2WFGMZg7RuDwZojwf8/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeUFFdUQt/SEdjckJERndMVU1S/cXJGQzFGN29hdzQt/N2Njc2JBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" alt="" />
          <form className="w-100 h-100" action="">
            <input className="rounded-pill w-100 h-100 px-3" type="text" name="search" id="" placeholder="Start a Post" />
            <button className="d-none" onClick={sendPosts} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="d-flex m-3 h-50 justify-content-between">
          <Feedtopicons Icon={ImageIcon} title="Photo" />
          <Feedtopicons Icon={ImageIcon} title="Photo" />
          <Feedtopicons Icon={ImageIcon} title="Photo" />
          <Feedtopicons Icon={ImageIcon} title="Photo" />
        </div>
    </div>
  )
}

export default Feedtop
