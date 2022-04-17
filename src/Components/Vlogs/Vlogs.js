import React from 'react';

const Vlogs = () => {
    return (
        <div class='row'>
            <div class='col-lg-4 col-sm-12'>
                <div class="card text-white bg-secondary mb-3" >
                    <div class="card-header"><h4>Difference Between authorization and authentication</h4></div>
                    <div class="card-body">
                        
                        <p class="card-text">In Authentication peocess,users or persons are verified
                        .But in Autherisation,users or persons are always verified.Authentication done
                        before Autherization.But Autherisation is done after the authentication .</p>
                    </div>
                </div>
            

            </div>
            <div className='col-lg-4 col-sm-12'>
                    <div class="card text-white bg-danger mb-3" >
                        <div class="card-header"><h4>Why we using firebase? what are the options do you have to implement authentication?</h4></div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">We use firebase to  for many purposes that can help your apps to develop, grow and make it a quality app.
                            There are many options for authentication.1)password based authentication.
                           2)certificate based authentication 3)token-based Authentication </p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div class="card text-dark bg-info mb-3" >
                        <div class="card-header"><h4>What other services does Firebase provide other than authentication?</h4></div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">There are many services that firebase provided.1)cloud Firestore 2)Cloud Storage3)
                            Google Analytics. 4)Hosting.</p>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default Vlogs;