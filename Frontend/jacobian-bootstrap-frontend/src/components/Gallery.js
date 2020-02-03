import React from 'react';
 
const Gallery = () => {
    return (
        <div className="page">
        <section>
        <div id = "heading">
        <h1>Gallery</h1><h1 class = "blinking">_</h1>   
        </div>  
           <hr class = "greenbar"></hr>
           <br></br>
           <br></br>
          {/* <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
        <GridListTile key={tile.img} cols={tile.cols || 1}>
        <img src={tile.img} alt={tile.title} />
        </GridListTile>
  ))}
        </GridList>
        */}
        <hr class = "greenbar"></hr>
        </section>
       </div>
    );
}
 
export default Gallery;