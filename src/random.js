export default function getRandomnum(length){
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charLength =  characters.length;
  for(let i = 0;i< length ;i++){
    result += characters.charAt(Math.floor(Math.random()*charLength))  
  }
  return result;
}