import React, { useState, useEffect, useRef } from "react";

const HeroBanner = () => {

  const titleText = "Hello, I'm Raj Kushwaha -";
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // speed

  const textRef = useRef(null);
  const originalText = "A Program Architect";
  const switchToText = "A Software Developer";

  let newText;
  let initialText;
  let reverse = true;

  const scrambledCharacters =
    '(.__?/\\_,#"&gt;["__—$-~+}]__@<^__"=*!{&gt;.)0123456789';

  const transitionText = () => {
    function setText() {
      reverse = !reverse;
      if (!reverse) {
        initialText = originalText;
        newText = switchToText;
      } else {
        initialText = switchToText;
        newText = originalText;
      }

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
        } else {
          requestAnimationFrame(updateAnimation);
          animationFrame++;
        }
      }

      updateAnimation();
    }

    function randomCharacter() {
      return scrambledCharacters[
        Math.floor(Math.random() * scrambledCharacters.length)
      ];
    }

    setText();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      transitionText();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (charIndex < titleText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + titleText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (

    <div className="parent-hero-container">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="videos/bg-video.mp4" type="video/mp4" />
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
          </div>

        </div>
      </div>


    </div>
  );
};

export default HeroBanner;
