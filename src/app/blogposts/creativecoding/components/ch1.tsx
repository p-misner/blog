import { ThemeContext } from "@/app/components/providers";
import { useContext } from "react";

let walker: Walker;
let i: number;

export const randomWalkDraw = ({ ctx }: { ctx: CanvasRenderingContext2D }) => {
  walker.step();
  walker.show(ctx);
};

export const randomWalkSetup = ({
  canvas,
  ctx,
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}) => {
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  walker = new Walker(canvas);
};

export const draw2 = ({ ctx }: { ctx: CanvasRenderingContext2D }) => {
  ctx.beginPath();
  ctx.arc(50 + i, 50 + i, 30, 0, 2 * Math.PI);
  ctx.fillStyle = `rgba(0,0,0,0.2)`;
  ctx.fill();
  ctx.lineWidth = 3;
  // ctx.strokeStyle = "red";
  // ctx.stroke();
  i += 10;
};

export const setup2 = ({
  canvas,
  ctx,
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}) => {
  i = 0;
  ctx.fillStyle = `rgba(100,240,240,1)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

class Walker {
  x: number;
  y: number;
  canvasHeight: number;
  canvasWidth: number;
  // Objects have a constructor where they are initialized.
  constructor(canvas: any) {
    // Objects have data.
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;
  }

  show(ctx: CanvasRenderingContext2D) {
    let radius = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(50,50,250,0.2)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    // point(this.x, this.y);
  }

  step() {
    let xStep = Math.floor(Math.random() * 3) - 1;
    let yStep = Math.floor(Math.random() * 3) - 1;

    const stepSize = 4;
    if (
      stepSize * xStep + this.x < 0 ||
      stepSize * xStep + this.x > this.canvasWidth ||
      stepSize * yStep + this.y < 0 ||
      stepSize * yStep + this.y > this.canvasHeight
    ) {
      this.x = this.x;
      this.y = this.y;
    } else {
      this.x = stepSize * xStep + this.x;
      this.y = stepSize * yStep + this.y;
    }

    // this.x + stepSize * xStep > this.canvasWidth
    //   ? this.x
    //   : this.x + stepSize * xStep < 0
    //   ? this.x
    //   : (this.x += stepSize * xStep);

    // } else if (num == 1) {
    //   this.x - stepSize < 0 ? this.x : (this.x -= stepSize);
    // } else if (num == 2) {
    //   this.y + stepSize > this.canvasHeight ? this.y : (this.y += stepSize);
    // } else {
    //   this.y - stepSize < 0 ? this.y : (this.y -= stepSize);
    // }
  }
}
