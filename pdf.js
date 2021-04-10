import { jsPDF } from 'jspdf'
import html2pdf from 'html2pdf'

const doc = new jsPDF({
  orientation: 'l',
})
doc.addPage()
