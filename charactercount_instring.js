// find no. of character  occurance in string using charAt method

function charatercount(str,letter){
    let len =  str.length;
    var letter_Count = 0;
    for (let i=0; i<len; i++){
        if(str.charAt(i)==letter){
            letter_Count += 1;
        }
    }
    console.log(letter_Count);
}
charatercount('vikaasshhkkuummarr','r')
//output 2


//Find No. of charactor in given string

function charatercount1(str,letter){
    let len =  str.length;
    var letter_Count = 0;
    for (let i=0; i<len; i++){
        if(str[i]==letter){
            letter_Count += 1;
        }
        console.log(str[i]);
    }
    console.log(letter_Count);
}

// find the no. of each charactor  in string 

function count_character(str){
    let data = {};
    for(let i =0; i<str.length; i++){
        if(data.hasOwnProperty(str[i])){
            data[str[i]] +=1;
        }else{
            data[str[i]] =1;
        }
        
    }
    console.log(data);

}
count_character("vikash kumar singh");

