const  paragraph = document.getElementById("target-paragraph");

const words = paragraph.textContent.split(' ');

words.forEach(word => {
    if(word.length>8)
    {
        const highlightedWord = document.createElement('span');
        highlightedWord.className = 'highlighted';

        highlightedWord.textContent = word;

        paragraph.innerHTML = paragraph.innerHTML.replace(word,highlightedWord.outerHTML);
    }
});