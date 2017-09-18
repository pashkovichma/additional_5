module.exports = function check(str, bracketsConfig) {
	var i = 0;
	var flag = 0;
	var res = true;
	while(i < str.length-2){
	  	for (var j = 0; j < bracketsConfig.length; j++){
  			if (str[i] == bracketsConfig[j][0]&&str[i+1] == bracketsConfig[j][1]){
	  			str=str.slice(0,i)+str.slice(-str.length+i+2);
	  			flag=1;	
  			}
  		}
  		i++;
  		if(flag){
  			i=0;
  			flag=0;
  		}
  	}

  	for(var k=0; k<bracketsConfig.length;k++){
  		if (str[0] == bracketsConfig[k][0]&&str[1] == bracketsConfig[k][1]){
	  		str=[];
	  	}
  	}
	if (str.length){
  	var res = false;
  	}
  	return(res);
 }
