const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    //context.fillStyle = 'blue';
    let grd = context.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(1, "pink");
    grd.addColorStop(0, "white");
    context.fillStyle = grd;
    context.fillRect(0, 0, width, height);
    context.lineWidth = width*0.01;
    const w = width * 0.10;
		const h = height * 0.10;
		const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = width * 0.17;
    const off = width * 0.02;
    let x, y;

		for(let i=0; i<5; i++){
			for (let j= 0; j < 5; j++){

				x = ix + (w + gap) * i;
				y = iy + (h + gap) * j;
				context.beginPath();
				context.rect(x, y, w, h);
				context.stroke();	
				context.beginPath();
				context.rect(x + off/2, y + off/2, w - off, h - off)
				context.strokeStyle = 'rgb(' + Math.floor(Math.random() * 250) +',' + Math.floor(Math.random() * 250) +',' + Math.floor(Math.random() * 250) + ')';
        context.stroke();
				
			}	
		}
  };
};

canvasSketch(sketch, settings);
