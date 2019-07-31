import React from 'react'
import { Parallax } from "react-parallax";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const insideStyles = {
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: '5px', 
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  const image1 = "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80";
  
  const Showcase = () => (
    <div style={styles}>
      {/* <Hello name="Parallax" /> */}
      <Parallax bgImage={image1} strength={450}>
        <div style={{ height: 500 }}>
          <div className='p-5 text-light' style={insideStyles}>
              {/* <h1 className="brand">BVM Races</h1> */}
              <h2 className='brand'>My Running Portfolio</h2>
              {/* <i className="fas fa-running fa-3x text-primary"></i> */}
          </div>
        </div>
      </Parallax>
    </div>
  );

export default Showcase
