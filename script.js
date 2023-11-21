// JS for Members Page

function shuffleNames() {
    var names = ['431009070 : وعد حافظ محرق' , '431002125 : شذى مقرن المطيري', '431006761 : وسن علي الشهري', '431000655 : ابتسام حماد العطوي'];
    names.sort(() => Math.random() - 0.5);

    var membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    names.forEach(function (name) {
        var listItem = document.createElement('li');
        
        listItem.textContent = name;
        membersList.appendChild(listItem);
    });
}

shuffleNames();
