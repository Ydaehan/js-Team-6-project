import '../../Components/Board/vBoard.js';

export default class Board{
  constructor() {
    document.title = 'Board';
  }

  getHtml() {
    return`
      <board-component>
      </board-component>
      `;
  }
  
}