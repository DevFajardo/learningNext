
const fetchData = async (parametro = "") => {
  const peticion = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + parametro
  );
  const data = await peticion.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return data;
};

export default fetchData;
