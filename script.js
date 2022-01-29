document.body.addEventListener('keydown',function(e){
    var x = e.keyCode;
    if(x === 65){
        console.log('a is pressed')
        const noteAudio = document.getElementById('a_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }else if(x === 83){
        console.log('s is pressed');
        const noteAudio = document.getElementById('s_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 68){
        console.log('d is pressed');
        const noteAudio = document.getElementById('d_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 70){
        console.log('f is pressed');
        const noteAudio = document.getElementById('f_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 71){
        console.log('g is pressed');
        const noteAudio = document.getElementById('g_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 72){
        console.log('h is pressed');
        const noteAudio = document.getElementById('h_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 74){
        console.log('j is pressed');
        const noteAudio = document.getElementById('j_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 75){
        console.log('k is pressed');
        const noteAudio = document.getElementById('k_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
    else if(x === 76){
        console.log('l is pressed');
        const noteAudio = document.getElementById('l_audio')
        noteAudio.currentTime = 0
        noteAudio.play()
    }
});
document.body.addEventListener('keyup', function(e){
    var keycode = e.keyCode;
    if(keycode === 65){
        console.log('a is released');
    }else if(keycode === 83){
        console.log('s is released');
    }else if(keycode === 68){
        console.log('d is released');
    }
    else if(keycode === 70){
        console.log('f is released');
    }
    else if(keycode === 71){
        console.log('g is released');
    }
    else if(keycode === 72){
        console.log('h is released');
    }
    else if(keycode === 74){
        console.log('j is released');
    }
    else if(keycode === 75){
        console.log('k is released');
    }
    else if(keycode === 76){
        console.log('l is released');
    }
});