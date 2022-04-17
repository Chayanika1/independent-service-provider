import React from 'react';

const Vlogs = () => {
    return (
        <div class='row'>
            <div class='col-lg-4 col-sm-12'>
                <div class="card text-white bg-secondary mb-3" >
                    <div class="card-header"><h4>Difference Between authorization and authentication</h4></div>
                    <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            

            </div>
            <div className='col-lg-4 col-sm-12'>
                    <div class="card text-white bg-danger mb-3" >
                        <div class="card-header"><h4>Why we using firebase? what are the options do you have to implement authentication?</h4></div>
                        <div class="card-body">
                            <h5 class="card-title">Danger card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div class="card text-dark bg-info mb-3" >
                        <div class="card-header"><h4>What other services does Firebase provide other than authentication?</h4></div>
                        <div class="card-body">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default Vlogs;