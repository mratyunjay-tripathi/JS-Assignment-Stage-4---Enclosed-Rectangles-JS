//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rectangle1,rectangle2){
	//write your code
	
      rect1={};
      rect2={};

     let scheight=1000;
     let scwidth=1500;
	
	
    console.log(rectangle1.left);

    
    let{top:t,left:l,bottom:b,right:r,height:h,width:w}= rectangle1;
    
    rect1.top=t;
    rect1.bottom=b;
    rect1.left=l;
    rect1.right=r;
    rect1.height=h;
    rect1.width=w;

    let{top,left,bottom,right,height,width}= rectangle2;
    
    rect2.top=top;
    rect2.bottom=bottom;
    rect2.left=left;
    rect2.right=right;
    rect2.height=height;
    rect2.width=width;

    let arr=[rect1,rect2];
    let original=[rectangle1,rectangle2];
    console.log(arr);
    console.log(original);
    
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
    console.log(rectangle1.right,rectangle2.bottom);
    console.log("after margin calculation",arr);

for(let i=0;i<2;i++){
  let j=(i==0)?1:0;

    if(arr[i].left<=arr[j].left && arr[i].right<=arr[j].right
    && arr[i].top<=arr[j].top && arr[i].bottom<=arr[j].bottom){

         if(original[j].top!==undefined){
              original[j].top=original[j].top-arr[i].top;
         }

         if(original[j].bottom!==undefined){
           original[j].bottom=original[j].bottom-arr[i].bottom;
         }

         if(original[j].left!==undefined){
           original[j].left=original[j].left-arr[i].left;
         }

         if(original[j].right!==undefined){
           original[j].right=original[j].right-arr[i].right;
         }
     original[i].children.push(original[j]);
console.log("result",original[i]);
     break; 
    }
}

console.log("after detection",arr);
console.log("result",original);

}

module.exports = updateStructure;
