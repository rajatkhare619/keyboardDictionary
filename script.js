
    /*function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     if(!audio) return;
     audio.currentTime=0;
     audio.play();
     key.classList.add('playing');
     }
     function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
     this.classList.remove('playing');
     }
     const keys = document.querySelectorAll('.key');
     keys.forEach(key => key.addEventListener('transitionend', removeTransition));

     window.addEventListener('keydown', playSound);
     const key = 'j4501LfAVU4y08rGuS1UKeGfTUlICrtG';
     */
    window.addEventListener('keydown', getWord);

function getWord(e) {
    const xhr = new XMLHttpRequest();


    xhr.open('GET', 'https://wordsapiv1.p.mashape.com/words/?letterPattern=^' + e.key +'[a-zA-Z]*$&random=true', true);
    // xhr.open('GET', 'https://wordsapiv1.p.mashape.com/words/' + word, true);

    xhr.setRequestHeader('X-Mashape-Authorization', 'S2yzcnfzJYmshP9lPEbZ0hqUvB6zp1u4Z1MjsnDNehu39QOUD5');

    xhr.send();
    xhr.addEventListener('readystatechange', processRequest, false);

    function processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            //console.log(response.results.data[43]);
            word = response.word;
            console.log(word);
            if (response.hasOwnProperty('results')) {
                console.log(response.results[0].definition);
            } else {
                console.log('no def');
                getWord(e);
            }
        } else {
            console.log(xhr.status);
        }
    }
    //  return res;
}
let res='';
let word = '';
console.log(word);


function searchWord(word) {
    const xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://wordsapiv1.p.mashape.com/words/?letterPattern=^a.{3}$&page=4', true);
    xhr.open('GET', 'https://wordsapiv1.p.mashape.com/words/' + 'cat', true);

    xhr.setRequestHeader('X-Mashape-Authorization', 'S2yzcnfzJYmshP9lPEbZ0hqUvB6zp1u4Z1MjsnDNehu39QOUD5');

    xhr.send();
    xhr.addEventListener('readystatechange', processRequest, false);

    function processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    }
}

//searchWord('beer');
//console.log(getWord());

//console.log(searchWord('rat'));
/*$.ajax({
 url: 'https://wordsapiv1.p.mashape.com/words/example', // The URL to the API. You can get this in the API page of the API you intend to consume
 type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
 data: {}, // Additional parameters here
 dataType: 'json',
 success: function(data) { console.log((data)); },
 error: function(err) { alert(err); },
 beforeSend: function(xhr) {
 xhr.setRequestHeader("X-Mashape-Authorization", "S2yzcnfzJYmshP9lPEbZ0hqUvB6zp1u4Z1MjsnDNehu39QOUD5"); // Enter here your Mashape key
 }
 });*/
/*if (window.Promise) {
 const promise = new Promise(function (resolve, reject) {
 const request = new XMLHttpRequest();

 request.open('GET', 'https://wordsapiv1.p.mashape.com/words/example');
 request.setRequestHeader('X-Mashape-Authorization', 'S2yzcnfzJYmshP9lPEbZ0hqUvB6zp1u4Z1MjsnDNehu39QOUD5');
 request.onload = function () {
 if (request.status === 200) {
 resolve(request.response);
 } else {
 reject(Error(request.statusText));
 }
 };

 request.onerror = function () {
 reject(Error('Error fetching data'));
 };

 request.send();
 });
 promise.then(function (data) {
 console.log(data);
 }, function (error) {
 console.log(error);
 }
 );

 } else {
 console.log('no promise');
 }*/

