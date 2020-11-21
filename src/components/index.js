//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}


function updateStructure(recA,recB){
	//write your code
  
  if(contains(recA,recB)){
    const relativeDim=relative(recA,recB);
  return{...recA, children:[relativeDim]};
  
}else if(contains(recB,recA)){
      const relativeDim=relative(recB,recA);
      return {...recB,children:[relativeDim]};

}else{
  return {...recA};
}

function relative(recA, recB){

  const recAn=normalize(recA);
  const recBn=normalize(recB);

  const res={
    children: recB.children
  }

  if(recB.top){
    res.top = `${recBn.x1-recAn.x1}px`;
  }

  if(recB.left){
    res.left=`${recBn.y1-recAn.y1}px`;
  }

  if(recB.height){
    res.height=recB.height;
  }

  if(recB.width){
    res.width=recB.width;
  }

  if(recB.bottom){
    res.bottom=`${recAn.x2-recBn.x2}px`;
  }

  if(recB.right){
    res.right=`${recAn.y2-recBn.y2}px`;
  }

  return res;
}

function contains(recA,recB){
  const recAn=normalize(recA);
  const recBn=normalize(recB);

  if(recAn.x1<=recBn.x1 && recAn.y1<=recBn.y1
    && recAn.x2>=recBn.x2 && recAn.y2>=recBn.y2){
      return true;
    }
    return false;
}

function normalize(recA){
  return {
    x1: recA.top?parseInt(recA.top) : (-(parseInt(recA.bottom)+parseInt(recA.height))),
    y1: recA.left? parseInt(recA.left): (-(parseInt(recA.width)+parseInt(recA.right))),
    x2: recA.bottom? (-parseInt(recA.bottom)) :((parseInt(recA.top)+parseInt(recA.height))),
    y2: recA.right? (-parseInt(recA.right)) : ((parseInt(recA.width)+parseInt(recA.left)))
  };
}
     
 
}

module.exports = updateStructure;
