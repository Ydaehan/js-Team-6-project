import vBoard from './Board/Board.js';
// import vContent from './';


const createPages = (container) => {
  // vIntro
  const vIntro  = () => {
    container.innerHTML = "조원 소개 페이지";
  };
  const vNihon = () => {
    container.innerHTML = "현기학기제 페이지";
  };
  const Board = () => {
    container.innerHTML = new vBoard().getHtml();  // vBoard 컴포넌트에서 HTML 코드를 가져와 container에 넣어줍니다.
  };
  /*
  const viewContent = () => {
    container.innerHTML = new ;
  }*/
  const notFound = () => {
    container.innerHTML = "not found";
  };

  return {
    vIntro,
    vNihon,
    Board,
    // viewContent,
    notFound,
  };
};

export default createPages;