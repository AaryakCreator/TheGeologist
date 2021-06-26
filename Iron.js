class Iron{
	constructor(x,y) 
	{ 
	// assign options to the rubber ball
	var options = {
		restitution: 0.1,
		friction: 1,
		density: 50
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, 50, 50, options);
        this.width = 50;
        this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("silver");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);

			pop()
	}

}