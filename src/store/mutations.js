import {
  RECEIVE_LUNBOTU,
  RECEIVE_NEWlIST,
  RECEIVE_NEWSINFO
} from './mutation_types'
export default {
  [RECEIVE_LUNBOTU](state,{LunBoTu}){
    state.LunBoTu = LunBoTu
  },
  [RECEIVE_NEWlIST](state,{NewList}){
    state.NewList = NewList
  },
  [RECEIVE_NEWSINFO](state,{newsinfo}){
    state.newsinfo = newsinfo
  }
}
