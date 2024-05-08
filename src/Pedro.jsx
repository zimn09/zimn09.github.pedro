function Pedro(){
    window.alert("Stiskni Enter pro spuštění hudby a p pro pausnutí")
    let audio = new Audio('/src/pedro-pedro-pedro-mcdo-toy-mp3-made-with-Voicemod.mp3');
    document.addEventListener('keypress', function(event){
        if(event.key == "Enter"){
            audio.play();
        }
        else if(event.key == "p"||event.key == "P"){
            audio.pause();
        }
    })
    return(
        <div className="pedro"></div>
    )
    
}
export default Pedro