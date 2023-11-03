const fetchData = async () => {
    const peticion = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await peticion.json();
    return data;
};

export default fetchData;