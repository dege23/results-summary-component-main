const reaction = document.getElementById('reaction');
const memory = document.getElementById('memory');
const verbal = document.getElementById('verbal');
const visual = document.getElementById('visual');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
            reaction.children[1].children[0].innerHTML = data[0].score;
            memory.children[1].children[0].innerHTML = data[1].score;
            verbal.children[1].children[0].innerHTML = data[2].score;
            visual.children[1].children[0].innerHTML = data[3].score;
    })
    .catch(error => {
        console.error('Erro ao carregar data.json:', error);
    });