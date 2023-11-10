// collego il json dei posts dentro la carte db a post.js
const posts = require("../db/posts.json");

// prova di collegamento
// posts.forEach(post => console.log(post));

module.exports.index = function(req, res) {
    /*
    const html = [];

    html.push("<ul>")
    for (const post of posts){
        // html.push(post.name);
        html.push(`<li>${post.titolo}</li>`);
    }
    html.push("</ul>")
    
    res.send(html); */
    
    const html = [];

    html.push("<ul>");

    for (const post of posts) {
      html.push(`<li>
        <h3>${post.titolo}</h3>
        
      </li>`);
    }

    html.push("</ul>");

    res.send(html.join(""));
}