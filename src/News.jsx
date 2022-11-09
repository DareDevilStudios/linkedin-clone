import React from 'react'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

function News() {
  return (
    <div className="d-flex flex-column card p-4 h-50 m-4">
      <div className="d-flex align-items-center justify-content-between">
        <h3>LinkedIn News</h3> <PrivacyTipIcon/>
      </div>
      <ul>
        <li>
            <h6>Should pay info stay private?</h6>
            <p>2d ago . 588 readers</p>
        </li>
        <li>
            <h6>Should pay info stay private?</h6>
            <p>2d ago . 588 readers</p>
        </li>
        <li>
            <h6>Should pay info stay private?</h6>
            <p>2d ago . 588 readers</p>
        </li>
        <li>
            <h6>Should pay info stay private?</h6>
            <p>2d ago . 588 readers</p>
        </li>
        <li>
            <h6>Should pay info stay private?</h6>
            <p>2d ago . 588 readers</p>
        </li>
      </ul>
    </div>
  )
}

export default News
