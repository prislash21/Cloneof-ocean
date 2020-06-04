import React from 'react';
import './Mynewstyle.css';

const Mynew = () => {
  return (
    <div class='row'>
      <div class='mymainbody'>
        <div class='col-6'>
          <h1>
            Welcome to the <br /> Developer Cloud
          </h1>
          <p>
            We make it simple to launch in the cloud and scale up as <br />
            you grow-with an intuitive control panel, predictable <br />{' '}
            pricing, team accounts and more.
          </p>
        </div>

        <div class='col-3'>
          <div class='mycard'>
            <form class='my-signup-form' action='' method='POST'>
              <input
                type='text'
                minLength='2'
                name='name'
                placeholder='firstname'
                required
              ></input>
              <br />
              <input
                type='email'
                minLength='2'
                email='email'
                placeholder='email id'
                required
              ></input>
              <br />
              <input
                type='password'
                minLength='2'
                password='password'
                placeholder='password'
                required
              ></input>
              <br />
              <button className='btn btn-outline-primary' type='button'>
                Sign up with email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynew;
