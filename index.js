$(document).ready(function (){

});

function searchRepositories() {
  const req = new XMLHttpRequest();
  let searchTerm = document.getElementById('searchTerm').value;
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/search/repositories?q=${searchTerms}`);
  req.send();
}

function displayRepositories() {
  const repo = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '<a href="' + r.html_url + '">' + r.name + '</a></li>').join('')}</ul>`;

}
