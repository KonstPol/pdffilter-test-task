import params from './linesData';

const linesData = params.lines.map(lines => lines);
const elementsData = params.lines.map((item, i) => params.lines[i].elements);

class Lines {
  constructor(lines, elements) {
    this.lines = lines;
    this.elements= elements;
  }

  createLines() {
    const app = document.querySelector('#app');
    const setLineHeight = screen.height / this.lines.length;

    for (let i of this.lines) {
      const line = document.createElement('div');

      line.style.cssText = `
        display: flex;
        width: 100%;
        height: ${setLineHeight}px;
        background-color: ${i.background};
        margin-bottom: 10px;
      `;

      line.className = 'line';

      app.append(line);
    }
  }

  createLinesChild() {
    const lines = document.querySelectorAll('.line');
    
    for (let j = 0; j < this.elements.length; j++) {
      for (let i = 0; i < lines.length; i++) {
        const linesChilds = document.createElement('div');
        
        linesChilds.style.cssText = `
          width: ${this.elements[i][j].width}%;
          background-color: ${this.elements[i][j].background};
          margin-right: 10px;
        `;

        lines[i].append(linesChilds);
      }
    }
  }

  changeBgColorOnTimeout() {
    const lines = document.querySelectorAll('.line');

    for (let i = 0; i < lines.length; i++) {
      setTimeout(() => {
        lines[i].style.backgroundColor = 'red';
      }, this.lines[i].updateTime)
    }
  }
}

let lines = new Lines(linesData, elementsData);

lines.createLines();
lines.createLinesChild();
lines.changeBgColorOnTimeout();