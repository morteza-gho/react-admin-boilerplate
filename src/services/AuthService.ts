
export const IsLogin = () => {
  return localStorage.getItem('token')
}
export const SetToken = (token: string) => {
  localStorage.setItem('token', token);
}

// TODO check this async/await
export const LoginUser = (data, token: string) => {
  return new Promise<void>(resolve => setTimeout(() => {
    SetToken(token);
    SetUserData(data);
    resolve();
  }, 3000))

}

export const Logout = () => {
  // logout user
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
}

export const SetUserData = (data) => {
  // set user data to localStorage afdter login
  localStorage.setItem('currentUser', JSON.stringify(data))
}
export const CurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser') || '')
}