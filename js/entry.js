function Entry(title, body){
  this.title= title;
  this.body= body;
}

Entry.prototype.getNumWords = function () {
  return this.body.split(" ").length;
};

Entry.prototype.getFrequency = function(){
  var vowels = ['aeiouAEIOU'];
  var countV= 0;
  var countC= 0;
  var counts = [];
  var str = this.body;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/i)) {
      countV+=1;
    } else if(str[i].match(/[a-z]/i)){
      countC+=1;
    }
  }
  counts.push(countV);
  counts.push(countC);
  return counts;
};


exports.entryModule = Entry;
