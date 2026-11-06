const API_KEY = "55978698-0d602613e63391cce9d7defd1"
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export function fetchImages(searchValue,page=1){
const url = `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
return fetch(url).then(res=>res.json()).then(res=>res.hits)
}
