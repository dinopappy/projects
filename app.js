const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]

  const $body = $("body")

  const $div = $("<div>")
  $div.text("Add random image")
  $div.addClass("div1")
  $body.append($div)
  $div.css("border", "2px solid black")
  $div.css("height", "100px")
  $div.css("width", "100px")
  $div.css("text-align", "center")
  $div.css("background-color", "black")
  $div.css("color", "white")
  $div.css("display", "flex")

  $("div").on("click", (event) => {
    const randomPic = cards[Math.floor(Math.random() * cards.length)];
    const $img = $("<img>")
$body.append($img)
$img.attr("src", randomPic)
})