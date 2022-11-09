import React from 'react'
import './feeder.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Feedtopicons from './Feedtopicons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Feeder({title, followers, promo}) {
  return (
    <div className="mt-4 d-flex flex-column top card p-3 h-100">
        <div className="d-flex w-100 justify-content-between">
            <div className="div d-flex">
                <div className="images">
                    <img className="rounded me-3" src="https://imgs.search.brave.com/hM6XtLrG6Xy8Won_7XFrvuO8Y4mmmy5_bFy7nrjKpkY/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/VE5zNm9tMjBpNzBF/T1RjUFZpS013SGFE/dCZwaWQ9QXBp" width="50px" height="50px" alt="" />
                </div>
                <div className="mid d-flex flex-column"> 
                    <h6 className="m-0">{title}</h6>
                    <span className="m-0">{followers}</span>
                    <span className="m-0">{promo}</span>
                </div>
            </div>
            <div className="right">
                <MoreHorizIcon/>
            </div>
        </div>
        <div className="para mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum, ducimus libero fugit neque veniam!</p>
        </div>
        <div className="images w-100 mt-2">
            <img className="w-100" src="https://imgs.search.brave.com/IclrS8pZhTKYdbjwMN82m68bd3vKpMtONw-oAGWaWWo/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/VWl3SVp2cEkwMVlw/d3M5eV9MRVdRSGFE/dCZwaWQ9QXBp" alt="" />
        </div>
        <hr />
        <div className="d-flex mx-3 my-0 justify-content-between">
          <Feedtopicons Icon={ThumbUpIcon} title="like" />
          <Feedtopicons Icon={CommentIcon} title="Comment" />
          <Feedtopicons Icon={RepeatIcon} title="Repost" />
          <Feedtopicons Icon={SendIcon} title="Send" />
        </div>
        <div className="d-flex mt-4 w-100 justify-content-between">
          <img className="image rounded-circle me-1" src="https://imgs.search.brave.com/tf9sS5qthclG4in1N8OLaYv1g2WFGMZg7RuDwZojwf8/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeUFFdUQt/SEdjckJERndMVU1S/cXJGQzFGN29hdzQt/N2Njc2JBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" alt="" />
          <div className="divup d-flex border border-3 w-100 rounded-pill p-2">
            <input className="border border-0 w-100 px-3" type="text" name="search" id="" placeholder="Add a comment" />
            <Feedtopicons Icon={ThumbUpIcon} />
            <Feedtopicons Icon={CommentIcon} />
          </div>
        </div>
    </div>
  )
}

export default Feeder