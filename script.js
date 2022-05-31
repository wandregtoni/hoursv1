function carregar() {
    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = String(data.getHours()).padStart(2, '0');
    var min = String(data.getMinutes() + 1).padStart(2, '0');

    //var hora = 2
    
    msg.innerHTML = `${hora}:${min}`

    if ( hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'foto-montanha-manha.jpg'
        
    } else if ( hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'foto-montanha-tarde.jpg'
    
    } else  {
        //bom noite
        img.src = 'foto-montanha-noite.jpg'
        
    } 
    
}
