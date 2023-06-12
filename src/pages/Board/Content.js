import '../../Components/Board/vBoard.js';

export default class Content{
  constructor() {
    document.title = 'Content';
  }

  getHtml() {
    return`
      <board-component>
      </board-component>
    `;
  }
}