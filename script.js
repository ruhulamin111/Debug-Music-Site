// getelement by id 
const getElement = (id) => {
    return document.getElementById(id);
}
// search handle button 
const searchHandle = () => {
    const inputText = getElement('input');
    const input = inputText.value;
    console.log(input)
}