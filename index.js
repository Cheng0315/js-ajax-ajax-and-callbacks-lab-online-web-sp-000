$(document).ready(function (){

});

function searchRepositories() {
  const req = new XMLHttpRequest();
  let searchTerm = document.getElementById('searchTerm').value;
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/search/repositories?q=${searchTerms}`);
  req.send();
}
