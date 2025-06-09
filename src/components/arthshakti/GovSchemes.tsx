import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleDollarSign, GraduationCap, Home, ArrowLeft, Volume2 } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';
import LanguageSelector from '../LanguageSelector';

const content = {
  en: {
    title: 'Government Schemes',
    subtitle: 'Financial support programs for women\'s empowerment',
    schemes: {
      financial: {
        title: 'Financial Support Schemes',
        list: [
          {
            name: 'Mudra Yojana',
            description: 'Loans for small businesses (up to ₹10 lakh)',
            benefits: [
              'No collateral required',
              'Easy documentation',
              'Low interest rates',
            ],
          },
          {
            name: 'Mahila Samman Savings Certificate',
            description: 'Special savings scheme for women',
            benefits: [
              'Higher interest rates',
              'Tax benefits',
              'Flexible tenure',
            ],
          },
          {
            name: 'Ladli Laxmi Yojana',
            description: 'Financial assistance for girl child',
            benefits: [
              'Fixed deposit at birth',
              'Educational support',
              'Marriage assistance',
            ],
          },
        ],
      },
      education: {
        title: 'Education Schemes',
        list: [
          {
            name: 'Sukanya Samriddhi Yojana',
            description: 'Savings scheme for girl child education',
            benefits: [
              'High interest rate',
              'Tax free returns',
              'Long-term savings',
            ],
          },
          {
            name: 'Beti Bachao Beti Padhao',
            description: 'Education support for girls',
            benefits: [
              'Free education',
              'Scholarship programs',
              'Skill development',
            ],
          },
        ],
      },
      other: {
        title: 'Other Support Programs',
        list: [
          {
            name: 'Self Help Groups',
            description: 'Group-based financial support',
            benefits: [
              'Group savings',
              'Collective loans',
              'Skill development',
            ],
          },
          {
            name: 'Working Women Hostel',
            description: 'Safe accommodation for working women',
            benefits: [
              'Affordable stay',
              'Safe environment',
              'Day care facility',
            ],
          },
          {
            name: 'Mahila Shakti Kendra',
            description: 'One-stop center for women empowerment',
            benefits: [
              'Skill development',
              'Healthcare support',
              'Legal assistance',
            ],
          },
        ],
      },
    },
  },
  hi: {
    title: 'सरकारी योजनाएं',
    subtitle: 'महिला सशक्तिकरण के लिए वित्तीय सहायता कार्यक्रम',
    schemes: {
      financial: {
        title: 'वित्तीय सहायता योजनाएं',
        list: [
          {
            name: 'मुद्रा योजना',
            description: 'छोटे व्यवसायों के लिए ऋण (₹10 लाख तक)',
            benefits: [
              'कोई जमानत नहीं',
              'आसान दस्तावेज़ीकरण',
              'कम ब्याज दरें',
            ],
          },
          {
            name: 'महिला सम्मान बचत प्रमाणपत्र',
            description: 'महिलाओं के लिए विशेष बचत योजना',
            benefits: [
              'उच्च ब्याज दरें',
              'कर लाभ',
              'लचीली अवधि',
            ],
          },
          {
            name: 'लाडली लक्ष्मी योजना',
            description: 'बालिका के लिए वित्तीय सहायता',
            benefits: [
              'जन्म पर सावधि जमा',
              'शैक्षिक सहायता',
              'विवाह सहायता',
            ],
          },
        ],
      },
      education: {
        title: 'शिक्षा योजनाएं',
        list: [
          {
            name: 'सुकन्या समृद्धि योजना',
            description: 'बालिका शिक्षा के लिए बचत योजना',
            benefits: [
              'उच्च ब्याज दर',
              'कर मुक्त रिटर्न',
              'दीर्घकालिक बचत',
            ],
          },
          {
            name: 'बेटी बचाओ बेटी पढ़ाओ',
            description: 'बालिकाओं के लिए शिक्षा सहायता',
            benefits: [
              'मुफ्त शिक्षा',
              'छात्रवृत्ति कार्यक्रम',
              'कौशल विकास',
            ],
          },
        ],
      },
      other: {
        title: 'अन्य सहायता कार्यक्रम',
        list: [
          {
            name: 'स्वयं सहायता समूह',
            description: 'समूह आधारित वित्तीय सहायता',
            benefits: [
              'समूह बचत',
              'सामूहिक ऋण',
              'कौशल विकास',
            ],
          },
          {
            name: 'कामकाजी महिला छात्रावास',
            description: 'कामकाजी महिलाओं के लिए सुरक्षित आवास',
            benefits: [
              'किफायती रहना',
              'सुरक्षित वातावरण',
              'डे केयर सुविधा',
            ],
          },
          {
            name: 'महिला शक्ति केंद्र',
            description: 'महिला सशक्तिकरण के लिए एक-स्टॉप सेंटर',
            benefits: [
              'कौशल विकास',
              'स्वास्थ्य सहायता',
              'कानूनी सहायता',
            ],
          },
        ],
      },
    },
  },
  mr: {
    title: 'सरकारी योजना',
    subtitle: 'महिला सक्षमीकरणासाठी आर्थिक सहाय्य कार्यक्रम',
    schemes: {
      financial: {
        title: 'आर्थिक सहाय्य योजना',
        list: [
          {
            name: 'मुद्रा योजना',
            description: 'लघु व्यवसायांसाठी कर्ज (₹10 लाख पर्यंत)',
            benefits: [
              'तारण आवश्यक नाही',
              'सोपे दस्तऐवजीकरण',
              'कमी व्याज दर',
            ],
          },
          {
            name: 'महिला सन्मान बचत प्रमाणपत्र',
            description: 'महिलांसाठी विशेष बचत योजना',
            benefits: [
              'जास्त व्याज दर',
              'कर सवलती',
              'लवचिक मुदत',
            ],
          },
          {
            name: 'लाडली लक्ष्मी योजना',
            description: 'मुलींसाठी आर्थिक मदत',
            benefits: [
              'जन्मावेळी मुदत ठेव',
              'शैक्षणिक मदत',
              'विवाह सहाय्य',
            ],
          },
        ],
      },
      education: {
        title: 'शिक्षण योजना',
        list: [
          {
            name: 'सुकन्या समृद्धी योजना',
            description: 'मुलींच्या शिक्षणासाठी बचत योजना',
            benefits: [
              'जास्त व्याज दर',
              'करमुक्त परतावा',
              'दीर्घकालीन बचत',
            ],
          },
          {
            name: 'बेटी बचाओ बेटी पढाओ',
            description: 'मुलींसाठी शिक्षण सहाय्य',
            benefits: [
              'मोफत शिक्षण',
              'शिष्यवृत्ती कार्यक्रम',
              'कौशल्य विकास',
            ],
          },
        ],
      },
      other: {
        title: 'इतर सहाय्य कार्यक्रम',
        list: [
          {
            name: 'स्वयं सहाय्यता गट',
            description: 'गट-आधारित आर्थिक सहाय्य',
            benefits: [
              'गट बचत',
              'सामूहिक कर्ज',
              'कौशल्य विकास',
            ],
          },
          {
            name: 'कार्यरत महिला वसतिगृह',
            description: 'कार्यरत महिलांसाठी सुरक्षित निवास',
            benefits: [
              'परवडणारे वास्तव्य',
              'सुरक्षित वातावरण',
              'दिवसभर संगोपन सुविधा',
            ],
          },
          {
            name: 'महिला शक्ती केंद्र',
            description: 'महिला सक्षमीकरणासाठी एक-स्टॉप केंद्र',
            benefits: [
              'कौशल्य विकास',
              'आरोग्य सहाय्य',
              'कायदेशीर मदत',
            ],
          },
        ],
      },
    },
  },
};

export default function GovSchemes() {
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

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <CircleDollarSign className="w-6 h-6 mr-2" />
              {t.schemes.financial.title}
            </h3>
            <button
              onClick={() => playAudio(t.schemes.financial.list.map(scheme => 
                `${scheme.name}. ${scheme.description}`
              ).join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-6">
            {t.schemes.financial.list.map((scheme, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">{scheme.name}</h4>
                  <button
                    onClick={() => playAudio(`${scheme.name}. ${scheme.description}`)}
                    className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-purple-600" />
                  </button>
                </div>
                <p className="text-gray-600 mt-1">{scheme.description}</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{benefit}</span>
                      <button
                        onClick={() => playAudio(benefit)}
                        className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Volume2 className="w-4 h-4 text-purple-600" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              {t.schemes.education.title}
            </h3>
            <button
              onClick={() => playAudio(t.schemes.education.list.map(scheme => 
                `${scheme.name}. ${scheme.description}`
              ).join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-6">
            {t.schemes.education.list.map((scheme, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">{scheme.name}</h4>
                  <button
                    onClick={() => playAudio(`${scheme.name}. ${scheme.description}`)}
                    className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-purple-600" />
                  </button>
                </div>
                <p className="text-gray-600 mt-1">{scheme.description}</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{benefit}</span>
                      <button
                        onClick={() => playAudio(benefit)}
                        className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Volume2 className="w-4 h-4 text-purple-600" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
              <Home className="w-6 h-6 mr-2" />
              {t.schemes.other.title}
            </h3>
            <button
              onClick={() => playAudio(t.schemes.other.list.map(scheme => 
                `${scheme.name}. ${scheme.description}`
              ).join('. '))}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-6">
            {t.schemes.other.list.map((scheme, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">{scheme.name}</h4>
                  <button
                    onClick={() => playAudio(`${scheme.name}. ${scheme.description}`)}
                    className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-purple-600" />
                  </button>
                </div>
                <p className="text-gray-600 mt-1">{scheme.description}</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{benefit}</span>
                      <button
                        onClick={() => playAudio(benefit)}
                        className="p-1 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <Volume2 className="w-4 h-4 text-purple-600" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}