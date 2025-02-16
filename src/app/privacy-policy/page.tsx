import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='min-h-screen bg-black text-light-gray px-10 py-16 md:px-20'>
      <h2 className="text-center text-white text-xl pb-6">Privacy Policy</h2>

      <div className='space-y-6'>
        <div>
          <h3 className='text-white text-lg'>1. Collection of Personal Information</h3>
          <p>Pulse Autos may collect personal information such as your name, email address, phone number, billing details, and other relevant data necessary for providing our services.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>2. Use of Personal Information</h3>
          <p>We use your information to enhance our services, communicate important updates, and provide promotions relevant to our customers.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>3. Disclosure of Personal Information</h3>
          <p>Pulse Autos does not sell or rent personal data. We may share information with trusted third parties only when necessary for service fulfillment, legal compliance, or to protect our rights.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>4. Security of Personal Information</h3>
          <p>We implement security measures to safeguard your data against unauthorized access, misuse, or loss.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>5. User Rights</h3>
          <p>You have the right to access, modify, or delete your personal data. You can also opt out of marketing communications at any time.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>6. Minors</h3>
          <p>Pulse Autos does not knowingly collect data from children under 13. If such data has been inadvertently collected, please contact us immediately.</p>
        </div>

        <div>
          <h3 className='text-white text-lg'>7. Changes to the Privacy Policy</h3>
          <p>We may update this policy without prior notice. Please review it periodically for changes.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
