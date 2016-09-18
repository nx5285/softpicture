window.onload = function(){
	var btn = document.getElementsByTagName('input');
	var aLi = document.getElementsByTagName('li');
	var aSpan = document.getElementsByTagName('span');
	
	var arrSrc = [];
	var arrTxt = [];
	var arrNum =[];
	var onOff = true;
	
	for(var i = 0; i < aLi.length; i++){
		arrSrc.push(aLi[i].getElementsByTagName('img')[0].src);
		arrTxt.push(aLi[i].getElementsByTagName('span')[0].innerHTML);
		arrNum.push(i);
	}
	btn[0].onclick = function(){
		if(onOff){
			arrNum.sort(function(a,b){
				return b-a;
			})
			pic();
			console.log(pic());
			btn[0].value = '从大到小';
			onOff = false;
		}else{
			arrNum.sort(function(a,b){
				return a-b;
			})
			pic();
			btn[0].value = '从小到大';
			onOff = true;
		}
	}
	btn[1].onclick = function(){
		getNum();
		pic();
	}
	function getNum(){
		var randomNum = '';
		var str = '';
		var i = 0;
		while(i < aLi.length){
			randomNum = parseInt(Math.random()*8);
			if(str.indexOf(randomNum) === -1){
				str +=randomNum + '';
				i++
			}
		}
		arrNum.splice(0,aLi.length);
		arrNum = arrNum.concat(str.split(''))
	}
	function pic(){
		for(var i = 0; i < arrNum.length; i++){
			aLi[i].getElementsByTagName('img')[0].src = arrSrc[arrNum[i]];
			aLi[i].getElementsByTagName('span')[0].innerHTML = arrTxt[arrNum[i]];
		}
	}
}
