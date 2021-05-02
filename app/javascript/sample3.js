//関数  substringは文字列に対して実行できるメソッド。
//substringは第１引数に開始位置（必ず０から始める）、第２引数に終了位置を指定
const word1 = "ぱいなっぷる"
let word2 = ""
if(word1.length >= 4){
  word2 = word1.substring(0,3)
}else{
  word2 = word1
}
console.log(word2)

//文字列が４文字以上の場合３文字にトリミングする処理
function trimmingText(text){
  if (text.length >=4){
    return text.substring(0,3)
  }else{
    return text
  }
}
const word3 = "ぱいなっぷる"
const word4 = "サクランボ"
const word5 = trimmingText(word3)
const word6 = trimmingText(word4)
console.log(word5)
console.log(word6)

//関数宣言
function AdditionNumber(num1,num2){
  const answer = num1 + num2
  return answer
}
const answer1 = AdditionNumber(1,20)
console.log(answer1)

//関数式（結果は上の関数宣言と同じ
const AdditionNumber2 = function(num3,num4){
  const answer2 = num3 + num4
  return answer2
}
const answer3 = AdditionNumber2(1,20)
console.log(answer3)
