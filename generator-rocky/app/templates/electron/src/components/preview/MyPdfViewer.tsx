import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import NoticeStore from '@models/notice'
import PdfBodyTag from './MyPdfViewer.css'


interface MyPdfViewerProps {
  myPdf: any
}
interface MyPdfViewerState {
  numPages: any,
  pageNumber: any
}
class MypdfView extends React.Component<MyPdfViewerProps, MyPdfViewerState>{
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }
  onLoadSuccess(pdf) {
    console.log('pdf数据：', pdf)
  }
  onSourceSuccess() {
    console.log('Document source retreived!')
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <PdfBodyTag>
        <div className="pdfContainer">
          <Document
            file="http://127.0.0.1:8080/1.pdf"
            onLoadSuccess={this.onLoadSuccess}
            onSourceSuccess={this.onSourceSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

      </PdfBodyTag >
    )
  }
}


export default MypdfView;