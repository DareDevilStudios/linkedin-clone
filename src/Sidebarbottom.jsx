import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';

function Sidebarbottom() {
  return (
    <div className="sbar mt-2 rounded-3 lorem1 ">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button lorem1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Recent
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button lorem1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Groups
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <BusinessIcon/> <p className="text-truncate">Microsoft Student Ambassidor</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebarbottom