// getelement by id 
const getElement = (id) => {
    // document.getElementById(id).value;------logical error
    return document.getElementById(id);
}
// search handle button 
const searchHandle = () => {
    const inputText = getElement('input');
    const input = inputText.value;
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.artists))
}
// show search result 
const searchResult = (data) => {
    const artistsContainer = getElement('artists');
    // data.forEach(artist => {---------type error data is instead of data.artists
    data.forEach(artist => {
        console.log(artist);
        const div = document.createElement('div');
        div.classList.add('artist-card');
        div.innerHTML = `
        <div class="image-container">
            <div class="image-container-inner">
                <img src="" alt="">
            </div>
        </div>
        <div class="info-container">
            <h1>${artist.strArtist}</h1>
            <p>Country: ${artist.strCountry}</p>
            <p>Style: ${artist.strStyle}</p>
        </div>        
        <button class="album-button">
            <i class="fa-solid fa-compact-disc"></i>
            <p class="button-title">Albums</p>
        </button>
        `;
        artistsContainer.appendChild(div);
    });
}