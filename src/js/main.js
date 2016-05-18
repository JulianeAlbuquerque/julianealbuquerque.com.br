(function() {
  var ele = document.documentElement(".years-old");
      d = new Date();
      year = d.getFullYear();
      month = d.getMonth();

  if (month < 6) {
    ele.innerHTML = (year - 1) - 1991
  } else {
    ele.innerHTML = year - 1991
  }
}());
