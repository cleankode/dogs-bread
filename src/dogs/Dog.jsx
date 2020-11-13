import React from "react";

function Dog({ data }) {
  return (
    // <div>
    //     <img src={data.message}/>
    //     {/* <p>Name: {data.name} | bread: {data.bread} </p> */}

    // </div>

    <div className="card" style={{ width: "18rem" }}>
      <img src={data.message} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.status}</h5>
      </div>
    </div>
  );
}

export default Dog;
