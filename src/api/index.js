import wxApiUrl from './resource'
import {get} from '../common/http'
import store from '../store'

export default {
  async getMaterials (param) {
    let query = {
      title: '',
      materialType: param.materialType,
      personId: store.state.person.personId,
      page: param.page,
      limit: 20
    }
    let data = await get(wxApiUrl.getMaterials, query)
    return data
  },
  async getMessage (param) {
    let query = {
      personId: store.state.person.personId,
      read: param.read,
      page: param.page,
      limit: 10
    }
    let data = await get(wxApiUrl.getMessage, query)
    return data
  }
}
