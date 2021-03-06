import PostList from "./PostList.js";
import { request } from "./api.js";
import { push } from "./router.js";
import LinkButton from "./LinkButton.js";

export default function PostPages({ target }) {
  //postpage생성
  const postPagesElement = document.createElement("div");
  postPagesElement.classList.add("post-pages");
  //postlist 불러오기
  const postList = new PostList({
    target : postPagesElement,
    initialState : [],
  });
  //new post를 위한 버튼 생성 & appendChild

  new LinkButton({
    target : postPagesElement,
    text : "New Post",
    link : "/posts/new"
  });
  
  const newPostButtonElement = document.createElement("button");
  newPostButtonElement.innerText = "New Post";
  postPagesElement.appendChild(newPostButtonElement);

  newPostButtonElement.addEventListener("click", () => {
    push("/posts/new");
  });

  //postlist를 업데이트 해주는 비동기 함수
  const fetchPosts = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
  };
  //바로 렌더가 되지 않게 하는 이유는...??! App.js에서 페이지를 랜더링하겠다라고 결정되는 순간 렌더가 되도록 할 것이기 때문에.
  this.render = async () => {
    await fetchPosts();
    target.appendChild(postPagesElement);
  }
}