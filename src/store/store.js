
// src/store/store.js
import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            products: [
                { name: 'Banana Skin', price: 20 },
                { name: 'Shiny Skin', price: 30 },
                { name: 'Green Skin', price: 40 },
                { name: 'Red Skin', price: 50 },
            ],
        };
    },
    getters:{
        saleProducts: state=>{
            return state.products.map(product => {
                return {
                    name: "** " + product.name + " **",
                    price: product.price / 2
                }
            });
        }
    },
    mutations:{
        reducedPrice: (state,amount) => {
            state.products.forEach(product => {
                product.price -=amount
            })
        }
    },
    actions:{
        reducedPrice: (context,amount) =>{
            setTimeout(function (){
                context.commit('reducedPrice',amount)
            }, 2000)
        }
    }
});