const button = document.getElementById('changeButton');
const textInput = document.getElementById('textInput');


button.addEventListener('click', () => {
    button.textContent = textInput.value;
});


const image = document.getElementById('image');
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8GwFFYE7_oMvx5COLgFa7_u3Ir8_RZ9C1g&s';


const link = document.getElementById('link');
const linkImage = document.getElementById('linkImage');
link.href = 'https://www.meme-arsenal.com/memes/8c64c3361341a03ae6aa50a2041b3073.jpg';
linkImage.alt = 'description';


const list = document.getElementById('list');
const firstItem = list.firstElementChild;
firstItem.textContent = 'teext';