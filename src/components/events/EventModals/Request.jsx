import React from 'react'

const Request = ({ setShowPopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-modalBg" onClick={() => setShowPopup((oldState) => !oldState)}>
      <div className="bg-deepPurple text-white border border-white rounded-xl p-5 flex flex-col items-center text-center">
        <img src="/icons/notification.gif" alt="notification-icon" width={56} height={56} className="mb-2" />
        <h1 className="text-xl w-60">We will notify you when your request is approved</h1>
      </div>
    </div>
  )
}

export default Request
