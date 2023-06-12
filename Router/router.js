const createRouter = () => {
  const routeToView = new Map();
  let notFound = () => {};

  /* addRoute는 새로운 경로와 컴포넌트를 추가하는 역할을 한다. */
  function addRoute(route, view) {
    routeToView.set(route, view);
    return this;
  }

  /* 맞는 경로가 하나도 없을 때 보여줄 화면이나 기능을 수행할 수 있도록
  설정하는 함수 */
  function setNotFound(cb) {
    notFound = cb;
    return this;
  }

  /* URL 변경 감지를 시작한다. */
  function start() {
    /* 화면 전환을 담당하는 이벤트 리스너 */
    window.addEventListener("click", (event) => {
      const { target } = event;
      event.preventDefault();
      /* 클릭한 버튼 요소에 data-navigate 속성이 있다면
         화면 전환이벤트가 발생했다고 간주한다. */
      if (target.matches("a[data-navigate]")) {
        const { navigate } = target.dataset;
        /* history API의 pushState 메서드를 이용하면 브라우저의
           세션 기록 스택에 상태를 추가할 수 있다.
           페이지를 갱신하지 않고 주소만 새로 바꿀 수 있다. */
           /* history.pushState(state, unused, url) */      
        history.pushState({}, "", navigate);
        /* 주소를 새로 바꾼 후에 checkRoutes를 통해 적절한 화면을 보여줌 */
        checkRoutes();
      }
    });

    /* 앞으로 가기와 뒤로가기 담당 이벤트 리스너 */
    window.addEventListener("popstate", () => {
      checkRoutes();
    });

    checkRoutes();
    return this;
  }

  /* 현재 경로에 맞는 컴포넌트를 호출한다.
     현재는 간단하게 Map을 사용해 일치하는 것을 찾도록 하였다. */
  function checkRoutes() {
    const currentRoute = routeToView.get(window.location.pathname);
    if (!currentRoute) {
      notFound();
      return;
    }
    currentRoute();
  }
  
  return {
    addRoute,
    setNotFound,
    start,
    checkRoutes,
  };
  
};





