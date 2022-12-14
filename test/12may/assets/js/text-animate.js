jQuery(document).ready(function($){
//set animation timing
var animationDelay = 2500,
  //loading bar effect
  barAnimationDelay = 3800,
  barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //letters effect
  lettersDelay = 50,
  //type effect
  typeLettersDelay = 150,
  selectionDuration = 500,
  typeAnimationDelay = selectionDuration + 800,
  //clip effect 
  revealDuration = 600,
  revealAnimationDelay = 1500;

initHeadline();


function initHeadline() {
  //insert <i> element for each letter of a changing word
  singleLetters($('.av-heading.animate-2').find('b'));
  singleLetters($('.av-heading.animate-3').find('b'));
  singleLetters($('.av-heading.animate-8').find('b'));
  singleLetters($('.av-heading.animate-9').find('b'));
  //initialise headline animation
  animateHeadline($('.av-heading'));
}

function singleLetters($words) {
  $words.each(function(){
    var word = $(this),
      letters = word.text().split(''),
      selected = word.hasClass('is-show');
    for (i in letters) {
      if(word.parents('.animate-3').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
      letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
    }
      var newLetters = letters.join('');
      word.html(newLetters).css('opacity', 1);
  });
}

function animateHeadline($headlines) {
  var duration = animationDelay;
  $headlines.each(function(){
    var headline = $(this);
    
    if(headline.hasClass('animate-4')) {
      duration = barAnimationDelay;
      setTimeout(function(){ headline.find('.av-text-wrapper').addClass('is-loading') }, barWaiting);
    } else if (headline.hasClass('animate-6')){
      var spanWrapper = headline.find('.av-text-wrapper'),
        newWidth = spanWrapper.width() + 10
      spanWrapper.css('width', newWidth);
    } else if (!headline.hasClass('animate-2') ) {
      //assign to .av-text-wrapper the width of its longest word
      var words = headline.find('.av-text-wrapper b'),
        width = 0;
      words.each(function(){
        var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
      });
      headline.find('.av-text-wrapper').css('width', width);
    };

    //trigger animation
    setTimeout(function(){ hideWord( headline.find('.is-show').eq(0) ) }, duration);
  });
}

function hideWord($word) {
  var nextWord = takeNext($word);
  
  if($word.parents('.av-heading').hasClass('animate-2')) {
    var parentSpan = $word.parent('.av-text-wrapper');
    parentSpan.addClass('selected').removeClass('waiting'); 
    setTimeout(function(){ 
      parentSpan.removeClass('selected'); 
      $word.removeClass('is-show').addClass('is-hide').children('i').removeClass('in').addClass('out');
    }, selectionDuration);
    setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

  } else if($word.parents('.av-heading').hasClass('animate-2') || $word.parents('.av-heading').hasClass('animate-3') || $word.parents('.av-heading').hasClass('animate-8') || $word.parents('.av-heading').hasClass('animate-9')) {
    var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
    hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
    showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

  }  else if($word.parents('.av-heading').hasClass('animate-6')) {
    $word.parents('.av-text-wrapper').animate({ width : '2px' }, revealDuration, function(){
      switchWord($word, nextWord);
      showWord(nextWord);
    });

  } else if ($word.parents('.av-heading').hasClass('animate-4')){
    $word.parents('.av-text-wrapper').removeClass('is-loading');
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
    setTimeout(function(){ $word.parents('.av-text-wrapper').addClass('is-loading') }, barWaiting);

  } else {
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
  }
}

function showWord($word, $duration) {
  if($word.parents('.av-heading').hasClass('animate-2')) {
    showLetter($word.find('i').eq(0), $word, false, $duration);
    $word.addClass('is-show').removeClass('is-hide');

  }  else if($word.parents('.av-heading').hasClass('animate-6')) {
    $word.parents('.av-text-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
      setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
    });
  }
}

function hideLetter($letter, $word, $bool, $duration) {
  $letter.removeClass('in').addClass('out');
  
  if(!$letter.is(':last-child')) {
    setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
  } else if($bool) { 
    setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
  }

  if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
  } 
}

function showLetter($letter, $word, $bool, $duration) {
  $letter.addClass('in').removeClass('out');
  
  if(!$letter.is(':last-child')) { 
    setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
  } else { 
    if($word.parents('.av-heading').hasClass('animate-2')) { setTimeout(function(){ $word.parents('.av-text-wrapper').addClass('waiting'); }, 200);}
    if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
  }
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function takePrev($word) {
  return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-show').addClass('is-hide');
  $newWord.removeClass('is-hide').addClass('is-show');
}

});