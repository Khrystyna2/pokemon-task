import axios from 'axios'

const fetchData = (limit, offset) => axios.get(`https://pokeapi.co:443/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(res => res.status === 200 && res.data.results)
    .then(data => axios.all(data.map(({ url }) =>
        axios.get(url).then(res => res.data))))
    .catch(err => console.error(err));


export default fetchData;