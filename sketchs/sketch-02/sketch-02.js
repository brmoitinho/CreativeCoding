const canvasSketch = require('canvas-sketch');
const  math = require('canvas-sketch-util/math')
const  random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#FFFDA8';
    context.fillRect(0, 0, width, height);
    let grd = context.createLinearGradient(0, 100, 200, 0);
    grd.addColorStop(1, "red");
    grd.addColorStop(0, "pink");
    context.fillStyle = grd;
    const cx = width *0.5;
    const cy = height *0.5;
    const w = width *0.01;
    const h = height *0.1;
    let x, y;
    const num = 66;
    const radius = width * 0.33;
    for (let i = 0; i < num; i++){
      const slice = math.degToRad(360/num);
      const angle = slice * i;
      x = cx + radius*Math.sin(angle)
      y = cy + radius*Math.cos(angle) 
      context.save();
      context.translate(x,y);
      context.rotate(-angle);    

      context.scale(random.range(0.1,3), random.range(0.5, 1));
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h *1),w,h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.lineWidth = random.range(5,25);
      context.beginPath();
      context.arc(0,0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice*random.range(0, 5));
      context.stroke();
      context.restore();
    }
    
  };
};

canvasSketch(sketch, settings);
