function Entry(title, body){
  this.title= title;
  this.body= body;
}

Entry.prototype.getNumWords = function () {
  return this.body.split(" ").length;
};

exports.entryModule = Entry;
