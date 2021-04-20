import React, { Component } from "react";
import Sketch from "react-p5";
var exp = 0.6;
var incr = 10;
var itera = window.innerWidth / (incr * 1.2);
function expcurv(step) {
  return Math.pow(step * incr, exp) / Math.pow(incr * itera - incr, exp - 1);
}
export default class App extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    p5.noLoop();
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    var i = 0;
    p5.push();
    p5.translate(20, 0);

    for (i = 0; i < itera; i++) {
      //p5.rect(i*20, i*20,20,20);
      p5.line(expcurv(i), 10, expcurv(i), 200);
    }

    p5.pop();
    p5.translate(20, 0);

    for (i = 0; i < itera; i++) {
      p5.line(i * incr, 201, i * incr, 400);
    }
    p5.fill(255);
    p5.textStyle(p5.BOLD);
    p5.textSize(140);
    //p5.text("p5*", 60, 250);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
