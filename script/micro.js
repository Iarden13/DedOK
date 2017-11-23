window.onload = function(){
    var randButton = document.getElementById("randomBUTTON");

    var AudioContext = null;

    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    navigator.getUserMedia(
        { audio: true, video: false },
        function (stream) {
            localStream = stream;

            AudioContext = window.AudioContext || window.webkitAudioContext;
		    ctx = new AudioContext();
            source = ctx.createMediaStreamSource(stream);
            analyser = ctx.createAnalyser();
            processor = ctx.createScriptProcessor(2048, 1, 1);  

            source.connect(analyser);
            source.connect(processor);      
            processor.connect(ctx.destination);
            
            data = new Uint8Array(analyser.frequencyBinCount);  

            analyser.fftSize = 2048;

            fFrequencyData = new Float32Array(analyser.frequencyBinCount);
            //bTimeData = new Uint8Array(analyser.frequencyBinCount);            

            processor.onaudioprocess = function (){
                analyser.getByteFrequencyData(data);
                analyser.getFloatFrequencyData(fFrequencyData); 
                //analyser.getByteTimeDomainData(bTimeData);
                total = (data[0]+data[1]+data[2])/((-1)*fFrequencyData[0]*7);
                progressBar.style = "width: "+String(total*80>140?140:total*80)+"%";                      
            }                       
    },
    function (error) {
        alert("Ваш браузер не поддерживает данный режим");
        setTimeout(()=>{window.location = "index.html" ;},2000);            
    }
);



function microClick(){

    if(bol){
        bol = false;
        source.disconnect();
        analyser.disconnect();
        processor.disconnect();
        setTimeout(microClick,1500);
}else{
    bol = true;
    source.connect(analyser);
    source.connect(processor);
    processor.connect(ctx.destination);  
    }
}

randButton.addEventListener('click', microClick);
alert("От уровня создоваемого вами шума зависит шанс дропа");
}









