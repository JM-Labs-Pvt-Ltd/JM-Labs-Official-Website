document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-node-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    
    function resize() {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const nodes = [];
    const numNodes = 80;
    
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < numNodes; i++) {
        const y = 1 - (i / (numNodes - 1)) * 2; 
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        nodes.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
    }

    let angle = 0;

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const radius = Math.min(width, height) * 0.4;
        angle += 0.0015;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        
        const projectedNodes = nodes.map(node => {
            const x = node.originalX * cosA - node.originalZ * sinA;
            const z = node.originalX * sinA + node.originalZ * cosA;
            const y = node.originalY;
            
            const scale = (radius + 200) / (radius + 200 + z * radius * 0.5);
            const px = width / 2 + x * radius * scale;
            const py = height / 2 + y * radius * scale;
            return { px, py, z, scale };
        });

        ctx.lineWidth = 1;
        for (let i = 0; i < numNodes; i++) {
            for (let j = i + 1; j < numNodes; j++) {
                const dx = nodes[i].originalX - nodes[j].originalX;
                const dy = nodes[i].originalY - nodes[j].originalY;
                const dz = nodes[i].originalZ - nodes[j].originalZ;
                const distSq = dx*dx + dy*dy + dz*dz;
                
                if (distSq < 0.35) {
                    const n1 = projectedNodes[i];
                    const n2 = projectedNodes[j];
                    const avgZ = (n1.z + n2.z) / 2;
                    
                    const timePulse = (Math.sin(Date.now() * 0.002 + i) + 1) * 0.5;
                    const zOpacity = Math.max(0.05, 0.4 + avgZ * 0.3);
                    const finalOpacity = zOpacity * (0.2 + timePulse * 0.6);
                    
                    ctx.strokeStyle = `rgba(212, 175, 55, ${finalOpacity})`;
                    ctx.beginPath();
                    ctx.moveTo(n1.px, n1.py);
                    ctx.lineTo(n2.px, n2.py);
                    ctx.stroke();
                }
            }
        }

        for (let i = 0; i < numNodes; i++) {
            const node = projectedNodes[i];
            const timePulse = (Math.sin(Date.now() * 0.003 + i * 2) + 1) * 0.5;
            const zOpacity = Math.max(0.1, 0.6 + node.z * 0.4);
            const glowRadius = 3.5 * node.scale * (1 + timePulse * 0.5);
            
            ctx.fillStyle = `rgba(242, 202, 80, ${zOpacity})`;
            ctx.beginPath();
            ctx.arc(node.px, node.py, glowRadius, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = `rgba(255, 255, 255, ${zOpacity * 1.5})`;
            ctx.beginPath();
            ctx.arc(node.px, node.py, glowRadius * 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }
    
    animate();
});
