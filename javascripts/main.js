// console.log('This main JS file.');
window.addEventListener("load", function(event) {
  $('#main_content').headsmart();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-130207-15', 'auto');
  ga('send', 'pageview');
});

window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000000",
        "text": "#ffffff"
      },
      "button": {
        "background": "silver",
        "text": "grey",
        "border": "red"
      }
    }
  })
});
