(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry= require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var word_count = entry.getNumWords();
    var frequency = entry.getFrequency();
    var vowels = frequency[0];
    var consonants = frequency[1];

    $('#display').append(word_count);
    $('#vowels').append(vowels);
    $('#consonants').append(consonants);

  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/entry.js":1}]},{},[2]);
