import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, QrCode, Lock, ArrowLeft, Volume2, Send, CreditCard } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';
import LanguageSelector from '../LanguageSelector';

const content = {
  en: {
    title: 'Mobile Banking & UPI',
    subtitle: 'Digital payment methods for modern banking',
    mobileBanking: {
      title: 'Mobile Banking',
      gettingStarted: {
        title: 'Getting Started',
        steps: [
          'Download bank\'s official app',
          'Register with account details',
          'Set up MPIN',
          'Start using services',
        ],
      },
      services: {
        title: 'Available Services',
        list: [
          'Check balance',
          'Fund transfer',
          'Bill payments',
          'Mobile recharge',
        ],
      },
    },
    upi: {
      title: 'UPI Payments',
      setup: {
        title: 'Setting Up UPI',
        steps: [
          'Download UPI app (BHIM, PhonePe, etc.)',
          'Link bank account',
          'Create UPI PIN',
          'Start making payments',
        ],
      },
      methods: {
        title: 'Payment Methods',
        list: [
          'Scan QR code',
          'Enter UPI ID',
          'Pay to mobile number',
        ],
      },
    },
    safety: {
      title: 'Safety Guidelines',
      list: [
        'Use official apps only',
        'Never share OTP/PIN',
        'Use strong passwords',
        'Enable biometric login',
        'Check recipient details before paying',
        'Keep app updated',
        'Monitor transactions regularly',
      ],
    },
    demo: {
      scan: 'Scan QR Code',
      send: 'Send Money',
      receive: 'Receive Money',
      history: 'Transaction History',
      amount: 'Enter Amount',
      upiId: 'Enter UPI ID',
      pay: 'Pay Now',
      request: 'Request Money',
    },
  },
  hi: {
    title: 'मोबाइल बैंकिंग और यूपीआई',
    subtitle: 'आधुनिक बैंकिंग के लिए डिजिटल भुगतान विधियां',
    mobileBanking: {
      title: 'मोबाइल बैंकिंग',
      gettingStarted: {
        title: 'शुरू करने के लिए',
        steps: [
          'बैंक का आधिकारिक ऐप डाउनलोड करें',
          'खाता विवरण के साथ पंजीकरण करें',
          'एमपिन सेट करें',
          'सेवाओं का उपयोग शुरू करें',
        ],
      },
      services: {
        title: 'उपलब्ध सेवाएं',
        list: [
          'बैलेंस चेक करें',
          'फंड ट्रांसफर',
          'बिल भुगतान',
          'मोबाइल रिचार्ज',
        ],
      },
    },
    upi: {
      title: 'यूपीआई भुगतान',
      setup: {
        title: 'यूपीआई सेटअप',
        steps: [
          'यूपीआई ऐप डाउनलोड करें (BHIM, PhonePe, आदि)',
          'बैंक खाता लिंक करें',
          'यूपीआई पिन बनाएं',
          'भुगतान शुरू करें',
        ],
      },
      methods: {
        title: 'भुगतान विधियां',
        list: [
          'क्यूआर कोड स्कैन करें',
          'यूपीआई आईडी दर्ज करें',
          'मोबाइल नंबर से भुगतान करें',
        ],
      },
    },
    safety: {
      title: 'सुरक्षा दिशानिर्देश',
      list: [
        'केवल आधिकारिक ऐप्स का उपयोग करें',
        'कभी भी ओटीपी/पिन साझा न करें',
        'मजबूत पासवर्ड का उपयोग करें',
        'बायोमेट्रिक लॉगिन सक्षम करें',
        'भुगतान से पहले प्राप्तकर्ता का विवरण जांचें',
        'ऐप को अपडेट रखें',
        'नियमित रूप से लेनदेन की निगरानी करें',
      ],
    },
    demo: {
      scan: 'क्यूआर कोड स्कैन करें',
      send: 'पैसे भेजें',
      receive: 'पैसे प्राप्त करें',
      history: 'लेनदेन इतिहास',
      amount: 'राशि दर्ज करें',
      upiId: 'यूपीआई आईडी दर्ज करें',
      pay: 'अभी भुगतान करें',
      request: 'पैसे का अनुरोध करें',
    },
  },
  mr: {
    title: 'मोबाईल बँकिंग आणि यूपीआय',
    subtitle: 'आधुनिक बँकिंगसाठी डिजिटल पेमेंट पद्धती',
    mobileBanking: {
      title: 'मोबाईल बँकिंग',
      gettingStarted: {
        title: 'सुरू करण्यासाठी',
        steps: [
          'बँकेचे अधिकृत अॅप डाउनलोड करा',
          'खाते तपशीलांसह नोंदणी करा',
          'एमपिन सेट करा',
          'सेवा वापरायला सुरुवात करा',
        ],
      },
      services: {
        title: 'उपलब्ध सेवा',
        list: [
          'शिल्लक तपासा',
          'पैसे पाठवा',
          'बिल भरणा',
          'मोबाईल रिचार्ज',
        ],
      },
    },
    upi: {
      title: 'यूपीआय पेमेंट',
      setup: {
        title: 'यूपीआय सेटअप',
        steps: [
          'यूपीआय अॅप डाउनलोड करा (BHIM, PhonePe, इ.)',
          'बँक खाते लिंक करा',
          'यूपीआय पिन तयार करा',
          'पेमेंट सुरू करा',
        ],
      },
      methods: {
        title: 'पेमेंट पद्धती',
        list: [
          'क्यूआर कोड स्कॅन करा',
          'यूपीआय आयडी टाका',
          'मोबाईल नंबरवर पेमेंट करा',
        ],
      },
    },
    safety: {
      title: 'सुरक्षा मार्गदर्शक तत्त्वे',
      list: [
        'फक्त अधिकृत अॅप्स वापरा',
        'कधीही ओटीपी/पिन शेअर करू नका',
        'मजबूत पासवर्ड वापरा',
        'बायोमेट्रिक लॉगिन सक्षम करा',
        'पेमेंट करण्यापूर्वी प्राप्तकर्त्याचे तपशील तपासा',
        'अॅप अपडेट ठेवा',
        'नियमितपणे व्यवहारांचे निरीक्षण करा',
      ],
    },
    demo: {
      scan: 'क्यूआर कोड स्कॅन करा',
      send: 'पैसे पाठवा',
      receive: 'पैसे मिळवा',
      history: 'व्यवहार इतिहास',
      amount: 'रक्कम टाका',
      upiId: 'यूपीआय आयडी टाका',
      pay: 'आता पेमेंट करा',
      request: 'पैशांची विनंती करा',
    },
  },
};

export default function MobileBanking() {
  const navigate = useNavigate();
  const { language } = useLanguageStore();
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'mr-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const t = content[language];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo payment initiated!');
    setAmount('');
    setUpiId('');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/arthshakti')}
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Arthshakti
        </button>
        <LanguageSelector />
      </div>

      <div className="border-b pb-4">
        <h2 className="text-3xl font-bold text-purple-800">{t.title}</h2>
        <p className="text-gray-600 mt-2">{t.subtitle}</p>
      </div>

      {/* UPI Demo Interface */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-4 border-b">
          {[
            { id: 'scan', icon: QrCode, label: t.demo.scan },
            { id: 'send', icon: Send, label: t.demo.send },
            { id: 'receive', icon: CreditCard, label: t.demo.receive },
            { id: 'history', icon: Smartphone, label: t.demo.history },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center justify-center p-4 transition-colors ${
                activeTab === id
                  ? 'bg-purple-100 text-purple-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <Icon className="w-6 h-6 mb-2" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'send' && (
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">{t.demo.amount}</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="₹0.00"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.demo.upiId}</label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="example@upi"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                {t.demo.pay}
              </button>
            </form>
          )}

          {activeTab === 'scan' && (
            <div className="text-center p-8">
              <QrCode className="w-48 h-48 mx-auto mb-4 text-purple-600" />
              <p className="text-gray-600">Point your camera at a QR code to pay</p>
            </div>
          )}

          {activeTab === 'receive' && (
            <div className="space-y-4">
              <div className="text-center p-8 border-2 border-dashed rounded-lg">
                <QrCode className="w-48 h-48 mx-auto mb-4 text-purple-600" />
                <p className="text-gray-600">Your Payment QR Code</p>
              </div>
              <button
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                {t.demo.request}
              </button>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">Transaction #{i + 1}</p>
                    <p className="text-sm text-gray-500">2024/03/{20 - i}</p>
                  </div>
                  <p className={`font-semibold ${i % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {i % 2 === 0 ? '+' : '-'}₹{(i + 1) * 100}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <Smartphone className="w-6 h-6 mr-2" />
              {t.mobileBanking.title}
            </h3>
            <button
              onClick={() => playAudio(t.mobileBanking.gettingStarted.steps.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">{t.mobileBanking.gettingStarted.title}</h4>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                {t.mobileBanking.gettingStarted.steps.map((step, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{step}</span>
                    <button
                      onClick={() => playAudio(step)}
                      className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                    >
                      <Volume2 className="w-4 h-4 text-purple-600" />
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{t.mobileBanking.services.title}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.mobileBanking.services.list.map((service, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{service}</span>
                    <button
                      onClick={() => playAudio(service)}
                      className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                    >
                      <Volume2 className="w-4 h-4 text-purple-600" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <QrCode className="w-6 h-6 mr-2" />
              {t.upi.title}
            </h3>
            <button
              onClick={() => playAudio(t.upi.setup.steps.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">{t.upi.setup.title}</h4>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                {t.upi.setup.steps.map((step, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{step}</span>
                    <button
                      onClick={() => playAudio(step)}
                      className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                    >
                      <Volume2 className="w-4 h-4 text-purple-600" />
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{t.upi.methods.title}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.upi.methods.list.map((method, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{method}</span>
                    <button
                      onClick={() => playAudio(method)}
                      className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                    >
                      <Volume2 className="w-4 h-4 text-purple-600" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2" />
              {t.safety.title}
            </h3>
            <button
              onClick={() => playAudio(t.safety.list.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {t.safety.list.map((tip, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{tip}</span>
                <button
                  onClick={() => playAudio(tip)}
                  className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-purple-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}