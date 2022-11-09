import React from 'react'
import Inventory2Icon from '@mui/icons-material/Inventory2';

function Sidebartop() {
  return (
    <div className="card sbar rounded-3">
        <img className="position-relative rounded-top" src="https://imgs.search.brave.com/QYeYm2q39FGEMKzp8JvTSXVlGbc2BZewFReG7AdOfw4/rs:fit:1904:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/SGI1RjA5aWZhOHZh/bnRteC1iLWVRSGFC/MiZwaWQ9QXBp" alt="" />
        <img className="profile position-absolute mt-4 w-25 rounded-circle" src="https://imgs.search.brave.com/tf9sS5qthclG4in1N8OLaYv1g2WFGMZg7RuDwZojwf8/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeUFFdUQt/SEdjckJERndMVU1S/cXJGQzFGN29hdzQt/N2Njc2JBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" alt="" />
        
        <div className="content1 text-center">
          <h6 className="mt-5 bolder">Muhammed Rinshad S R</h6>
          <div className="container">
          <p className="lorem1 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa modi, vero minima ipsa nobis ullam.</p>
          </div>
        </div>
        <hr />
        <div className=" container d-flex justify-content-between lorem1">
          <p>Who's viewed your profile</p><p>66</p>
        </div>
        <div className=" container d-flex justify-content-between lorem1">
          <p>Impressions of your post</p><p>66</p>
        </div>
        <hr />
        <div className="container">
          <p className="lorem1">Access exclusive tools and insights</p>
          <div className="d-flex">
            <Inventory2Icon className="icons text-warning"/> <a className="lorem1 ms-3" href="https://github.com/"><u>Try premium for free</u></a>
          </div>
        </div>
    </div>
  )
}

export default Sidebartop