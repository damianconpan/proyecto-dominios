document.addEventListener('DOMContentLoaded', function() {
    let pronoun = ['the', 'our', 'my', 'your', 'their', 'this', 'that'];
    let adj = ['great', 'big', 'small', 'awesome', 'fantastic', 'amazing', 'wonderful'];
    let noun = ['jogger', 'racoon', 'website', 'company', 'adventure', 'journey', 'dream'];
  
    let domainListElement = document.getElementById('domainList');
    let numberOfDomains = pronoun.length * adj.length * noun.length;
  
    for (let i = 0; i < numberOfDomains; i++) {
      let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
      let randomAdj = adj[Math.floor(Math.random() * adj.length)];
      let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  
      let domain = randomPronoun + randomAdj + randomNoun + ".com";
      domainListElement.innerHTML += `<p>${domain}</p>`;
    }
  });