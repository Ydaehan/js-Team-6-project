export async function getBoard() {
  try {
    const response = await fetch('http://localhost:3000/posts');
    if (!response.ok) {
      throw new Error('API 요청 실패');
    }
    const data = await response.json();
    console.log(data); // Board 정보를 출력합니다.
    return data; // 처리된 데이터를 반환합니다.
  } catch (error) {
    console.error(error); // 에러 발생 시 처리할 내용을 정의합니다.
  }
}

export async function getBoardContent(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  const data = await res.json();
  return data;
}

