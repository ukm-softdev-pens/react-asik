import { useEffect, useRef } from "react"

export const Canvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
    
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fillText("Hello, World!", canvasWidth / 2 - 90, canvasHeight / 2);
        ctx.font = '30px sans-serif';
        ctx.closePath();
    }, []);

    return (
        <>
            <canvas ref={canvasRef} width={600} height={300} style={{border: '1px solid #fff'}}></canvas>
        </>
    )
}