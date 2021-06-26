class Stone{
	constructor(x,y) 
	{ 
	// assign options to the rubber ball
	var options = {
		restitution: 0.1,
		friction: 1,
		density: 30
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, 30, 30, options);
        this.width = 30;
        this.height = 30;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);

			pop()
	}

}