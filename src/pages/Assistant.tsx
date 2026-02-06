import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';

export default function Assistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel de TimeTravel Agency. Je suis là pour vous aider à choisir votre destination temporelle idéale. Posez-moi vos questions sur nos voyages, les précautions à prendre, ou demandez-moi des recommandations !',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('paris') || lowerMessage.includes('eiffel') || lowerMessage.includes('1889')) {
      return 'Paris 1889 est une excellente destination pour les amateurs d\'histoire et de culture ! Vous assisterez à l\'inauguration de la Tour Eiffel et découvrirez la Belle Époque parisienne. Le niveau de risque est faible, ce qui en fait un excellent choix pour un premier voyage temporel. Souhaitez-vous en savoir plus sur cette destination ?';
    }

    if (lowerMessage.includes('dinosaure') || lowerMessage.includes('crétacé') || lowerMessage.includes('préhistoire')) {
      return 'Le Crétacé est notre destination la plus spectaculaire, mais aussi la plus dangereuse ! Vous observerez des dinosaures dans leur habitat naturel. Attention : cette destination nécessite un équipement de protection avancé et est réservée aux aventuriers expérimentés. Êtes-vous prêt à relever ce défi ?';
    }

    if (lowerMessage.includes('florence') || lowerMessage.includes('renaissance') || lowerMessage.includes('1504') || lowerMessage.includes('michel-ange') || lowerMessage.includes('léonard')) {
      return 'Florence 1504 vous plongera au cœur de la Renaissance italienne ! Vous pourrez potentiellement croiser Michel-Ange et Léonard de Vinci. Le niveau de risque est modéré en raison des tensions politiques de l\'époque. Une destination parfaite pour les passionnés d\'art et d\'histoire. Voulez-vous des détails sur les précautions à prendre ?';
    }

    if (lowerMessage.includes('danger') || lowerMessage.includes('sécurité') || lowerMessage.includes('risque')) {
      return 'La sécurité est notre priorité absolue ! Chaque voyage inclut : un guide expert, un équipement de protection temporelle de pointe, une assurance voyage dans le temps, et des protocoles d\'urgence. Nos destinations sont classées par niveau de risque (Faible, Modéré, Élevé) pour vous aider à choisir selon votre profil. Quelle destination vous intéresse ?';
    }

    if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('tarif') || lowerMessage.includes('budget')) {
      return 'Nos tarifs varient selon la destination, la durée et le niveau de confort. Nous proposons 4 gammes : Économique (à partir de 5 000€), Moyen (8 000-15 000€), Premium (20 000-40 000€) et Luxe (50 000€+). Chaque formule inclut le transport temporel, l\'équipement, le guide et l\'assurance. Quelle destination vous intéresse ?';
    }

    if (lowerMessage.includes('premier') || lowerMessage.includes('débutant') || lowerMessage.includes('première fois')) {
      return 'Pour un premier voyage temporel, je recommande Paris 1889 ! C\'est notre destination la plus accessible avec un niveau de risque faible. Vous découvrirez une époque fascinante en toute sécurité. Alternativement, Florence 1504 est aussi adaptée aux débutants avec quelques précautions supplémentaires. Laquelle préférez-vous ?';
    }

    if (lowerMessage.includes('durée') || lowerMessage.includes('combien de temps') || lowerMessage.includes('jours')) {
      return 'Nos voyages sont disponibles en plusieurs durées : 3 jours (découverte express), 7 jours (standard), 14 jours (immersion) ou 21 jours (exploration complète). Pour une première expérience, je recommande 7 jours. Quelle destination vous attire ?';
    }

    if (lowerMessage.includes('recommandation') || lowerMessage.includes('conseille') || lowerMessage.includes('suggère')) {
      return 'Pour vous recommander la meilleure destination, j\'ai besoin d\'en savoir plus sur vos préférences ! Êtes-vous plutôt : Culture & Histoire (Paris 1889, Florence 1504), Aventure extrême (Crétacé), ou Première expérience temporelle (Paris 1889) ? Quel est votre profil ?';
    }

    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
      return 'Bonjour ! Ravi de vous aider dans votre quête du voyage temporel parfait. Que souhaitez-vous savoir sur nos destinations : Paris 1889, le Crétacé ou Florence 1504 ?';
    }

    if (lowerMessage.includes('merci')) {
      return 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions. Bon voyage dans le temps ! ⏰';
    }

    return 'C\'est une excellente question ! Nos trois destinations principales sont : Paris 1889 (Belle Époque), le Crétacé (dinosaures) et Florence 1504 (Renaissance). Je peux vous donner plus d\'informations sur la sécurité, les tarifs, les recommandations ou les détails de chaque destination. Que souhaitez-vous savoir ?';
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Assistant Voyage Temporel
            </span>
          </h1>
          <p className="text-gray-400">
            Posez-moi toutes vos questions sur nos destinations et services
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden h-[calc(100vh-300px)] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.sender === 'user'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>

                <div
                  className={`flex-1 max-w-2xl ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-cyan-500/20 text-white border border-cyan-500/30'
                        : 'bg-slate-700/50 text-gray-200 border border-slate-600/50'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-slate-700/50 border border-slate-600/50 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-700 p-4 bg-slate-900/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
