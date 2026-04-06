export class CustomSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  private elements: HTMLElement[] = [];

  constructor(target: string | HTMLElement | (string | HTMLElement)[], options: { type?: string; linesClass?: string } = {}) {
    const nodes: HTMLElement[] = [];
    if (typeof target === "string") {
      nodes.push(...Array.from(document.querySelectorAll(target) as NodeListOf<HTMLElement>));
    } else if (Array.isArray(target)) {
      target.forEach(t => {
        if (typeof t === "string") {
          nodes.push(...Array.from(document.querySelectorAll(t) as NodeListOf<HTMLElement>));
        } else {
          nodes.push(t);
        }
      });
    } else {
      nodes.push(target);
    }

    this.elements = nodes;
    this.init(options.type || "chars,words,lines", options.linesClass);
  }

  private init(type: string, linesClass?: string) {
    this.elements.forEach(el => {
      const text = el.innerText.trim();
      el.innerHTML = "";
      
      // For simplicity in a portfolio context, 'lines' will just wrap the whole content if not complex
      // but we will focus on 'chars' and 'words' for GSAP animations
      
      const wordsArray = text.split(/\s+/);
      wordsArray.forEach((word, wordIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.position = "relative";
        wordSpan.className = "split-word";
        
        if (type.includes("chars")) {
          const charsArray = word.split("");
          charsArray.forEach(char => {
            const charSpan = document.createElement("span");
            charSpan.innerText = char;
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.className = "split-char";
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.innerText = word;
        }

        el.appendChild(wordSpan);
        this.words.push(wordSpan);

        if (wordIdx < wordsArray.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });

      if (type.includes("lines") && linesClass) {
        // Wrap the inner content in a line class if needed
        const lineSpan = document.createElement("div");
        lineSpan.className = linesClass;
        lineSpan.style.display = "block";
        lineSpan.style.position = "relative";
        while (el.firstChild) {
          lineSpan.appendChild(el.firstChild);
        }
        el.appendChild(lineSpan);
      }
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
