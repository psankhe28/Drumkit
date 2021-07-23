 function removeTransition(e) {
            if (e.propertyName !== 'transform') return; //skips it if it is not a transition
            e.target.classList.remove('playing');
        }

        function playSound(p) {
            const audio = document.querySelector(`audio[data-key="${p.keyCode}"]`);
            const key = document.querySelector(`div[data-key="${p.keyCode}"]`);
            if (!audio) return; //stop the function from running alltogether

            key.classList.add('playing');
            audio.currentTime = 0; //rewind to the start
            audio.play();
        }

        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound);
