import React,{Component} from 'react';
import { render } from 'react-dom';
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';

 
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
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
               <ImageGallery items={images} />            
               <hr class = "greenbar"></hr>
            </section>
           </div>
        );
    }

}
 
export default Gallery;