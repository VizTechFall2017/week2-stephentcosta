console.log('here');

// var indexCard = d3.select('svg');

var indexCard = d3.select('body').append('svg')
	.attr('width', '600')
	.attr('height', '400')

console.log('indexCard');

var clicked = true;

indexCard.append('circle')
	.attr('cx', 250)
	.attr('cy', 200)
	.attr('r', 10)
	.attr('fill', 'blue')
	.on('click', function(d){
		if(clicked==true) {
		d3.select(this).attr('fill', 'orange').transition().attr('r',100);
		clicked = false;
		}
		else {
		d3.select(this).attr('fill', 'blue').transition().attr('r',10);
		clicked = true;
		}
		console.log(clicked);
	})
	.on('mouseover', function(d){
		d3.select(this).attr('fill','pink')
	})
	.on('mouseout', function(d){
		d3.select(this).attr('fill','blue')
	});

indexCard.append('rect')
	.attr('x',20)
	.attr('y',20)
	.attr('width',20)
	.attr('height',20);

indexCard.append('line')
	.attr('x1',10)
	.attr('x2',20)
	.attr('y1',50)
	.attr('y1',70)
	.attr('stroke', 'purple')

indexCard.append('circle')
	.attr('cx', 100)
	.attr('cy', 100)
	.attr('r', 10)
	.attr('fill', 'teal');