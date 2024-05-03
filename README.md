# WorkShop_9
WS9 Project - Polaroid

****

**Link = https://nech691.github.io/WorkShop_9/**

***

Workshop Tasks
	• Make an experimental 'smart mirror' using live video capture.
	• Include manipulations at the level of the pixel.
	
Project 
	
	Ideas 
		- Make a polaroid mirror 
		
	> Goal 
		>> Create a code that uses the user's camera as a mirror simulating a polaroid photo with an input bar to add words to polaroid

	Steps 
		- Add video 
		- Add squares 
			§ Turns out, small enough circles look like squares 
		- Resize 
		- Move 
		- Polaroid 
		- Input + button
		- otf
	Skateboard 
		Display video 
		Resize 
			Smaller than canvas
		Pixalise (small quares high alfa)
		Display on top 
		Add polaroid image (or white background)
		Add input bar + button 
		Set up button 



Workshop Notes 
	
	• Working with live video captures  
		○ This can be done using a webcam or attached video device
		○ We can also manipulate live videos at the pixel level 
	
	• To work with live videos 
		1. Add a "pixelDensity(1)" function to the setup so that your pixel manipulation works on all devices
		2. Add a "createCapture(VIDEO)" [video being the argument this function takes] to your setup 
			I. This will allow us to use a webcam or attached video device to display a video on canvas 
			II. Publishing this online would then use the users webcam to run the code 
			III. Creates a new element that operates on a webpage
				- Usually, it needs to request the user's permission to use the camera
			- Live feature (live preview) does not work with this function. But go live does 
			
	• To manipulate videos 
		1. Create a variable for the image string and initialise it in the setup 
			i.e., "let webcam;" + "webcam = createCapture(VIDEO);"
		2. Now we can begin manipulating the video inside the setup
			i.e. "webcam.size(400, 400)"
		3. In your draw function you can also manipulate the video (similar to how we do with regular images)
			i.e., "image(webcam, 0, 0);"
		4. Add "webcam.hide();" to your set up to hide the original webcam video under the canvas
		
	• Introducing the ball system from WS7 & fill balls with video pixel colour 
		○ Bring the ball system from Workshop 7 into the webcam file 
		○ Once you have that working, we can make the color of the balls be filled with the color of the pixels on the screen
			
		1. Inside the Ball class and inside the show function, remove (or comment out) the line the fills the ellipses in yellow: "fill(255, 255, 0);" 
		2. Add a variable to store the color of the video's pixels   
			i.e., "let pixelColour = webcam.get(this.x, this.y)"
		3. Add a fill function referencing the pixel RGB colours
			i.e., "fill(pixelColour[0], pixelColour[1], pixelColour[2])"
		4. Remove the background, image (webcam), and the filter from your sketch
		
		• This might work as it is for some computers 
		• But we can make it run much better 
	
	• Enhancing performance
		• The main issue at the moment is the size of the video 
		 
		1. Set up a variable to hold a scale to which the video will be resized to 
			i.e., "scale = 18;"
			I. This will make it easier to change the scale later 
		2. Then change the size of the video through the setup function
			i.e., "webcam.size(width/scale, height/scale)" 
		3. Then modify the Ball class (specifically, the show function) to also include the resizing variable 
			I. Comment out the pixelColour storing variable
			II. Add a variable for x / scale 
			III. Add variable for x / scale 
			IV. Rea-add pixel colour storing variable referring to the new variables
			i.e., "let pixelColour = webcam.get(pX, pY)"
			
	• Now that we enhanced performance, we can add more to this code to make the "mirror" clearer
		1. Increase number of balls in the system (in the set up for loop) [i.e., 200]
		2. Decrease the balls' size (in set up for loop) [i.e., random(4, 30)]
		3. Add an alpha value to the balls (in the show function inside the ball class) [i.e., add (e.g.,) 120 to end of fill()]
				
![Uploading image.png…]()

