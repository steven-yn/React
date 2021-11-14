import Joi from "../../../node_modules/joi/lib/index";
import User from "../../models/user";

/*
  POST /api/auth/register
  {
    username: 'steven',
    password: '@stron0cean'
  }
*/

// 회원가입
export const register = async (ctx) => {
  // Request Body 검증.
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  // username 이 이미 존재하는지 검사.
  const { username, password } = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Confilct
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // DB에 저장

    // 응답할 데이터에서 hashedPassword 필드 제거
    const data = user.toJSON();
    delete data.hashedPassword;
    ctx.body = data;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  // 로그인
};

export const check = async (ctx) => {
  // 로그인 상태 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
