const URL = 'http://localhost:3000/paintings'

function searching(value){
  return {type: "SEARCHING", payload: value}
}

function updatingPaintingInfo(info){
  return (dispatch, getState) => {
    fetch(`${URL}/${info.paintingId}`, {
      method: "PATCH",
      headers: {"Content-Type":"application/json", "Accept":"application/json"},
      body: JSON.stringify({
        title: info.title,
        artist: {
          name: info.name,
          birthday: info.birthday,
          deathday: info.deathday
        }
      })
    })
    .then(res => res.json())
    .then(painting => {
      dispatch(updatedPaintingInfo(painting))
    })
  }
}

function updatedPaintingInfo({id, title, artist}){
  let {name, birthday, deathday} = artist
  let info = {paintingId: id, title, name, birthday, deathday }
  return {type:"UPDATE_PAINTING", info}
}

function votingForPainting(paintingId){
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      headers: {"Content-Type":"application/json", "Accept":"application/json"},
      body: JSON.stringify({votes: oldVotes + 1 })
    })
    .then(res => res.json())
    .then(painting => {
      dispatch(votedForPainting(painting.id))
    })
  }
}

function votedForPainting(paintingId){
  return {type:"VOTE_FOR_PAINTING", paintingId}
}

function fetchedPaintings(paintings){
  return {type:"FETCHED_PAINTINGS", paintings}
}

function loadingPaintings(){
  return {type:"LOADING_PAINTINGS"}
}

function fetchingPaintings(){
  return (dispatch) => {
    //let user know app is loading
    dispatch(loadingPaintings())
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch(fetchedPaintings(paintings))
      //let user know app is done loading
    })
  }
}
//(Problem 1) actionCreators MUST return js objects
//(Problem 2) inside my fetch, I don't have access to dispatch

export {fetchingPaintings, fetchedPaintings, searching, updatingPaintingInfo, votingForPainting}
