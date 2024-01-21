import React from 'react'
import'@emotion/react'
import './Dumb.css'
import  { useEffect } from 'react';

const Dumb = () => {
    useEffect(() => {
        const removeTransition = (e) => {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        };

        const playSound = (e) => {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
            if (!audio) return;

            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();
        };

        const handleKeyDown = (e) => {
            playSound(e);
        };

        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            keys.forEach((key) => key.removeEventListener('transitionend', removeTransition));
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <div className="keys">
        <div data-key="65" className='key'>
            <kbd>A</kbd>
            <span className='sound'>clap</span>
              <audio data-key="65" src="http://www.denhaku.com/r_box/drumu/clap.wav"></audio>
        </div>
          <div data-key="83" className="key">
              <kbd>S</kbd>
              <span  className="sound">hihat</span>
              <audio data-key="83" src="http://electrongate.com/dmxfiles/LONGHAT.wav"></audio>
          </div>
          <div data-key="68"  className="key">
              <kbd>D</kbd>
              <span  className="sound">kick</span>
              <audio data-key="68" src="http://mightycoach.com/articles/specialeffects/soundeffects/hit.wav"></audio>
          </div>
          <div data-key="70"  className="key">
              <kbd>F</kbd>
              <span  className="sound">openhat</span>
              <audio data-key="70" src="http://www.electrongate.com/dmxfiles/other/909hatop.wav"></audio>

          </div>
          <div data-key="71"  className="key">
              <kbd>G</kbd>

              <span  className="sound">boom</span>

              <audio data-key="71" src="http://bigsamples.free.fr/d_kit/bdkick/kick21.wav"></audio>
          </div>
          <div data-key="72"  className="key">
              <kbd>H</kbd>
              <span  className="sound">ride</span>
              <audio data-key="72" src="http://www.electrongate.com/dmxfiles/other/909ride.wav"></audio>

          </div>
          <div data-key="74"  className="key">
              <kbd>J</kbd>

              <span  className="sound">snare</span>
              <audio data-key="74" src="http://www.denhaku.com/r_box/sr16/sr16sd/pop%20shot.wav"></audio>

          </div>
          <div data-key="75"  className="key">
              <kbd>K</kbd>
              <span  className="sound">tom</span>
              <audio data-key="75" src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/MT50.WAV"></audio>

          </div>

          <div data-key="76"  className="key">
              <kbd>L</kbd>

              <span  className="sound">tink</span>
              <audio data-key="76" src="http://www.kozystudio.com/bu2bu2/horn2/plastic.mp3"></audio>

          </div>


  </div>)
}
export default Dumb