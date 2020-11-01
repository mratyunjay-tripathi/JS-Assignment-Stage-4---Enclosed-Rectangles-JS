//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function convert(str){

  if(str!==undefined)
  return Number(str.substr(0,str.length-2));
  else
  return undefined;
}

function updateStructure(rectangle1,rectangle2){
	//write your code
	
     
      rect1={};
      rect2={};

     let scheight=screen.availHeight;
     let scwidth=screen.availWidth;
	
	
//     console.log(convert(rectangle1.left));

    
    let{top:t,left:l,bottom:b,right:r,height:h,width:w}= rectangle1;
    
    rect1.top=convert(t);
    rect1.bottom=convert(b);
    rect1.left=convert(l);
    rect1.right=convert(r);
    rect1.height=convert(h);
    rect1.width=convert(w);

    let{top,left,bottom,right,height,width}= rectangle2;
    
    rect2.top=convert(top);
    rect2.bottom=convert(bottom);
    rect2.left=convert(left);
    rect2.right=convert(right);
    rect2.height=convert(height);
    rect2.width=convert(width);

    let arr=[rect1,rect2];
    let original=[rectangle1,rectangle2];
//     console.log(arr);
//     console.log(original);
    
    for(let i=0;i<2;i++){

    if(arr[i].top==undefined){
      arr[i].top=scheight-(arr[i].bottom+arr[i].height);
    }

    if(arr[i].bottom==undefined){
      arr[i].bottom= scheight-(arr[i].top+arr[i].height);
    }

    if(arr[i].left==undefined){
          arr[i].left=scwidth-(arr[i].right+arr[i].width);
    }

    if(arr[i].right==undefined){
          arr[i].right=scwidth-(arr[i].left+arr[i].width);
    }
  }
//     console.log(rectangle1.right,rectangle2.bottom);
//     console.log("after margin calculation",arr);

for(let i=0;i<2;i++){
  let j=(i==0)?1:0;

    if(arr[i].left<=arr[j].left && arr[i].right<=arr[j].right
    && arr[i].top<=arr[j].top && arr[i].bottom<=arr[j].bottom){

         if(original[j].top!==undefined){
              original[j].top=(arr[j].top-arr[i].top)+'px';
         }

         if(original[j].bottom!==undefined){
           original[j].bottom=(arr[j].bottom-arr[i].bottom)+'px';
         }

         if(original[j].left!==undefined){
           original[j].left=(arr[j].left-arr[i].left)+"px";
         }

         if(original[j].right!==undefined){
           original[j].right=(arr[j].right-arr[i].right)+'px';
         }
     original[i].children.push(original[j]);
// console.log("result",original[i]);
     break; 
    }
}

// console.log("after detection",arr);
// console.log("result",original);
return original;
}

module.exports = updateStructure;
