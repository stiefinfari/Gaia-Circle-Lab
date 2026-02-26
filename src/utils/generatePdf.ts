import { toJpeg } from 'html-to-image';
import jsPDF from 'jspdf';

export const generatePdf = async () => {
  const element = document.body;
  
  // Prepare Styles for Capture
  const originalStyle = {
    height: element.style.height,
    overflow: element.style.overflow,
    width: element.style.width,
  };
  
  // Force full content visibility
  element.style.height = 'auto';
  element.style.overflow = 'visible';
  element.style.width = '100%';

  // Hide the header/buttons during capture using a class
  document.body.classList.add('generating-pdf');
  
  const header = document.querySelector('header');
  if (header) header.style.display = 'none';

  try {
    // Generate image using html-to-image (supports modern CSS like oklch/oklab)
    const dataUrl = await toJpeg(element, {
      quality: 0.95,
      backgroundColor: '#0a0a0a',
      filter: (node) => {
        // Exclude elements with 'no-print' class
        return !node.classList?.contains('no-print');
      },
      // Ensure external images are loaded (requires CORS headers on server or proxy)
      cacheBust: true, 
    });

    // Create PDF
    const img = new Image();
    img.src = dataUrl;
    
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [img.width, img.height], 
    });

    pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);
    pdf.save('Gaia_Circle_Lab_Portfolio.pdf');
    
  } catch (error) {
    console.error('PDF generation failed:', error);
    alert(`Errore nella generazione del PDF: ${(error as Error).message}. Riprova.`);
  } finally {
    // Cleanup
    element.style.height = originalStyle.height;
    element.style.overflow = originalStyle.overflow;
    element.style.width = originalStyle.width;
    document.body.classList.remove('generating-pdf');
    if (header) header.style.display = '';
  }
};
