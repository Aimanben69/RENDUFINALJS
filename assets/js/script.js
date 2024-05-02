const title = document.querySelector("h1")
const description = document.querySelector("#description")
const articles = document.querySelector(".articles")


fetch("assets/js/Chocolatier.json")
  .then(response => response.json())
  .then(data => {
    title.innerText = data.nomCommercial
    description.innerText = data.phraseAccroche
    const temoignages = data.temoignages

    temoignages.forEach(temoignage => {
      console.log(temoignage)

      const article = document.createElement("div")
      article.classList.add("article")

      const h2 = document.createElement("h3")
      h2.innerText = temoignage.prenom
      article.appendChild(h2)

      const h5 = document.createElement("h5")
      h5.innerText = temoignage.note
      article.appendChild(h5)

      const h3 = document.createElement("h4")
      h3.innerText = temoignage.typePrestation
      article.appendChild(h3)

      const p = document.createElement("p")
      p.innerText = temoignage.commentaire
      article.appendChild(p)



      articles.appendChild(article)
    })

    })