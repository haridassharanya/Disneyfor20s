/**
 * @author Sharanya Haridas
 */

var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"];

var index = 0;

function Nav(){
	console.log("Nav");
	
	$(".button").on("click", function() {
		
		var Next = $(this).hasClass("next");
		
		if  (Next ==true && index != (images.length-1)) {
			
			index =index+1;
		}
		else if (Next== false && index >0) {
		
			index=index-1;
			
		}
		
		
		
		if (index == 0) {
			
			console.log("testing");
			
			$(".button.back").addClass("disabled");
		}
		else if (index == (images.length-1))
	{ $(".button.next").addClass("disabled");
	} else {
		$(".button").removeClass("disabled");
		}
		
		updateMImage();
		
	
	});
	
}

function updateMImage() {
	
	console.log(images[index]);
	$(".image-holder").html(
		"<img src='images/" + images[index] + "'/>"
	);

}


$(document).ready(function() {
	console.log("testing");
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>"
	
	);
	
	
		$(".button.back").addClass("disabled");
		
	Nav();
});

console.log(images);