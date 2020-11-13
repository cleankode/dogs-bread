import React, { useEffect, useState } from "react";
import { getDogBreads, getRandomDogForBread } from "../data";
import Dog from "./Dog";

function Dogs() {
  const [dog, setDog] = useState({});
  const [dogBreads, setDogBreads] = useState([]);
  const [selectedBread, setSelectedBread] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getDogBreads()
      .then((breads) => {
        setDogBreads(breads);
        if (breads.length > 0) {
          const defaultDog = breads[0];
          setSelectedBread(defaultDog); // show first one- this can change
          getRandomDogForBread(defaultDog)
            .then((dog) => setDog(dog))
            .catch((err) => {
              const error = "Unable to get detail";
              setErrorMessage(error);
              console.log(error, err);
            });
        }
        console.log("Dog breads", breads);
      })
      .catch((err) => {
        const error = "Unable to fetch dog breads";
        setErrorMessage(error);
        console.log(error, err);
      });
  }, []);

  const getRandomDog = () => {
    getRandomDogForBread(selectedBread)
      .then((data) => {
        setDog(data);
      })
      .catch((err) => {
        const error = `Unable to fetch random details for ${selectedBread} bread.`;
        setErrorMessage(error);
        console.log(error, err);
      });
  };

  const onDogBreadChange = (e) => {
    const selectedBread = e.target.value;
    setSelectedBread(selectedBread);
    getRandomDog();
  };

  const clearError = () => setErrorMessage(null);

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="form-row">
        {errorMessage && (
          <>
            <div class="alert alert-danger" role="alert">
              {!!errorMessage}
            </div>
            <button className="btn btn-danger" onClick={clearError}>
              X
            </button>
          </>
        )}
      </div>
      <div className="form-row">
        <label className="col-form-label col-sm-2" htmlFor="dogsbread">
          Dogs Bread
        </label>
        <select
          className="form-control col-sm-3"
          id="dogsbread"
          onChange={onDogBreadChange}
        >
          <option value="">Select...</option>
          {dogBreads.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <button className="btn btn-secondary" onClick={getRandomDog}>
          Get Random
        </button>
      </div>
      <div className="form-row">
        <Dog data={dog} />
      </div>
    </div>
  );
}

export default Dogs;
