/**
 * @author Sharanya Haridas
 */

/*an array of the images in the slideshow*/
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"];

/*first image in the array*/
var index = 0;

function Nav(){
	console.log("Nav");
	
	
	$(".button").on("click", function() {
		
		var Next = $(this).hasClass("next");
		
		/*if the the Next button is clicked on, slideshow displays the next image in the array, else, it shows the previous image*/
		
		if  (Next ==true && index != (images.length-1)) {
			
			index =index+1;
		}
		else if (Next== false && index >0) {
		
			index=index-1;
			
		}
		
		/*if slideshow is on the first image, the "Back" button is disabled*/
		
		/*but if slideshow is on the last image, the "Next" button is disabled*/
	
		
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

/*this function updates the image holder as the buttons are pushed and images scrolled through*/
function updateMImage() {
	
	console.log(images[index]);
	$(".image-holder").html(
		"<img src='images/" + images[index] + "'/>"
	);

}

/*this function updates the image holder as the buttons are pushed and images scrolled through*/

$(document).ready(function() {
	console.log("testing");
	
	/*the image holder pulls up the array of images*/
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>"
	
	);
	/*the back button is disabled*/
	
		$(".button.back").addClass("disabled");
		
		/*the function Nav that lets you navigate through the slideshow is brought on*/
	Nav();
});

console.log(images);