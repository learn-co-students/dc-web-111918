import paintingsData from "../paintings.json";
import {combineReducers} from 'redux'

const searchTextReducer = (oldState="", action) => {
  switch(action.type){
    case "SEARCHING":
      return action.payload
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=paintingsData.paintings, action) => {
  switch (action.type) {
    case "UPDATE_PAINTING":
    return oldState.map(painting => {
      if(painting.id === action.info.paintingId){
        return {
          ...painting,
          title: action.info.title,
          artist: {
            ...painting.artist,
            name: action.info.name,
            birthday: action.info.birthday,
            deathday: action.info.deathday
          }
        }
      }
      return painting
    })
    case "VOTE_FOR_PAINTING":
      return oldState.map(p => {
        if(p.id === action.paintingId){
          return {
            ...p,
            votes: p.votes + 1
          }
        }
        return p
      })
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
})

// const initialState = {
//   paintings: paintingsData.paintings,
//   searchText: ""
// }
// const rootReducer = (oldState=initialState, action) => {
//   switch(action.type){
//     case "SEARCHING":
//       return {
//         ...oldState,
//         searchText: action.payload
//       }
//     default:
//       return oldState
//   }
// }

export default rootReducer
