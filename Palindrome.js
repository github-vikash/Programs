function palindrome_string(str){
    let palidrome_string='';
    let len = str.length;
    for(let i = len - 1; i >= 0; i--){
        palidrome_string = palidrome_string + str.charAt(i)
    }
    if(palidrome_string === str){
        console.log(palidrome_string,'is Palindrome')
    }
    else{
        console.log(palidrome_string,'is not Palindrome')
    }
}

palindrome_string("testset")