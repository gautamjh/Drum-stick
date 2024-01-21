import React from 'react'
import PdfPage from './component/PdfPage'
import { PDFViewer } from '@react-pdf/renderer';
import Dumb from './component/Dumb';
const App = () => {
  return (
    
      
     <div>
      {/* <PDFViewer className='bg-cover'>
        <PdfPage />
      </PDFViewer>
    */}
    <Dumb/>
    </div>
   
  )
}

export default App


