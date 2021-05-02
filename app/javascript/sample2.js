//配列の先頭を削除
const Array1 = ["りんご","みかん","スイカ"]
 Array1.shift()
 console.log(Array1)

 //配列の最後を削除
const Array2 = ["りんご","みかん","スイカ"]
 Array2.pop()
 console.log(Array2)

 //任意の数の配列を削除
 const array3 = ["りんご","みかん","スイカ"]
 array3.splice(1,2)
 console.log(array3)

 //任意の位置に配列を追加
 const array4 = ["りんご","みかん","スイカ"]
 array4.splice(1,0,"いちご")
 console.log(array4)

 //配列の切り取りslice
 const array5 = ["りんご","みかん","めろん","いちご","すいか"]
 const array6 = array5.slice(3)
 console.log(array6)

 const array7 = ["りんご","みかん","めろん","いちご","すいか"]
 const array8 = array7.slice(-3)
 console.log(array8)

 const array9 = ["りんご","みかん","めろん","いちご","すいか"]
 const array10 = array9.slice(2,4)
 console.log(array10)

 //配列のフィルタリング(filter)ーー任意の要素以外の配列を出力ーー
 const array11 = ["りんご","みかん","めろん","いちご","すいか"]
 const array12 = array11.filter(function(fruit){
   return fruit !=="めろん"
 })
 console.log(array12)

 //配列のフィルタリング(filter)ーー任意の要素配列を出力ーー
 const array13 = ["りんご","みかん","めろん","いちご","すいか"]
 const array14 = array13.filter(function(fruit){
   return fruit ==="めろん"  
 })
 console.log(array14)

 //filterとsearchメソッド
 const array15 = ["りんご","みかん","めろん","いちご","すいか"]
 const array16 = array15.filter(function(fruit){
   return fruit.search("ん") !== -1    //!== -1がないと”ん”を含む抽出されない 
 })
 console.log(array16)

 //一致する項目の最初に一致した位置を表示
 const array17 = ["りんご","いちご","めろん","いちご","すいか"]
 const array18 = array17.indexOf("いちご")  //index0fは大文字のoを使用
 console.log(array18)

 //一致する項目の最後の位置を表示
 const array19 = ["りんご","いちご","めろん","いちご","すいか"]
 const array20 = array19.lastIndexOf("いちご")  //index0fは大文字のoを使用
 console.log(array20)