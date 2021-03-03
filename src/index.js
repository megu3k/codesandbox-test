// /**
//  * const,let変数宣言
//  */
// var val1 = "var変数宣言";
// console.log(val1);

// // var変数は上書き可能
//  val1 = "var変数を上書き"
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言"
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "letは上書き可能"
// console.log(val2);

// // letは再宣言不可

const val3 = "const変数";
console.log(val3);

//　const変数は上書き不可能

// constで定義したオブジェクトのプロパティは変更が可能
// const val4 = {
//   name: "meg",
//   age:0,
// };
// val4.name="megu";
// val4.addres ="yokohama";
// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
