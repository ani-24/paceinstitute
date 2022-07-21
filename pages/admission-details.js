import Image from "next/image";

const AdmissionProcess = () => {
  return (
    <div className="container grid lg:grid-cols-2 mt-12 gap-8">
      <div>
        <h1 className="admission-process-title">Admissoin Details:</h1>
        <p className="mb-2">
          Limited Seats are available for the admission to courses at PACE
          Institute.
        </p>
        <p className="mb-2">
          Full fee of the course is to be deposited at the time of admission
        </p>
        <p className="mb-2">
          2 passport size photos and copy of Aadhar card is to be submitted.
        </p>
        <div className="mb-2">
          Payment options:
          <ul className="ml-4">
            <li>&rarr; UPI</li>
            <li>&rarr; IMPS</li>
            <li>&rarr; NEFT</li>
            <li>&rarr; Cash (offline)</li>
          </ul>
        </div>
        <p className="mb-2">
          UPI payment is linked to the mobile number <strong>9334314161</strong>
        </p>
        <p>
          Send the screenshot or payment details to the same WhatsApp number for
          booking of your seat
        </p>
      </div>
      <div>
        <h1 className="admission-process-title">Pay Via QR Code</h1>
        <div className="relative w-[400px] aspect-square">
          <Image src="/qr-code.jpeg" alt="Payment QR Code" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
