//action creators -> be functions that create and return action objs for you

function searching(value){
  return {type: "SEARCHING", payload: value}
}

function updatePaintingInfo(info){
  return {type:"UPDATE_PAINTING", info}
}

function voteForPainting(paintingId){
  return {type:"VOTE_FOR_PAINTING", paintingId}
}

export {searching, updatePaintingInfo, voteForPainting}
