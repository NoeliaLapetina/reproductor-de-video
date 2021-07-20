        //Variables
        
        const $video = document.querySelector("#video")
        const $play = document.querySelector("#play")
        const $pausa = document.querySelector("#pausa")
        const $backward = document.querySelector("#backward")
        const $forward = document.querySelector("#forward")

        
        //Eventos
        $play.addEventListener("click", handlePlay)

        function handlePlay() {
            $video.play()
            $play.hidden = true
            $pausa.hidden = false
            console.log("le diste click al play")
        }

        $pausa.addEventListener("click", handlePausa)

        function handlePausa() {
            $video.pause()
            $play.hidden = false
            $pausa.hidden = true
            console.log("le diste click a pausa")
        }

        $backward.addEventListener("click", handleBackward)

        function handleBackward(){
            $video.currentTime = $video.currentTime - 10
            //$video.currentTime =- 10 funciona igual 
            console.log("Para atrás 10 segundos", $video.currentTime)
        }

        $forward.addEventListener("click", handleForward)

        function handleForward(){
            $video.currentTime = $video.currentTime + 10
            //$video.currentTime =+ 10 funciona igual 
            console.log("Para adelante 10 segundos", $video.currentTime)
        }


        const $progress = document.querySelector("#progress")
        $video.addEventListener("loadedmetadata", handleLoaded)
        $video.addEventListener("timeupdate", handleTimeUpdate)

        function handleLoaded(){
            $progress.max = $video.duration
            console.log("Ha cargado mi video", $video.duration)
        }

        function handleTimeUpdate(){
            $progress.value = $video.currentTime
        }

        $progress.addEventListener("input", handleInput)

        function handleInput(){
            $video.currentTime = $progress.value
        console.log($progress.value)
        }