//string methods
//javascript string are primitive datatype
//that is used to work with texts

//there are 3 ways to use string

//1.single quotation ==> ''
//2.double quotation => ""
//3.template quoataion ==> `` (back ticks)

let a = 'manasa'
let b = "manasa"
let c = `manasa`
console.log(a,b,c)
console.log(b[3])
console.log(a[0])
console.log(c[4])

console.log(a.length)//.length mean how many letter are present in the variable.
//output 6

//in javascript its case sensitive 
//a not equal to A 
//c is not equal to C 
console.log("c" == "C")
console.log("a" == "A")// in js lower case a and upper case are not equal 

//in js to add new lines in string
//use \n
console.log("i am\n manasa\n dade")
console.log("persuing\n engineering")

//STRING METHOD-1- .charAt()
let friend = "bhagya"
console.log(friend.charAt(3))
//charat takes indeax value and gives string element
//of that index

//METHOD-2 - .indexof
let global = "collage"
console.log(global.indexOf("c"))
console.log(global.indexOf("s"))

//METHOD-3- concat

let a1 = "manasa"
let a2 = "dade"
let a3 = a1.concat(a2)
console.log(a3)
console.log(a1.concat(a2))

//METHOD-4 .includes
let check = "javascript is easy"
console.log(check.includes("easy"))
console.log(check.includes("JAVA"))

/*//METHOD-5   .lastindexof
let m = "global"
console.log(m.indexof("l"))
cobsole.log(m.lastindexof("l"))*/

//METHOD-6 .length
 let lang = "java"
 console.log(lang.length)

 //METHOD-7 .repeat()
 let m1 = "helo world"
 console.log(m1.repeat(10))
  console.log(m1.repeat(0))

  //METHOD-8 .replace()
  let m2 = "ball bat"
  console.log(m2.replace("b","C"))

  //METHOD-9 .repleceAll()
  console.log(m2.replaceAll("b","C"))
  
  //METHOD-10  .startswith()
  //METHOD-11  .endswith()
let m3 = "learning in javascript"
  console.log(m3.startsWith("learning"))
  console.log(m3.startsWith ("java"))

 console.log(m3.endsWith("javascript"))
 console.log(m3.endsWith("learning"))

 //METHOD- 15 slice(index,length)
let A1 = "manasa"
//index 012345
//length 123456
console.log (A1.slice(3,5))

//METHOD- 16 split()
let A2 = "manasa/bhagya/taj/sanketh/adhina/nandhu"
console.log(A2.split("/"))

let A3 = "manasa bhagya taj sanketh adhina nandhu"
console.log(A3.split(" "))

