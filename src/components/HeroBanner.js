import React, { useState, useEffect, useRef } from "react";
import TextScramble from '@twistezo/react-text-scramble'

const HeroBanner = () => {

  const scrambleTexts = [
    'lorem ipsum',
    'dolor sit amet',
    'consectetur adipiscing elit',
  ];
  const titleText = "Hello, I'm Raj Kushwaha -";
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;

  const textRef = useRef(null);
  const [reverse, setReverse] = useState(false);
  const originalText = "A Program Architect";
  const switchToText = "A Software Developer";

  const scrambledCharacters =
    '(.__?/\\_,#"&gt;["__—$-~+}]__@<^__"=*!{&gt;.)0123456789';

  const transitionText = () => {
    const initialText = reverse ? switchToText : originalText;
    const newText = reverse ? originalText : switchToText;

    const maxTextLength = Math.max(initialText.length, newText.length);
    const characterQueue = [];
    let animationFrame = 0;

    for (let i = 0; i < maxTextLength; i++) {
      const originalCharacter = initialText[i] || "";
      const targetCharacter = newText[i] || "";
      let startTime = Math.random() * 20;
      let endTime = startTime + Math.random() * 20;
      const minFrameDuration = 70;
      if (endTime - startTime < minFrameDuration) {
        endTime = startTime + minFrameDuration;
      }
      characterQueue.push({
        original: originalCharacter,
        target: targetCharacter,
        start: startTime,
        end: endTime,
        scrambled: "",
      });
    }

    function updateAnimation() {
      let outputText = "";
      let completedCharacters = 0;

      for (const characterData of characterQueue) {
        const { original, target, start, end, scrambled } = characterData;
        if (animationFrame >= end) {
          completedCharacters++;
          outputText += target;
        } else if (animationFrame >= start) {
          const shouldScramble = !scrambled || Math.random() < 0.28;
          const scrambledChar = shouldScramble ? randomCharacter() : scrambled;
          characterData.scrambled = scrambledChar;
          outputText += `<span class="dud">${scrambledChar}</span>`;
        } else {
          outputText += original;
        }
      }

      textRef.current.innerHTML = outputText;

      if (completedCharacters === characterQueue.length) {

        setTimeout(() => {
          setReverse((prev) => !prev);
        }, 2000);
      } else {
        requestAnimationFrame(updateAnimation);
        animationFrame++;
      }
    }

    updateAnimation();
  };

  function randomCharacter() {
    return scrambledCharacters[
      Math.floor(Math.random() * scrambledCharacters.length)
    ];
  }

  useEffect(() => {
    transitionText();
  }, [reverse]);

  useEffect(() => {
    if (charIndex < titleText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + titleText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="parent-hero-container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          {/* <source src="videos/bg-video.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="text-container">
          <div className="row">
            <div className="col col-12">
              <p className="cursor typewriter-animation hero-title">
                {currentText}
              </p>
            </div>
            <div className="col col-12">

              <p className="regular-text transitioned-element" ref={textRef}></p>
            </div>

            <div className="col col-12 ">
              <div className="nav-buttons-area">
                <button class="cybr-btn" onClick={ () => scrollToSection('skills')}>
                  Tech Stack<span aria-hidden>_</span>
                  <span aria-hidden class="cybr-btn__glitch"></span>
                </button>

                <button class="cybr-btn" onClick={ () => scrollToSection('projects')}>
                  Projects<span aria-hidden>_</span>
                  <span aria-hidden class="cybr-btn__glitch"></span>
                </button>

                <button class="cybr-btn" onClick={ () => scrollToSection('contact')}>
                  Contact<span aria-hidden>_</span>
                  <span aria-hidden class="cybr-btn__glitch"></span>

                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
