

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
    { user: 'Sommmmmethinggga', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'HHi thereHi thereHi thereHi thereHi there. hi this is someone, HEllo this is someone, hi this is someone.', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggga', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'Sommmmmethinggg', message: 'Hi thereHi thereHi there', timestamp: '2023-09-06 10:05:00' },
    { user: 'somethingSomethingS', message: 'hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone. hi this is someone, HEllo this is someone, hi this is someone.', timestamp: '2023-09-06 10:05:00' },
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
      // const wholeMessageSplit = wholeMessage.split(" ");
      // console.log(wholeMessageSplit)

      let messageArr = wholeMessage.split(" "); 
      let xRem = width - 100;
      let lineArr = [];

     
      for(let i=0; i<messageArr.length; i++) {
        if(xRem > messageArr[i].length ){
          lineArr.push(messageArr[i]);
        }else{
          if (y < 50) {
            page = pdfDoc.addPage([width, height]);
            y = yStart;
          }
          page.drawText(lineArr.join(" "), {
            x: 50,
            y,
            size: fontSize,
            color: rgb(0, 0, 0),
          });
          y -= lineHeight;
          xRem = width -100;
          lineArr = [];
          lineArr.push(messageArr[i]);
        }
        xRem -= (fontSize*messageArr[i].length*0.6)

        if(i === messageArr.length -1){
          if (y < 50) {
            page = pdfDoc.addPage([width, height]);
            y = yStart;
          }
          page.drawText(lineArr.join(" "), {
            x: 50,
            y,
            size: fontSize,
            color: rgb(0, 0, 0),
          });
          y -= lineHeight;
        }
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
    <div>
      <button onClick={createPDF}> Dowload PDF</button>
    </div>
  );
};

export default DownloadDoc;
