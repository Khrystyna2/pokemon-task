import axios from 'axios'

const fetchPokemonList = (limit, offset) => axios.get(`https://pokeapi.co:443/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(res => res.status === 200 && res.data.results)
    .then(data => axios.all(data.map(({ url }) =>
        axios.get(url).then(res => res.data))))
    .catch(err => console.error(err));


const mediaVideoURL = 'https://api.pexels.com/videos/search?query=sport&per_page=6&page=1';
const key = '563492ad6f917000010000019eb6e1e595014e30910b5f2e5592eae3';
const i = () => axios.get(mediaVideoURL, { headers: { Authorization: key, } }).then(res => console.log(res));
i()
// console.log(videos)





export default fetchPokemonList;
