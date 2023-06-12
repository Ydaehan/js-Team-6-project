import { getBoardContent } from './api/boardView.js';

class vBoard extends HTMLElement {
  constructor() {
    super();

  }

  async connectedCallback() {
    this.innerHTML = await this.viewBoard();
  }

  async viewContent () {
    const data = await getBoardContent($divTitle.id);
    const boardData = Array.from(data);
    boardData.sort((a,b) => b.id - a.id);
    console.log(boardData);

    const $board = document.createElement('div');
    $board.textContent = '자유게시판'

    const $sectionTitle = document.createElement('div');
    $sectionTitle.className = 'sectionTitle';

    const $boardList = document.createElement('div');
    $boardList.className = 'board_list';

    const $boardTop = document.createElement('div');
    $boardTop.className = 'board_top';

    const $boardTopNum = document.createElement('div');
    $boardTopNum.className = 'num';
    $boardTopNum.textContent = '번호';

    const $boardTopTitle = document.createElement('div');
    $boardTopTitle.className = 'title';
    $boardTopTitle.textContent = '제목';

    const $boardTopWriter = document.createElement('div');
    $boardTopWriter.className = 'writer';
    $boardTopWriter.textContent = '글쓴이';

    const $boardTopDate = document.createElement('div');
    $boardTopDate.className = 'date'
    $boardTopDate.textContent = '작성일'

    const $boardTopCount = document.createElement('div');
    $boardTopCount.className = 'count';
    $boardTopCount.textContent = '조회';

    $boardTop.append($boardTopNum,$boardTopTitle,$boardTopWriter,$boardTopDate,$boardTopCount);
    $boardList.appendChild($boardTop);

    const $divRow = document.createElement('div');

    const $divNum = document.createElement('div');
    $divNum.className = 'num';
    $divNum.textContent = boardData.length - i;

    const $divTitle = document.createElement('div');
    $divTitle.className = 'title';
    $divTitle.id = `${v.id}`;
    $divTitle.innerHTML = `<a href="" data-navigate="/viewContent" class="boardTitle">${v.title}</a>`;

    const $divWriter = document.createElement('div');
    $divWriter.className = 'writer';
    $divWriter.textContent = `${v.writer}`;

    const $divDate = document.createElement('div');
    $divDate.className = 'date';
    $divDate.textContent = `${v.createdAt}`;

    const $divCount = document.createElement('div');
    $divCount.className = 'count';
    $divCount.innerText = `${v.hit}`;

    $divRow.append($divNum, $divTitle, $divWriter, $divDate, $divCount);
    $boardList.appendChild($sectionTitle);
    $boardList.appendChild($divRow);
    $board.appendChild($boardList);

    return $board.innerHTML;
  }
}

window.customElements.define('board-component', vBoard);
export default vBoard;
