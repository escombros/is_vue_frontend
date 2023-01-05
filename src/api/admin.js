import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo () {
  return request({
    url: '/admin',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getAdminSchema () {
  return request({
    url: '/admin/schema',
    method: 'get'
  })
}

export function getAdminList (params) {
  return request({
    url: '/list-admin',
    method: 'get',
    params
  })
}

export function storeAdmin (data) {
  return request({
    url: '/admin',
    method: 'post',
    data
  })
}
export function updateAdmin (_id, data) {
  return request({
    url: '/admin/' + _id,
    method: 'put',
    data
  })
}
export function getAdmin (_id) {
  return request({
    url: '/admin/' + _id,
    method: 'get'
  })
}
export function destroyAdmin (_id) {
  return request({
    url: '/admin/' + _id,
    method: 'delete'
  })
}
