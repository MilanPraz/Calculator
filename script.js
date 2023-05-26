let numbers=document.querySelectorAll(".num")
let result=document.querySelector(".screen span")
let signs=document.querySelectorAll(".sign")
let equals=document.querySelector(".equalbtn")
let negative=document.querySelector(".neg")
let acbtn=document.querySelector(".ac")
let percent=document.querySelector(".percent")
let del=document.querySelector(".del")

let firstnum=""
let isfirstvalue=false;
let issecondvalue=false;
let secondnum=""
let sign=""
let issign=false;
let resultvalue=0;
let eqndisplay=""


for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",(e)=>{
        let value=e.target.innerHTML;
        console.log(value);
        if(isfirstvalue===false){
            firstvalue(value);
            
        }
        if(issecondvalue===false){
            secondvalue(value);
        }
        
    })
}
for(let i=0;i<signs.length;i++){
    signs[i].addEventListener("click",(e)=>{
        value=e.target.innerHTML;
        if(issign===false){
            signvalue(value);
        }

    })
}   


function firstvalue(v){
    // result.innerHTML="";
    
    // firstnum= +firstnum;

    firstnum+=v;

    eqndisplay+=v;
    result.innerHTML=eqndisplay;
    console.log(firstnum)
    
    checklength();
    console.log(firstnum)
}

function signvalue(v){
    if(resultvalue===""){
    eqndisplay+=v;
    
    
    sign=v;
    result.innerHTML=eqndisplay;
    isfirstvalue=true;
    }else{
        sign=v;
        eqndisplay=firstnum+v;  //it is for second time when operation done in the result again

        result.innerHTML=eqndisplay;
        isfirstvalue=true;
        // if()
        console.log(firstnum)
        console.log(eqndisplay)

    }


    

}

function secondvalue(v){
    if(firstnum!="" && sign!=""){
        // eqndisplay=`${eqndisplay}${v}`;
        eqndisplay+=v;
        secondnum+=v;
    
        result.innerHTML=eqndisplay;
       
        console.log(secondnum)
        
    }
    // if(sign="" && isfirstvalue===true){
    //     firstnum="";
    //     firstnum+=v;
    //     console.log(firstnum)

    // }

    checklength();
  

   
}

equals.addEventListener("click",()=>{

    result.innerHTML="";

    if(sign==="+"){
        resultvalue= Number(firstnum) +Number(secondnum);
    
    }
    else if(sign==="-"){
        resultvalue= Number(firstnum) -Number(secondnum);
    }
    else if(sign==="*"){
        resultvalue= Number(firstnum)*Number(secondnum);
    }
    else if(sign==="/"){
        resultvalue= Number(firstnum)/Number(secondnum);
    }

    result.innerHTML=resultvalue;
    // console.log(resultvalue)
    firstnum=resultvalue;
    secondnum=""
    // eqndisplay=""
    
    checklength();

})

function checklength(){

    let resultValue=JSON.stringify(resultvalue);
    let eqnlength=JSON.stringify(eqndisplay)
    let firstlen=JSON.stringify(firstnum)
    if(resultValue.length>12||eqnlength.length>12||firstlen.length>12){

        result.style.fontSize="24px"
    }
}


negative.addEventListener("click",()=>{
    result.innerHTML=""
    let temp;
    if(firstnum!=""){
     temp=-firstnum;

    }
    firstnum=temp;
    result.innerHTML=temp;


})
percent.addEventListener("click",()=>{
    result.innerHTML=""
    let temp;
    if(firstnum!=""){
     temp=firstnum/100;

    }
    firstnum=temp;
    result.innerHTML=temp;


})


acbtn.addEventListener("click",()=>{
    result.innerHTML=0;
    firstnum="";
    isfirstvalue=false;
    secondnum="";
    resultvalue=0;
    sign=""
    eqndisplay=""
    
})


del.addEventListener("click",()=>{
    
    // resultvalue=JSON.stringify(resultvalue);
    // resultvalue.slice(0,-1);
    // result.innerHTML=resultvalue;

   let rand= result.innerHTML.toString().slice(0,-1);
    result.innerHTML=rand;


})


