class rope{
	constructor(body1,body2, lengthX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.lengthX = lengthX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

	//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
    line(pointA.x,pointA.y,pointB.x+this.lengthX,pointB.y);
	}

}