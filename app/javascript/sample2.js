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