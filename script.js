// Import jsPDF and AutoTable from the UMD module
const { jsPDF } = window.jspdf;

function generatePDF() {
    const name = document.getElementById('name').value;
    const about = document.getElementById('about').value;
    const projects = document.getElementById('projects').value.split(',');

    // Initialize jsPDF
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text('Portfolio', 10, 10);
    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text('About Me:', 10, 30);
    doc.setFontSize(12);
    doc.text(about, 10, 40);

    // Prepare table data for AutoTable
    const projectData = projects.map((project, index) => [index + 1, project.trim()]);
    doc.setFontSize(14);
    doc.text('Projects:', 10, 60);

    // Add the table with AutoTable
    doc.autoTable({
        startY: 70,
        head: [['#', 'Project']],
        body: projectData,
    });

    // Save the PDF
    doc.save('portfolio.pdf');
}
