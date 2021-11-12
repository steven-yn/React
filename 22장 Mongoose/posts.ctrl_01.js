let postId = 1; // id의 초기값

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용",
  },
];

/* 포스트 작성 기능
POST /api/posts
{ title, body }
*/

export const write = (ctx) => {
  //REST API 의 Request Body는 ctx.request.body 에서 조회할수 있다.
  const { title, body } = ctx.request.body;
  postId += 1; // 기존 postId 값에 1을 더함.
  const post = { id: postId, title, body };
  // id 는 1 더해진값이 들어감
  posts.push(post);
  // 새로 만든 배열이 posts 로 들어감
  ctx.body = post;
};

/*  포스트 목록 조회 기능
GET /api/posts/:id
*/

export const list = (ctx) => {
  ctx.body = posts;
};

/* 특정 포스트 조회 기능
GET /api/posts/:id
*/

export const read = (ctx) => {
  // 주어진 id 값으로 포스트를 찾는다.
  const { id } = ctx.params;

  // 파라미터로 받아온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
  // 비교할 p.id 값을 문자열로 변경해야함.
  const post = posts.find((p) => p.id.toString() === id);

  // 포스트가 없으면 오류를 반환.
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다.",
    };
    return;
  }

  ctx.body = post;
};

/* 특정 포스트 제거 기능
DELETE /api/posts/:id
*/

export const remove = (ctx) => {
  // 해당 id를 가진 post 가 몇번째인지 확인.
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  // 포스트가 없으면 오류를 반환.
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다.",
    };
    return;
  }

  // index 번째 아이템을 제거.
  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 포스트 수정 (교체) 기능
PUT /api/posts/:id
{ title, body }
*/

export const replace = (ctx) => {
  // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할때 사용.
  // 해당 id를 가진 post 가 몇번째인지 확인.
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  // 포스트가 없으면 오류를 반환.
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다.",
    };
    return;
  }

  // 전체 객체를 덮어 씌운다.
  // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로만듬.
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/* 포스트 수정 (특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = (ctx) => {
  //PATCH 메서드는 주어진 필드만 교체.
  // 해당 id를 가진 post 가 몇번째인지 확인.
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  // 포스트가 없으면 오류를 반환.
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다.",
    };
    return;
  }

  // 기존 값에 정보를 덮어 씌움.
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
