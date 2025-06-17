import React from 'react';
import logo from './Frame 7.png';
import {
  CheckCircle2,
  Clock,
  FileText,
  Shield,
  TruckIcon,
  AlertCircle,
  ChevronRight,
  Lock,
  CreditCard
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = React.useState(900); // 15 minutes in seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Garantia Legal',
      description: 'Documento exigido por lei que garante seus direitos de troca e devolução'
    },
    {
      icon: TruckIcon,
      title: 'Rastreabilidade',
      description: 'Acompanhamento oficial do seu pedido em todo o processo de entrega'
    },
    {
      icon: FileText,
      title: 'Segurança',
      description: 'Comprovante fiscal que assegura a autenticidade dos produtos Labubu™'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'A nota fiscal me ajudou quando precisei fazer uma troca. Processo super tranquilo!',
      date: '2 dias atrás'
    },
    {
      name: 'João Santos',
      text: 'Importante ter esse documento para garantir a procedência do produto.',
      date: '1 semana atrás'
    }
  ];

  const faqs = [
    {
      question: 'Por que preciso pagar pela nota fiscal?',
      answer: 'A taxa cobre os custos operacionais e impostos relacionados à emissão do documento fiscal oficial.'
    },
    {
      question: 'A nota fiscal é obrigatória?',
      answer: 'Sim, a nota fiscal é um documento obrigatório por lei para garantir a regularidade da compra.'
    },
    {
      question: 'O que acontece se eu não emitir a nota fiscal?',
      answer: 'Seu pedido pode sofrer atrasos de até 7 dias úteis e você não terá garantia oficial do produto.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Header with Logo */}
      <div className="bg-[#FFFFFF] py-4 shadow-sm"> {/* Alterado para branco */}
        <div className="max-w-4xl mx-auto px-4">
          <img src={logo} alt="Labubu™ Logo" className="h-12" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#F495BD] shadow-sm"> {/* Alterado para rosa */}
        <div className="max-w-4xl mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-gray-800 w-6 h-6" />
              <span className="text-gray-800 font-medium">Compra concluída</span>
            </div>
            <div className="h-0.5 w-16 bg-gray-200" />
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center">
                2
              </div>
              <span className="text-gray-800 font-medium">Finalização pendente</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sua compra está quase finalizada!
          </h1>
          <p className="text-xl text-gray-600">
            Emissão de Nota Fiscal Oficial - Garanta seus direitos de consumidor
          </p>
        </div>

        {/* Confirmation Message */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <CheckCircle2 className="text-green-500 w-8 h-8" />
            <div>
              <h2 className="text-xl font-semibold">Parabéns! Seu pedido foi recebido com sucesso.</h2>
              <p className="text-gray-600">Número do pedido: #283947</p>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="text-[#F495BD] w-5 h-5" />
              <span className="font-medium">Tempo restante para emissão:</span>
            </div>
            <div className="text-2xl font-bold text-[#F495BD]">{formatTime(timeLeft)}</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <benefit.icon className="w-8 h-8 text-[#F495BD] mb-4" />
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">R$ 16,40</h2>
            <p className="text-gray-600">Taxa única de emissão de NF</p>
          </div>

          <a
            href="https://checkout.taxadeliberacao.store/checkout?product=9a91c12f-2ef3-11f0-975a-46da4690ad53"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#F495BD] hover:bg-[#e084ac] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 mb-4 no-underline"
          >
            <span>EMITIR NOTA FISCAL AGORA</span>
            <ChevronRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              Pagamento Seguro
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-1" />
              Principais cartões aceitos
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-medium">{testimonial.name}</span>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 text-[#F495BD] mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-700">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700">Suporte</a>
          </div>
          <p>© 2025 Labubu™. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;