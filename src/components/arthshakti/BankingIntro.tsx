import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Building2, Users, ArrowLeft, Volume2 } from 'lucide-react';
import { useLanguageStore } from '../../store/languageStore';
import LanguageSelector from '../LanguageSelector';

const content = {
  en: {
    title: 'Introduction to Banking',
    subtitle: 'Learn the basics of banking and financial services',
    whatIsBank: {
      title: 'What is a Bank?',
      description: 'A bank is a financial institution that accepts deposits from the public and creates credit. Banks are essential parts of our financial system and economy.',
      points: [
        'Safe place to keep your money',
        'Earn interest on your savings',
        'Access to loans and other financial services',
        'Secure way to receive and make payments',
      ],
    },
    bankTypes: {
      title: 'Types of Banks',
      public: {
        title: 'Public Sector Banks',
        description: 'Government-owned banks like SBI, PNB, BOB',
      },
      private: {
        title: 'Private Sector Banks',
        description: 'Privately owned banks like HDFC, ICICI, Axis Bank',
      },
      rural: {
        title: 'Regional Rural Banks',
        description: 'Banks serving rural areas and promoting financial inclusion',
      },
    },
    terms: {
      title: 'Basic Banking Terms',
      balance: {
        title: 'Account Balance',
        description: 'The amount of money in your bank account',
      },
      interest: {
        title: 'Interest Rate',
        description: 'The percentage of money you earn on savings or pay on loans',
      },
      atm: {
        title: 'ATM',
        description: 'Automated Teller Machine for withdrawing cash',
      },
      kyc: {
        title: 'KYC',
        description: 'Know Your Customer - documents needed to open an account',
      },
    },
  },
  hi: {
    title: 'बैंकिंग का परिचय',
    subtitle: 'बैंकिंग और वित्तीय सेवाओं की मूल बातें सीखें',
    whatIsBank: {
      title: 'बैंक क्या है?',
      description: 'बैंक एक वित्तीय संस्था है जो जनता से जमा स्वीकार करती है और क्रेडिट बनाती है। बैंक हमारी वित्तीय प्रणाली और अर्थव्यवस्था के आवश्यक हिस्से हैं।',
      points: [
        'अपना पैसा रखने की सुरक्षित जगह',
        'बचत पर ब्याज कमाएं',
        'ऋण और अन्य वित्तीय सेवाओं तक पहुंच',
        'भुगतान प्राप्त करने और करने का सुरक्षित तरीका',
      ],
    },
    bankTypes: {
      title: 'बैंकों के प्रकार',
      public: {
        title: 'सार्वजनिक क्षेत्र के बैंक',
        description: 'सरकारी स्वामित्व वाले बैंक जैसे SBI, PNB, BOB',
      },
      private: {
        title: 'निजी क्षेत्र के बैंक',
        description: 'निजी स्वामित्व वाले बैंक जैसे HDFC, ICICI, Axis Bank',
      },
      rural: {
        title: 'क्षेत्रीय ग्रामीण बैंक',
        description: 'ग्रामीण क्षेत्रों की सेवा और वित्तीय समावेशन को बढ़ावा देने वाले बैंक',
      },
    },
    terms: {
      title: 'मूल बैंकिंग शब्द',
      balance: {
        title: 'खाता शेष',
        description: 'आपके बैंक खाते में मौजूद धनराशि',
      },
      interest: {
        title: 'ब्याज दर',
        description: 'बचत पर कमाए या ऋण पर भुगतान किए जाने वाले धन का प्रतिशत',
      },
      atm: {
        title: 'एटीएम',
        description: 'नकद निकासी के लिए स्वचालित टेलर मशीन',
      },
      kyc: {
        title: 'केवाईसी',
        description: 'अपने ग्राहक को जानिए - खाता खोलने के लिए आवश्यक दस्तावेज',
      },
    },
  },
  mr: {
    title: 'बँकिंगची ओळख',
    subtitle: 'बँकिंग आणि आर्थिक सेवांची मूलभूत माहिती शिका',
    whatIsBank: {
      title: 'बँक म्हणजे काय?',
      description: 'बँक ही एक आर्थिक संस्था आहे जी जनतेकडून ठेवी स्वीकारते आणि क्रेडिट तयार करते। बँका आपल्या आर्थिक प्रणाली आणि अर्थव्यवस्थेचा महत्त्वाचा भाग आहेत।',
      points: [
        'पैसे ठेवण्याची सुरक्षित जागा',
        'बचतीवर व्याज मिळवा',
        'कर्ज आणि इतर आर्थिक सेवांची उपलब्धता',
        'पैसे पाठवण्याचा आणि स्वीकारण्याचा सुरक्षित मार्ग',
      ],
    },
    bankTypes: {
      title: 'बँकांचे प्रकार',
      public: {
        title: 'सार्वजनिक क्षेत्रातील बँका',
        description: 'सरकारी मालकीच्या बँका जसे SBI, PNB, BOB',
      },
      private: {
        title: 'खाजगी क्षेत्रातील बँका',
        description: 'खाजगी मालकीच्या बँका जसे HDFC, ICICI, Axis Bank',
      },
      rural: {
        title: 'प्रादेशिक ग्रामीण बँका',
        description: 'ग्रामीण भागात सेवा देणाऱ्या आणि आर्थिक समावेश वाढवणाऱ्या बँका',
      },
    },
    terms: {
      title: 'मूलभूत बँकिंग संज्ञा',
      balance: {
        title: 'खाते शिल्लक',
        description: 'तुमच्या बँक खात्यातील रक्कम',
      },
      interest: {
        title: 'व्याज दर',
        description: 'बचतीवर मिळणाऱ्या किंवा कर्जावर द्याव्या लागणाऱ्या पैशांची टक्केवारी',
      },
      atm: {
        title: 'एटीएम',
        description: 'रोख रक्कम काढण्यासाठी स्वयंचलित टेलर मशीन',
      },
      kyc: {
        title: 'केवायसी',
        description: 'तुमच्या ग्राहकाला ओळखा - खाते उघडण्यासाठी आवश्यक कागदपत्रे',
      },
    },
  },
};

export default function BankingIntro() {
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
              <Wallet className="w-6 h-6 mr-2" />
              {t.whatIsBank.title}
            </h3>
            <button
              onClick={() => playAudio(t.whatIsBank.description)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">{t.whatIsBank.description}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {t.whatIsBank.points.map((point, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{point}</span>
                <button
                  onClick={() => playAudio(point)}
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
              <Building2 className="w-6 h-6 mr-2" />
              {t.bankTypes.title}
            </h3>
            <button
              onClick={() => playAudio(t.bankTypes.public.description)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(t.bankTypes).map(([key, value]) => {
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
              <Users className="w-6 h-6 mr-2" />
              {t.terms.title}
            </h3>
            <button
              onClick={() => playAudio(t.terms.balance.description)}
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(t.terms).map(([key, value]) => {
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
      </div>
    </div>
  );
}