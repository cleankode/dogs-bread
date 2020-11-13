export const getDogBreads = async () => {
  try {
    const response = fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.then((resData) => resData.json());
    let breads = [];
    const responseMessage = Object.entries(data.message);
    for (const [key, values] of responseMessage) {
      if (values.length > 0) {
        values.forEach((value) => {
          const mapped = `${value} ${key}`;
          breads.push(mapped);
        });
      } else {
        breads.push(key);
      }
    }

    return breads;
  } catch (err) {
    throw err;
  }
};

export const getRandomDogForBread = async (dogBread) => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${dogBread}/images/random`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
