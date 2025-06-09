import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Shield, AlertTriangle, ArrowLeft, Volume2 } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';
import LanguageSelector from '../LanguageSelector';

const content = {
  en: {
    title: 'ATM Usage',
    subtitle: 'Learn how to use ATM services safely',
    atmSteps: {
      title: 'Using ATM Card',
      steps: [
        'Insert card as shown by arrow',
        'Select language',
        'Enter 4-digit PIN secretly',
        'Select transaction type',
        'Enter amount (for withdrawal)',
        'Collect cash and card',
        'Wait for receipt (optional)',
      ],
    },
    safetyTips: {
      title: 'Safety Tips',
      tips: [
        'Never share PIN with anyone',
        'Cover keypad while entering PIN',
        'Check for suspicious devices',
        'Don\'t accept help from strangers',
        'Count money before leaving',
        'Keep transaction slip safe',
      ],
    },
    problems: {
      title: 'Common Problems',
      list: [
        {
          title: 'Card Stuck',
          solution: 'Contact bank immediately and block card',
        },
        {
          title: 'Cash Not Dispensed',
          solution: 'Note transaction ID and contact bank',
        },
        {
          title: 'Wrong PIN',
          solution: 'Three wrong attempts will block card',
        },
      ],
    },
  },
  hi: {
    title: 'एटीएम का उपयोग',
    subtitle: 'एटीएम सेवाओं का सुरक्षित उपयोग कैसे करें',
    atmSteps: {
      title: 'एटीएम कार्ड का उपयोग',
      steps: [
        'तीर के निशान के अनुसार कार्ड डालें',
        'भाषा चुनें',
        'गुप्त रूप से 4-अंकों का पिन डालें',
        'लेन-देन का प्रकार चुनें',
        'राशि डालें (निकासी के लिए)',
        'पैसे और कार्ड लें',
        'रसीद की प्रतीक्षा करें (वैकल्पिक)',
      ],
    },
    safetyTips: {
      title: 'सुरक्षा टिप्स',
      tips: [
        'पिन किसी के साथ साझा न करें',
        'पिन डालते समय कीपैड को ढकें',
        'संदिग्ध उपकरणों की जांच करें',
        'अजनबियों से मदद न लें',
        'जाने से पहले पैसे गिनें',
        'लेन-देन की पर्ची सुरक्षित रखें',
      ],
    },
    problems: {
      title: 'सामान्य समस्याएं',
      list: [
        {
          title: 'कार्ड फंस गया',
          solution: 'तुरंत बैंक से संपर्क करें और कार्ड ब्लॉक करें',
        },
        {
          title: 'पैसे नहीं निकले',
          solution: 'लेन-देन आईडी नोट करें और बैंक से संपर्क करें',
        },
        {
          title: 'गलत पिन',
          solution: 'तीन गलत प्रयासों से कार्ड ब्लॉक हो जाएगा',
        },
      ],
    },
  },
  mr: {
    title: 'एटीएम वापर',
    subtitle: 'एटीएम सेवांचा सुरक्षित वापर कसा करावा',
    atmSteps: {
      title: 'एटीएम कार्ड वापरणे',
      steps: [
        'बाण दाखवल्याप्रमाणे कार्ड घाला',
        'भाषा निवडा',
        'गुप्तपणे 4-अंकी पिन टाका',
        'व्यवहाराचा प्रकार निवडा',
        'रक्कम टाका (पैसे काढण्यासाठी)',
        'पैसे आणि कार्ड घ्या',
        'पावती मिळेपर्यंत थांबा (पर्यायी)',
      ],
    },
    safetyTips: {
      title: 'सुरक्षा टिप्स',
      tips: [
        'पिन कोणाशीही शेअर करू नका',
        'पिन टाकताना कीपॅड झाका',
        'संशयास्पद उपकरणांची तपासणी करा',
        'अनोळखी व्यक्तींची मदत घेऊ नका',
        'जाण्यापूर्वी पैसे मोजा',
        'व्यवहाराची पावती सुरक्षित ठेवा',
      ],
    },
    problems: {
      title: 'सामान्य समस्या',
      list: [
        {
          title: 'कार्ड अडकले',
          solution: 'त्वरित बँकेशी संपर्क साधा आणि कार्ड ब्लॉक करा',
        },
        {
          title: 'पैसे मिळाले नाहीत',
          solution: 'व्यवहार आयडी नोंद करा आणि बँकेशी संपर्क साधा',
        },
        {
          title: 'चुकीचा पिन',
          solution: 'तीन चुकीच्या प्रयत्नांनंतर कार्ड ब्लॉक होईल',
        },
      ],
    },
  },
};

const atmImages = [
  {
    url: 'https://images.unsplash.com/photo-1562102085-f56a5d0b3581?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'ATM Machine',
  },
  {
    url: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Person using ATM',
  },
  {
    url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'ATM Keypad',
  },
];

export default function AtmUsage() {
  const navigate = useNavigate();
  const { language } = useLanguageStore();

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'mr-IN';
      window.speechSynthesis.speak(utterance);
    }
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

      {/* ATM Images Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {atmImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2" />
              {t.atmSteps.title}
            </h3>
            <button
              onClick={() => playAudio(t.atmSteps.steps.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {t.atmSteps.steps.map((step, index) => (
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
              <Shield className="w-6 h-6 mr-2" />
              {t.safetyTips.title}
            </h3>
            <button
              onClick={() => playAudio(t.safetyTips.tips.join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {t.safetyTips.tips.map((tip, index) => (
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

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              {t.problems.title}
            </h3>
            <button
              onClick={() => playAudio(t.problems.list.map(item => `${item.title}. ${item.solution}`).join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            {t.problems.list.map((problem, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{problem.title}</h4>
                  <p className="text-gray-600">{problem.solution}</p>
                </div>
                <button
                  onClick={() => playAudio(`${problem.title}. ${problem.solution}`)}
                  className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}