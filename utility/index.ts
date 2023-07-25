export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '00000000000000000000000000000000000',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers },
  );
  return await response.json();
};
