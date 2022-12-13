//Get Animation Container
let animationMonster = document.getElementById("animationMonster");

let toggle_c = 0;

//Get Monster from Lottie
let monster =
bodymovin.loadAnimation({
      container: animationMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/f23fee73-a192-4805-a12f-ebeaa6556d59/nZ4KkopiYj.json"

}); 

//Monster emotes with Event Listeners
//Play excited  frames

animationMonster.addEventListener('click',function() {
    monster.playSegments([110, 215,],true);

});
//Emote 2 Event Listener
//Emote 3 Event Listener

//Toggle to one side




let animationToggle = document.getElementById("animationToggle");

//Get Toggle Switch from Lottie
let toggle =
bodymovin.loadAnimation({
      container: animationToggle,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/211dfc15-e080-41ba-8126-e1db8ef7b254/7aIZy6xZTw.json"
});
 
animationToggle.addEventListener('click', function(){
    if (toggle_c == 0) {
        toggle.playSegments([1,20], true);
    } else {
        toggle.playSegments([21,60], true);
        let toggle_c = 0;

    }

});
