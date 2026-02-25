export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Congratulations 🎉
        </h2>

        <p className="text-gray-600">
          Your enquiry has been successfully submitted.
        </p>

        <p className="text-gray-500 mt-2">
          Our team will connect with you shortly.
        </p>
      </div>
    </div>
  );
}
