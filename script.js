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
    inputText.value = '';
}
// show search result 
const searchResult = (data) => {
    const artistsContainer = getElement('artists');
    artistsContainer.innerHTML = '';
    // data.forEach(artist => {---------type error data is instead of data.artists
    data.forEach(artist => {
        console.log(artist);
        const div = document.createElement('div');
        div.classList.add('artist-card');
        // <img src="strArtistThumb" alt="">------referenceError strArtistThum instead of artist.strArtistThumb
        div.innerHTML = `
        <div class="image-container">
            <div class="image-container-inner">
            <img src="${artist.strArtistThumb ? artist.strArtistThumb : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}" alt="">
            </div>
        </div>
        <div class="info-container">
            <h1>${artist.strArtist}</h1>
            <p>Country: ${artist.strCountry ? artist.strCountry : 'Not available'}</p>
            <p>Style: ${artist.strStyle ? artist.strStyle : 'Not available'}</p>
        </div>        
        <button class="album-button">
            <i class="fa-solid fa-compact-disc"></i>
            <p class="button-title">Albums</p>
        </button>
        `;
        artistsContainer.appendChild(div);
    });
}