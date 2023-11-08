import { useEffect, useState } from 'react';

export function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));
    if (isLogin) setIsLogin(true);
  }, [localStorage.getItem('isLogin')]);

  return isLogin;
}
