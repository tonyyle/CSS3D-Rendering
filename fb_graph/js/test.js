
var facebookLogin = document.querySelector("a");

facebookLogin.addEventListener("click", function(evt) {
	evt.preventDefault();

	FB.login(function(response) {
		if (response.authResponse) {
			//console.log('Welcome! Fetching your information...');

			FB.api('/me', function(response) {
				//console.log('Good to see you, ' + response.name + '.');
				console.log(response);
			});

				/* make the API call */
				FB.api(
				    "/me/photos",
				    function (response) {
				      if (response && !response.error) {
				        /* handle the result */
				      }

				      for(var i=0; i<response.data.length; i++) {
				      	 console.log(response.data[i].source);
				      }



				    }
				);

		} else {
			console.log('User cancelled login or did not fully authorize.');
		}

	}, {scope:"user_photos"});
 });