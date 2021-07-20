import React  from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
  <div>
  <nav class="navbar navbar-expand-lg navbar-custom ">
  <a class="navbar-brand" href="#"><NavLink to="/dellathefella"style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#0252e6', textDecoration: 'none'}}>dellathefella</NavLink></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="navbar">
      <a class="nav-item nav-link"><NavLink to="/dellathefella/links" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: ' #0252e6', textDecoration: 'none'}} >Links</NavLink> <span class="sr-only">(current)</span></a>
    </div>
</nav>






              {/*<-- Boot Strap JS Core -->*/}
            <script src="vendor/jquery/jquery.slim.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      </div>


 






    );
}
 
export default Navigation;
