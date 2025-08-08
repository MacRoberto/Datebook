function init() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id:
        "462807780220-fdvduagjtlr4451st8co0288i9k2vmrn.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
    });
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr("src", profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-sining2").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("You have been signed out successfully");
    $(".g-sining2").css("display", "block");
    $(".data").css("display", "none");
  });
}
