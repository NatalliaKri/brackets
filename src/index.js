module.exports = function check(str, bracketsConfig) {
  
  let str1 = str.split('');
  
  for(let i = 0; i < str1.length; i++){
	 
	for(let j = 0; j < bracketsConfig.length; j++){
		if( str1[i] === bracketsConfig[j][0] && str1[i + 1] === bracketsConfig[j][1]){
			str1.splice(i, 2);
		  
		    i = -1;
			 
            }	
		}	
	} 
  
  if(str1.length !== 0 )return false;
   else return true;
}
