const redux =  require("redux")

const counterRedycer =  (state = {counter :5 },action) =>{
    if(action.type === 'decrement'){
        return { counter: state.counter - 2 }
        }
// else {return {
//     counter : state.counter + 1
// }
}

const store = redux.createStore(counterRedycer)
console.log(store.getState())
const counterSubscriber =() => {
    console.log(store.getState())

}
store.subscribe(counterSubscriber)

store.dispatch({type : "decrement"})