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

// const val3 = "const変数";
// console.log(val3);

//　const変数は上書き不可能

// constで定義したオブジェクトのプロパティは変更が可能
// const val4 = {
//   name: "meg",
//   age:0,
// };
// val4.name="megu";
// val4.addres ="yokohama";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
//const name = "meg";
//const age = 20;
//　私の名前は○○です。年齢は○歳です。

// 従来の方法
//const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
//console.log(message1);

//　テンプレート文字列を用いた方法
//const message2 = `私の名前は${name}です。年齢は${age}です。`;
//console.log(message2);

// /**
//  *  アロー関数
//  */
// // 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // ※直接returnのかわりに=>strができる。

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "meg",
//   age: 20
// };

//const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['meg', 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name , age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);
