

  import React, { useEffect } from 'react';
  import '../DownloadDoc/DownloadDoc.css';
  import { PDFDocument, rgb } from 'pdf-lib';
  
  const DownloadDoc = () => {
    const chatMessages = [
      { user: 'User1', message: 'Hello', timestamp: '2023-09-06 10:00:00' },
      { user: 'User1', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'this is random', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Hello', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'lorem ipsum', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'ipsum loram', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Byee', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Byt', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Okay', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Hello', timestamp: '2023-09-06 10:00:00' },
      { user: 'User1', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'this is random', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Hello', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'lorem ipsum', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'ipsum loram', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Byee', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Byt', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Okay', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Hello', timestamp: '2023-09-06 10:00:00' },
      { user: 'User1', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'this is random', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Hello', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'lorem ipsum', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'ipsum loram', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Byee', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Byt', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Okay', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Hello', timestamp: '2023-09-06 10:00:00' },
      { user: 'User1', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'this is random', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Hello', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'HHi thereHi thereHi thereHi thereHi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'Hi thereHi thereHi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'somethingSomethingS', message: ' lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', timestamp: '2023-09-06 10:05:00' },
      { user: 'Sommmmmethinggg', message: 'ipsum loram', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Byee', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Byt', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Okay', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Hello', timestamp: '2023-09-06 10:00:00' },
      { user: 'User1', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'this is random', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Hello', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'lorem ipsum', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'ipsum loram', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
      { user: 'User1', message: 'Byee', timestamp: '2023-09-06 10:05:00' },
      { user: 'User3', message: 'Byt', timestamp: '2023-09-06 10:05:00' },
      { user: 'User2', message: 'Okay', timestamp: '2023-09-06 10:05:00' },
      
    ];
   
  
      const createPDF = async () => {

        // Creating a new PDF document
        const pdfDoc = await PDFDocument.create();
    
        // Adding a page to the document
        let page = pdfDoc.addPage([600, 700]);
        const { width, height } = page.getSize(); //here is getting width=600 and height =700;
    
        // Add chat messages to the PDF
        const fontSize = 12;
        const lineHeight = 16;
        const yStart = height - 50;
    
        let y = yStart;
        for (const message of chatMessages) {
          // console.log(y)
          const wholeMessage = `${message.timestamp} - ${message.user}: ${message.message}`
          const wholeMessageSplit = wholeMessage.split(" ");
          console.log(wholeMessageSplit)

          if(y>50){
          page.drawText(wholeMessage, {
            x: 50,
            y,
            size: fontSize,
            color: rgb(0, 0, 0),
          });
          y -= lineHeight;
        } else {
          page = pdfDoc.addPage([width, height]);
          y = yStart;
          page.drawText(`${message.timestamp} - ${message.user}: ${message.message}`, {
            x: 50,
            y,
            size: fontSize,
            color: rgb(0, 0, 0),
          });
          y -= lineHeight;
        }
        }
    
        // Serialize the PDF to bytes
        const pdfBytes = await pdfDoc.save();
    
        // Create a Blob from the PDF bytes
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
        // Create a temporary <a> element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'chat.pdf'; // Set the filename
        link.style.display = 'none'; // Hide the link
    
        // Add the link to the DOM
        document.body.appendChild(link);
    
        // Trigger the download programmatically
        link.click();
    
        // Remove the link from the DOM
        document.body.removeChild(link);
      };
 
  
    return (
      <div className="App">
        Hey
        <button onClick={createPDF}> Dowload link</button>
      </div>
    );
  };
  
  export default DownloadDoc;
  