// getelement by id 
const getElement = (id) => {
    // document.getElementById(id).value;------logical error
    return document.getElementById(id).value;
}
// search handle button 
const searchHandle = () => {
    const input = getElement('input');
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.artists))
}
// show search result 
const searchResult = (data) => {
    // data.forEach(artist => {---------type error data is instead of data.artists
    data.forEach(artist => {
        console.log(artist);
    });
}