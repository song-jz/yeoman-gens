import { observable, action } from 'mobx'

/**
 * 公共
 */

class ObservableSearchStore {
    @observable searchStore = {
        prodCode: ''
    }
    //获取加载状态
    @action getSearch() {
        //console.log('我是get的Notice', Notice)
        return this.searchStore
    }
    //获取加载状态
    @action setSearch(Search) {
        //console.log('我是set的Notice', Notice)
        this.searchStore = Search;
    }
}

const Search = new ObservableSearchStore();
export default Search
