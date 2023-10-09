const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl text-center font-bold mb-4">Privacy Policy</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">
          Information Collection and Use
        </h3>
        <p>
          We may collect personal information provided by you for event planning
          and communication purposes. This may include, but is not limited to:
          <br />
          - Name
          <br />
          - Contact Information (email, phone number, address)
          <br />
          - Event Details and Preferences
          <br />- Payment Information
        </p>
        <p>
          We use this information to:
          <br />
          - Plan and execute events in accordance with your preferences
          <br />
          - Communicate with you regarding event details and updates
          <br />- Process payments and invoicing
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Information Sharing</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. This does not include trusted partners or third
          parties who assist us in servicing you, as long as they agree to keep
          this information confidential.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Data Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. We use secure payment gateways and
          regularly review our security procedures.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
