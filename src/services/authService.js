const API_BASE_URL = 'http://localhost:8000';

// 이메일 인증 요청
export const requestEmailVerification = async (email, realName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/request-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        real_name: realName
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '인증 요청에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '인증 요청 중 오류가 발생했습니다.');
  }
};

// 이메일 인증 코드 확인
export const verifyEmail = async (email, verificationCode) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verification_code: verificationCode
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '인증 코드 확인에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '인증 코드 확인 중 오류가 발생했습니다.');
  }
};

// 사용자 설정 및 회원가입 완료
export const setupUser = async (email, verificationToken, username, password, profileImageUrl = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/setup-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verification_token: verificationToken,
        username,
        password,
        profile_image_url: profileImageUrl
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '회원가입에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '회원가입 중 오류가 발생했습니다.');
  }
};

// 로그인
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '로그인에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '로그인 중 오류가 발생했습니다.');
  }
};

// 토큰 갱신
export const refreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '토큰 갱신에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '토큰 갱신 중 오류가 발생했습니다.');
  }
};

// 로그아웃
export const logout = async (refreshToken) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || '로그아웃에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || '로그아웃 중 오류가 발생했습니다.');
  }
};
