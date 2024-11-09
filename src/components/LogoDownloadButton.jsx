import { motion } from 'framer-motion';

export default function LogoDownloadButton() {
    const captureLogoAsSVG = () => {
        const logoContainer = document.querySelector('.logo-container');
        if (!logoContainer) return;

        // Create SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '80');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Create gradient definition
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.id = 'logoGradient';
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '0%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#8b5cf6');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#3b82f6');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.appendChild(defs);

        // Add the cube logo
        const cubeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        cubeGroup.setAttribute('transform', 'translate(20, 20)');

        // Outer cube
        const outerCube = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        outerCube.setAttribute('d', 'M0 0 L40 0 L40 40 L0 40 Z');
        outerCube.setAttribute('stroke', 'url(#logoGradient)');
        outerCube.setAttribute('fill', 'none');
        outerCube.setAttribute('stroke-width', '3');

        // Inner cube
        const innerCube = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        innerCube.setAttribute('d', 'M10 10 L30 10 L30 30 L10 30 Z');
        innerCube.setAttribute('stroke', 'url(#logoGradient)');
        innerCube.setAttribute('fill', 'none');
        innerCube.setAttribute('stroke-width', '2');
        innerCube.setAttribute('opacity', '0.5');

        cubeGroup.appendChild(outerCube);
        cubeGroup.appendChild(innerCube);
        svg.appendChild(cubeGroup);

        // Add the text
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '80');
        text.setAttribute('y', '45');
        text.setAttribute('font-size', '40');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('fill', 'url(#logoGradient)');
        text.textContent = 'MNFST';
        svg.appendChild(text);

        // Convert SVG to blob and download
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'mnfst-logo.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <motion.button
            onClick={captureLogoAsSVG}
            className="fixed top-4 right-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Download Logo
        </motion.button>
    );
}