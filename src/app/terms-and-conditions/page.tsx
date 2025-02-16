import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className='min-h-screen bg-black text-light-gray px-10 py-16 md:px-20'>
      <h2 className='text-xl text-center text-white mb-6'>Terms and Conditions</h2>
      <div className='space-y-6'>
        <div>
           <h3 className='text-white text-lg'>1. Acceptance</h3>
           <p>By using the services of Trujillo Motors, you fully accept these terms of service.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>2. Intellectual Property</h3>
          <p>All content, design, code, and intellectual property belong to Trujillo Motors and may not be used without express permission.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>3. Payments</h3>
          <p>Payments must be made in the agreed currency and method. Customers are required to make payments on time and adhere to the agreed payment terms.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>4. Changes and Cancellations</h3>
          <p>Changes and cancellations to contracted services must be approved by Trujillo Motors and may be subject to additional charges.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>5. Confidentiality</h3>
          <p>Trujillo Motors maintains the confidentiality of all customer information and will not disclose it to third parties without express consent.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>6. Liability</h3>
          <p>Trujillo Motors is not responsible for any loss or damage caused by the use or inability to use its services. Customers must ensure the accuracy of the information they provide.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>7. Modifications</h3>
          <p>Trujillo Motors reserves the right to modify these terms and conditions at any time without prior notice.</p>
        </div>
        <div>
          <h3 className='text-white text-lg'>8. Governing Law and Jurisdiction</h3>
          <p>These terms are governed by the laws of the country where Trujillo Motors is based. Any disputes will be resolved exclusively in the courts of that country.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
