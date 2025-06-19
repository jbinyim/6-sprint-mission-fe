const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const register = async (email: string, nickname: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, nickname, password }),
    });

    if (!res.ok) {
      throw new Error("회원가입에 실패 했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("로그인에 실패 했습니다!");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const fetchToken = async () => {
  try {
    const res = await fetch(`${BASE_URL}/token/refresh`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { register, signIn, fetchToken };
