var bill=0,tip=0,totalTip, people=1, total;

var tipP=document.getElementById("tipP");
var totalP=document.getElementById("totalP");

var billIn= document.getElementById("bill");
billIn.addEventListener("input",()=> {bill=Number(billIn.value);
	calcResult();
				})

//tip button

var btns=document.querySelectorAll("#btns button");
btns.forEach(btn=>{
				btn.addEventListener("click",()=>{
				tip=btn.value;
				for (let i=0;i<btns.length;i++) {
						btns[i].className='';
				}
				btn.className="active";
				if (bill!=0){calcResult()}
					})
}		
);

//custome tip
var ctip= document.getElementById("ctip");
ctip.addEventListener("input",()=>{
				tip=Number(ctip.value)/100
for (let i=0;i<btns.length;i++) {
						btns[i].className='';
				}

})


var npIn=document.getElementById("np");
npIn.addEventListener("input",()=>{people=Number(npIn.value);
				calcResult()});


const calcResult=()=>{
     totalTip=bill*tip;
				total=bill + totalTip;
				totalP.innerHTML=`${(total/people).toFixed(2)}`;
				tipP.innerHTML=`${(totalTip/people).toFixed(2)}`
}

var reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
				
				bill=tip=totalTip=people=total=0;
				window.location.reload();
})
