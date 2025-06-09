import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote, Send, PiggyBank, ArrowLeft } from 'lucide-react';

export default function BankingServices() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <button
        onClick={() => navigate('/arthshakti')}
        className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Arthshakti
      </button>

      <div className="border-b pb-4">
        <h2 className="text-3xl font-bold text-purple-800">Services & Procedures</h2>
        <p className="text-gray-600 mt-2">Understanding common banking services and how to use them</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <Banknote className="w-6 h-6 mr-2" />
            Cash Transactions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Cash Deposit</h4>
              <p className="text-gray-600">Fill deposit slip, submit with cash at counter</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Cash Withdrawal</h4>
              <p className="text-gray-600">Fill withdrawal slip, present at counter with passbook</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Balance Enquiry</h4>
              <p className="text-gray-600">Check balance through passbook updating or ATM</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <Send className="w-6 h-6 mr-2" />
            Fund Transfer
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">NEFT/RTGS</h4>
              <p className="text-gray-600">Transfer money to other bank accounts electronically</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">IMPS</h4>
              <p className="text-gray-600">Instant transfer service available 24/7</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">UPI</h4>
              <p className="text-gray-600">Mobile-based instant payment system</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <PiggyBank className="w-6 h-6 mr-2" />
            Other Services
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Fixed Deposits</h4>
              <p className="text-gray-600">Save money for fixed period with higher interest</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Recurring Deposits</h4>
              <p className="text-gray-600">Regular monthly savings with good returns</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Loans</h4>
              <p className="text-gray-600">Personal, home, education loans available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}