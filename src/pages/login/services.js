import request from '@/utils/request';

export const login = (params) =>{
  return request('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(params),
  });
};

export default {
    login,
}