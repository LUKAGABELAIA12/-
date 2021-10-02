var deathReasons = ["ნათელა", "გვანცა", "მარი", "ნინი", "ანი", "თამარ", "თათია", "ანასტასია", "კესარია", "შორენა", "რუსუდან", "თათული", "თეა",  "თაკო", "თამთა",  "კატო" ,"ქრისტი<br>ლაბაძე"]   

function death() {
  var reason = Math.floor(Math.random() *17);



  document.getElementById("button").innerHTML =deathReasons[reason];


}