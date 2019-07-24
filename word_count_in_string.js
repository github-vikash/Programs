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

word_count("vikash kumar sing vikash kuma singh")
// output { vikash: 2, kumar: 1, sing: 1, kuma: 1, singh: 1 }

function given_word_count(str,word){
    let splitedword=[]=str.split(" ");
    let count=0;
    for(let i=0; i< splitedword.length; i++){
        if(splitedword[i]==word){
            count +=1;
        }
    }
    console.log(word,':',count);
}

given_word_count("vikash kumar sing vikash kuma singh","vikash");

//output vikash : 2