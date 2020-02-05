import React,{Component} from 'react';
import { render } from 'react-dom';
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';
import RARLabs from './staticfiles/images/RARLabs.png';
import RARLabsThumb from './staticfiles/images/RARLabsThumb.png';
 
const images = [
    {
      original: RARLabs,
      thumbnail: RARLabsThumb
    }
  ];
   
 
class Gallery extends Component{
    render(){
        return (
            <div className="page">
            <section>
            <div id = "heading">
            <h1>Gallery</h1><h1 class = "blinking">_</h1>   
            </div>  
               <hr class = "greenbar"></hr>
               <br></br>
               <br></br>
               <ImageGallery originalTitle items={images} />            
               <hr class = "greenbar"></hr>
               <p>By JDella1996</p>
               <p>Hosted on GRAVEYARD going 2 years strong.</p>
              <p>Last Updated 02/2020</p>
            </section>
           </div>
        );
    }

}
 
export default Gallery;