import React from 'react'

const ProcessingPayment = ({ setShowPopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-modalBg z-50" onClick={() => setShowPopup((oldState) => !oldState)}>
      <div className="bg-deepPurple text-white border border-white rounded-full p-8 flex flex-col items-center text-center z-50">
        <img src="/icons/processing-payment.gif" alt="success" width={32} height={32} className="rounded-full" />
        <h1 className="text-xl mt-2">Processing Payment</h1>
      </div>
    </div>
  )
}

export default ProcessingPayment
