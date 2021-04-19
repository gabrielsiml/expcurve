import React, { Component } from "react";
import Sketch from "react-p5";

function expcurv(step) {
  var exp = 2.5;
  var incr = 2;
  return Math.pow(step * incr, exp) / Math.pow(incr * 120, exp - 1);
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

    for (i = 1; i < 121; i++) {
      //p5.rect(i*20, i*20,20,20);
      p5.line(expcurv(i), 10, expcurv(i + 2.5), 200);
    }

    p5.pop();
    p5.translate(20, 0);

    for (i = 0; i < 121; i++) {
      p5.line(i * 2, 10, i * 2.5, 400);
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
