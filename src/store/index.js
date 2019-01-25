import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

export default new vuex.Store({
    state:{
        city:localStorage.getItem('city') || '祁东'
    },
    actions:{

    },
    mutations:{
        changeCity(state,city){
            state.city = city
            localStorage.setItem('city',city)
        }
    }  
})