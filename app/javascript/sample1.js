//アラートの表示
alert("アラートを表示")

//文字列の操作
let my = "カレー"
console.log(my)

const word1 = "カレー"
const word2 = "ラーメン"
console.log(word1 + word2)
console.log(word1 + "と" + word2)

//数値の操作
const string = "1"
console.log(string)     //文字列はコンソールで黒字表示
const integer = 2
console.log(integer)    //数値コンソールで青字表示

//数値の計算
console.log(string+ string)   //コンソールで１１と表示
console.log(integer+integer)  //2+2でコンソールで４と表示

//for文
for (let i=0; i<10; i++) {
  console.log(i)
}

//for文と配列
const myFruits = ["リンゴ","みかん","すいか"]
let text = "私の好きな果物は"
for (let i=0; i<myFruits.length; i++){
  text += myFruits[i]
  if(i !==myFruits.length-1){
    text += "と"
  }
}
text += "です。"
console.log(text)

//forEachと配列（出力結果は上と同じ）

 myFruits.forEach(function(myFruit,i){
   text += myFruit
   if(i !== myFruits.length-1){
     text += "と"
   }
 })
 text += "です。"
 console.log(text)