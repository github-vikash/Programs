function word_count(str){
    let word=[]=str.split(" ");
    let data = {};
    for(let i =0; i< word.length; i++){
        if(data.hasOwnProperty(word[i])){
            data[word[i]]+=1;
        }else{
            data[word[i]]=1;
        }
    }
    console.log(data)
}

function given_word_count(str,word){
    let splitedword=[]=str.split(" ");
    let count=0;
    for(let i=0; i< splitedword.length; i++){
        if(splitedword[i]==word){
            count +=1;
        }
    }
    console.log(word,'present in ',str  ,'is',count);
}

given_word_count("vikash kumar sing vikash kuma singh","vikash");
word_count("vikash kumar sing vikash kuma singh");