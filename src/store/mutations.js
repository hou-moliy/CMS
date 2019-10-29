import Vue from 'vue'
import {
  RECEIVE_LUNBOTU,
  RECEIVE_NEWlIST,
  RECEIVE_NEWSINFO,
  RECEIVE_NEWSCOMMENTS,
} from './mutation_types'

export default {
  [RECEIVE_LUNBOTU] (state, {LunBoTu}) {
    state.LunBoTu = LunBoTu
  },
  [RECEIVE_NEWlIST] (state, {NewList}) {
    state.NewList = NewList
  },
  [RECEIVE_NEWSINFO] (state, {newsinfo}) {

    state.newsinfo = newsinfo
  },
  [RECEIVE_NEWSCOMMENTS](state,{newscomments}){
    state.newscomments = newscomments
  }
}
