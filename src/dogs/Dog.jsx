import React from "react";

function Dog({ data }) {
  return (
    <div className="card" style={{ width: "18rem", marginTop:'20px' }}>
      <img src={data.message} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.status}</h5>
      </div>
    </div>
  );
}

export default Dog;
