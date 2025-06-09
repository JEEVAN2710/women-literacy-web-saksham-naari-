import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ShieldCheck, Landmark, ArrowLeft, Volume2, UserPlus } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';
import LanguageSelector from '../LanguageSelector';

const content = {
  en: {
    title: 'Bank Account Opening',
    subtitle: 'Learn how to open your first bank account',
    documents: {
      title: 'Required Documents',
      list: [
        'Identity Proof (Aadhaar Card, PAN Card, Voter ID)',
        'Address Proof (Utility Bills, Rental Agreement)',
        'Passport Size Photographs',
        'PAN Card or Form 60 (if no PAN)',
      ],
    },
    accountTypes: {
      title: 'Account Types',
      savings: {
        title: 'Savings Account',
        description: 'For personal savings with interest earnings',
      },
      current: {
        title: 'Current Account',
        description: 'For business transactions with no interest',
      },
      basic: {
        title: 'Basic Savings Account',
        description: 'Zero balance account for financial inclusion',
      },
    },
    steps: {
      title: 'Steps to Open Account',
      list: [
        'Visit nearest bank branch',
        'Collect account opening form',
        'Fill the form with personal details',
        'Attach required documents',
        'Submit form to bank officer',
        'Initial deposit (if required)',
        'Collect passbook and ATM card',
      ],
    },
    demoForm: {
      title: 'Demo Account Opening Form',
      name: 'Full Name',
      dob: 'Date of Birth',
      mobile: 'Mobile Number',
      email: 'Email Address',
      address: 'Residential Address',
      submit: 'Submit Form',
    },
  },
  hi: {
    title: 'बैंक खाता खोलना',
    subtitle: 'अपना पहला बैंक खाता कैसे खोलें यह जानें',
    documents: {
      title: 'आवश्यक दस्तावेज',
      list: [
        'पहचान प्रमाण (आधार कार्ड, पैन कार्ड, वोटर आईडी)',
        'पता प्रमाण (यूटिलिटी बिल, किराया समझौता)',
        'पासपोर्ट साइज फोटो',
        'पैन कार्ड या फॉर्म 60 (यदि पैन नहीं है)',
      ],
    },
    accountTypes: {
      title: 'खाते के प्रकार',
      savings: {
        title: 'बचत खाता',
        description: 'व्यक्तिगत बचत के लिए ब्याज के साथ',
      },
      current: {
        title: 'चालू खाता',
        description: 'व्यापारिक लेनदेन के लिए बिना ब्याज के',
      },
      basic: {
        title: 'बेसिक बचत खाता',
        description: 'वित्तीय समावेशन के लिए जीरो बैलेंस खाता',
      },
    },
    steps: {
      title: 'खाता खोलने के चरण',
      list: [
        'निकटतम बैंक शाखा में जाएं',
        'खाता खोलने का फॉर्म लें',
        'फॉर्म में व्यक्तिगत विवरण भरें',
        'आवश्यक दस्तावेज संलग्न करें',
        'फॉर्म बैंक अधिकारी को जमा करें',
        'प्रारंभिक जमा (यदि आवश्यक हो)',
        'पासबुक और एटीएम कार्ड प्राप्त करें',
      ],
    },
    demoForm: {
      title: 'डेमो खाता खोलने का फॉर्म',
      name: 'पूरा नाम',
      dob: 'जन्म तिथि',
      mobile: 'मोबाइल नंबर',
      email: 'ईमेल पता',
      address: 'निवास का पता',
      submit: 'फॉर्म जमा करें',
    },
  },
  mr: {
    title: 'बँक खाते उघडणे',
    subtitle: 'तुमचे पहिले बँक खाते कसे उघडावे हे शिका',
    documents: {
      title: 'आवश्यक कागदपत्रे',
      list: [
        'ओळखपत्र (आधार कार्ड, पॅन कार्ड, मतदान ओळखपत्र)',
        'पत्त्याचा पुरावा (उपयोगिता बिले, भाडे करार)',
        'पासपोर्ट साइज फोटो',
        'पॅन कार्ड किंवा फॉर्म 60 (पॅन नसल्यास)',
      ],
    },
    accountTypes: {
      title: 'खात्यांचे प्रकार',
      savings: {
        title: 'बचत खाते',
        description: 'व्यक्तिगत बचतीसाठी व्याजासह',
      },
      current: {
        title: 'चालू खाते',
        description: 'व्यावसायिक व्यवहारांसाठी व्याजाशिवाय',
      },
      basic: {
        title: 'मूलभूत बचत खाते',
        description: 'आर्थिक समावेशनासाठी शून्य शिल्लक खाते',
      },
    },
    steps: {
      title: 'खाते उघडण्याचे टप्पे',
      list: [
        'जवळच्या बँक शाखेत जा',
        'खाते उघडण्याचा फॉर्म घ्या',
        'फॉर्ममध्ये वैयक्तिक माहिती भरा',
        'आवश्यक कागदपत्रे जोडा',
        'फॉर्म बँक अधिकाऱ्याकडे सादर करा',
        'प्रारंभिक ठेव (आवश्यक असल्यास)',
        'पासबुक आणि एटीएम कार्ड घ्या',
      ],
    },
    demoForm: {
      title: 'डेमो खाते उघडण्याचा फॉर्म',
      name: 'पूर्ण नाव',
      dob: 'जन्म तारीख',
      mobile: 'मोबाईल नंबर',
      email: 'ईमेल पत्ता',
      address: 'निवासी पत्ता',
      submit: 'फॉर्म सबमिट करा',
    },
  },
};

export default function AccountOpening() {
  const navigate = useNavigate();
  const { language } = useLanguageStore();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    address: '',
  });

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'mr-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a server
    console.log('Form submitted:', formData);
    alert('Demo form submitted successfully!');
  };

  const t = content[language];

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

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              {t.documents.title}
            </h3>
            <button
              onClick={() => playAudio(t.documents.list.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {t.documents.list.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{item}</span>
                <button
                  onClick={() => playAudio(item)}
                  className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-purple-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2" />
              {t.accountTypes.title}
            </h3>
            <button
              onClick={() => playAudio(Object.values(t.accountTypes)
                .filter(item => typeof item === 'object')
                .map((item: any) => `${item.title}. ${item.description}`)
                .join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(t.accountTypes).map(([key, value]) => {
              if (key === 'title') return null;
              const { title, description } = value as { title: string; description: string };
              return (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                  <button
                    onClick={() => playAudio(`${title}. ${description}`)}
                    className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-purple-600" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <Landmark className="w-6 h-6 mr-2" />
              {t.steps.title}
            </h3>
            <button
              onClick={() => playAudio(t.steps.list.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {t.steps.list.map((step, index) => (
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

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <UserPlus className="w-6 h-6 mr-2" />
              {t.demoForm.title}
            </h3>
            <button
              onClick={() => playAudio(t.demoForm.title)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">{t.demoForm.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t.demoForm.dob}</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t.demoForm.mobile}</label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t.demoForm.email}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{t.demoForm.address}</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2 border rounded-md"
                rows={3}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              {t.demoForm.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}