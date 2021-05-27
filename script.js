var app = document.getElementById("hero-titel");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Developer")
  .pauseFor(300)
  .deleteChars(7)
  .typeString("signer")
  .pauseFor(300)
  .deleteChars(8)
  .typeString("Student")
  .pauseFor(1000)
  .start();
