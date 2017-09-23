console.log('here');

// var indexCard = d3.select('svg');

var indexCard = d3.select('body').append('svg')
	.attr('width', '800')
	.attr('height', '600')

console.log('indexCard');

var clicked = true;

//LEFT EYE STARTS HERE

indexCard.append('circle')
	.attr('cx', 275)
	.attr('cy', 200)
	.attr('r', 150)
	.attr('fill', 'red')
	.attr('class', 'fifth')
	.on('mouseover', function(d){
		d3.select(this).attr('fill','white')
	})
	.on('mouseout', function(d){
		d3.select(this).attr('fill','red')
	});

	indexCard.append('circle')
		.attr('cx', 275)
		.attr('cy', 200)
		.attr('r', 125)
		.attr('fill', 'gold')
		.on('mouseover', function(d){
			d3.select(this).attr('fill','white')
		})
		.on('mouseout', function(d){
			d3.select(this).attr('fill','gold')
		});

		indexCard.append('circle')
			.attr('cx', 275)
			.attr('cy', 200)
			.attr('r', 100)
			.attr('fill', 'GreenYellow')
			.on('mouseover', function(d){
				d3.select(this).attr('fill','white')
			})
			.on('mouseout', function(d){
				d3.select(this).attr('fill','GreenYellow')
			});

			indexCard.append('circle')
				.attr('cx', 275)
				.attr('cy', 200)
				.attr('r', 75)
				.attr('fill', 'navy')
				.on('mouseover', function(d){
					d3.select(this).attr('fill','white')
				})
				.on('mouseout', function(d){
					d3.select(this).attr('fill','navy')
				});

				indexCard.append('circle')
					.attr('cx', 275)
					.attr('cy', 200)
					.attr('r', 50)
					.attr('fill', 'DarkTurquoise')
					.on('mouseover', function(d){
						d3.select(this).attr('fill','white')
					})
					.on('mouseout', function(d){
						d3.select(this).attr('fill','DarkTurquoise')
					});
					//LEFT EYE ENDS HERE

					//RIGHT EYE STARTS HERE
					indexCard.append('circle')
						.attr('cx', 625)
						.attr('cy', 200)
						.attr('r', 150)
						.attr('fill', 'red')
						.attr('class', 'fifth')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','red')
						});

						indexCard.append('circle')
							.attr('cx', 625)
							.attr('cy', 200)
							.attr('r', 125)
							.attr('fill', 'gold')
							.on('mouseover', function(d){
								d3.select(this).attr('fill','white')
							})
							.on('mouseout', function(d){
								d3.select(this).attr('fill','gold')
							});

						indexCard.append('circle')
								.attr('cx', 625)
								.attr('cy', 200)
								.attr('r', 100)
								.attr('fill', 'GreenYellow')
								.on('mouseover', function(d){
									d3.select(this).attr('fill','white')
								})
								.on('mouseout', function(d){
									d3.select(this).attr('fill','GreenYellow')
								});

							indexCard.append('circle')
									.attr('cx', 625)
									.attr('cy', 200)
									.attr('r', 75)
									.attr('fill', 'navy')
									.on('mouseover', function(d){
										d3.select(this).attr('fill','white')
									})
									.on('mouseout', function(d){
										d3.select(this).attr('fill','navy')
									});

							indexCard.append('circle')
										.attr('cx', 625)
										.attr('cy', 200)
										.attr('r', 50)
										.attr('fill', 'DarkTurquoise')
										.on('mouseover', function(d){
											d3.select(this).attr('fill','white')
										})
										.on('mouseout', function(d){
											d3.select(this).attr('fill','DarkTurquoise')
										});

						//RIGHT EYE ENDS HERE
						//RIGHT EYE ENDS HERE

						indexCard.append('rect')
						.attr('x', 250)
						.attr('y', 400)
						.attr('width', 400)
						.attr('height',200)
						.attr('fill', 'red')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','red')
						});

						indexCard.append('rect')
						.attr('x', 262.5)
						.attr('y', 412.5)
						.attr('width', 375)
						.attr('height',175)
						.attr('fill', 'gold')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','gold')
						});

						indexCard.append('rect')
						.attr('x', 275)
						.attr('y', 425)
						.attr('width', 350)
						.attr('height',150)
						.attr('fill', 'GreenYellow')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','GreenYellow')
						});

						indexCard.append('rect')
						.attr('x', 287.5)
						.attr('y', 437.5)
						.attr('width', 325)
						.attr('height',125)
						.attr('fill', 'navy')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','navy')
						});

						indexCard.append('rect')
						.attr('x',300)
						.attr('y', 450)
						.attr('width', 300)
						.attr('height',100)
						.attr('fill', 'DarkTurquoise')
						.on('mouseover', function(d){
							d3.select(this).attr('fill','white')
						})
						.on('mouseout', function(d){
							d3.select(this).attr('fill','DarkTurquoise')
						});
