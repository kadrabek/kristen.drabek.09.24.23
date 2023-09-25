function strings()
{
//var str1=document links the id from the strings.html and lets the javascript know it need to push that information into that specfic spot in the html document.
    var str1 = document.getElementById("initString").value;
    //alert(str1);
//this var str2=str1.substring(0,3) lets the computer know that the substring will be in from 0,1,2,3 showing the first three letters of the word typed in. 
    var str2 = str1.substring(0,3);
    //alert("str2 = substr " + str2);
//the str2 replace was me messing with the repeat structure of the word qwerty as done in the lecture we had. 
    str2 = str1.replace(/qwe/, "asd");
    str2 = str1.replace(/qwe/i, "asd");
    //alert("replace qwe with asd " + str2);

var splitString = str1.split("");
//the var splitString is important so that the rest of the variables can work plus is splits the word up
var reverseString = splitString.reverse();
alert("reversed word = " + reverseString);
//the var reverseString allows the whole string to be reversed and allows the computer to check the reverse structure of a word
var joinString = reverseString.join("");
//the var joinString is the final variable to let the palindrome checker work. 

//palindrome checker this if else statement allows the palindrome checker to actually work. 
    if (str1 ==joinString)
    {
        alert("this is a palindrome");
    }
    else
    {
        alert("this is not a palindrome");
    }
}