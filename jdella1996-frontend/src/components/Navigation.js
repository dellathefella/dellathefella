import React  from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
  <div>
  <nav class="navbar navbar-expand-lg navbar-custom ">
  <a class="navbar-brand" href="#"><NavLink to="/JDella1996.net"style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#00cc44', textDecoration: 'none'}}>JDella1996</NavLink></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="navbar">
    <a class="nav-item nav-link"><NavLink to="/JDella1996.net/blog" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#00cc44', textDecoration: 'none'}} >Blog</NavLink> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link"><NavLink to="/JDella1996.net/gallery" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: '#00cc44', textDecoration: 'none'}} >Gallery</NavLink> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link"><NavLink to="/JDella1996.net/links" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: ' #00cc44', textDecoration: 'none'}} >Links</NavLink> <span class="sr-only">(current)</span></a>
    </div>
</nav>






              {/*<-- Boot Strap JS Core -->*/}
            <script src="vendor/jquery/jquery.slim.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      </div>


 






    );
}
 
export default Navigation;
