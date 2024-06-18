// src/Dice.js
import { useRef, useEffect } from "react";

const Dice = ({ text }: { text: string }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current !== null && canvasRef.current as any;

    const ctx = canvas.getContext("2d");

    function drawDice() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const x = 15;
      const y = 30;
      const size = 120;

      // Desenhar as faces do cubo
      drawFace(ctx, x, y, size, "front");
      drawFace(ctx, x, y, size, "top");
      drawFace(ctx, x, y, size, "side");

      // Desenhar os pontos na face frontal
      // drawDot(ctx, x + size / 1.4, y + -30); // Centro (número 1)
      drawText(ctx, x + size / 2, y + size / 2, text);
    }

    function drawFace(ctx : any, x : number, y : number, size : number, face : string) {
      ctx.beginPath();
      switch (face) {
        case "front":
          ctx.moveTo(x, y);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x + size, y + size);
          ctx.lineTo(x, y + size);
          ctx.closePath();
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.stroke();
          break;
        case "top":
          ctx.moveTo(x, y);
          ctx.lineTo(x + size / 7, y - size / 7);
          ctx.lineTo(x + size + size / 7, y - size / 7);
          ctx.lineTo(x + size, y);
          ctx.closePath();
          ctx.fillStyle = "#DDDDDD";
          ctx.fill();
          ctx.stroke();
          break;
        case "side":
          ctx.moveTo(x + size, y);
          ctx.lineTo(x + size + size / 7, y - size / 7);
          ctx.lineTo(x + size + size / 7, y + size / 1 - size / 7);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();
          ctx.fillStyle = "#BBBBBB";
          ctx.fill();
          ctx.stroke();
          break;
        default:
          break;
      }
    }

    /* 
     function drawDot(ctx : any, x : number, y: number) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
    }
    */
   
    drawDice();
  }, [text]);

  function drawText(ctx : any, x : number, y : number, text : string) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
  }

  return (
    <canvas
      ref={canvasRef}
      width={160}
      height={160}
      style={{ transform: "scaleX(1)" }}
    />
  );
};

export default Dice;
