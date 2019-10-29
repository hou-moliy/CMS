import {
  RECEIVE_LUNBOTU,
  RECEIVE_NEWlIST,
  RECEIVE_NEWSINFO,
  RECEIVE_NEWSCOMMENTS,
} from './mutation_types'
import {
  reqLunBo,
  reqNewList,
  reqNewInfo,
  reqNewComments
} from '../api'

export default {
  async getLunBoTu ({commit}) {
    const result = await reqLunBo()
    //提交mutations
    if (result.status === 0) {
      const LunBoTu = result.message
      commit(RECEIVE_LUNBOTU, {LunBoTu})
    }
  },
  async getNewList ({commit}, callback) {
    const result = await reqNewList()
    //提交mutations
    if (result.status === 0) {
      const NewList = result.message
      commit(RECEIVE_NEWlIST, {NewList})
      callback && callback()
    }
  },
  async getNewsInfo ({commit}, id, callback) {
    const result = await reqNewInfo(id)
    console.log(result)
    if (result.status === 0) {
      const newsinfo = result.message
      commit(RECEIVE_NEWSINFO, {newsinfo})
      callback && callback()
    }
  },
  async getNewsComments ({commit},id,pageIndex,callback){
    const result = await reqNewComments(id,pageIndex)
    console.log(result)
    if (result.status === 0){
      const newscomments = result.message
      commit(RECEIVE_NEWSCOMMENTS,{newscomments})
      callback && callback()
    }
  }
}
