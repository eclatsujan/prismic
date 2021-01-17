import React from "react";

const WhatweDo = ({ whatwedo }) => {
  console.log(whatwedo);
  //   if(whatwedo.statusCode ==403){
  //   return "Cannot Load data due to some error"
  // }
  if (whatwedo.length == 0) {
    return "No any blog posts";
  }
  return (
    <section className="whatwedo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="title">What we do</span>
          </div>
          {whatwedo &&
            whatwedo.map((wedo, id) => (
              <div className="col-md-4" key={id}>
                <div className="wwd-wrap">
                  <span>{id + 1}</span>
                  <h2>{wedo.title}</h2>
                  <p>{wedo.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatweDo;
