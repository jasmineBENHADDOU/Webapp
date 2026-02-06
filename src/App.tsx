import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Assistant from './pages/Assistant';
import Reservation from './pages/Reservation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([{ role: 'bot', content: 'Bienvenue chez TimeTravel Agency. Quelle époque vous fait rêver ?' }]);
  const [input, setInput] = React.useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await fetch("https://api.mistral.ai/v1/agents/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer TA_CLE_API_ICI" // <--- METS TA CLÉ ICI
        },
        body: JSON.stringify({
          agent_id: "ag_019c333564d27741b65556bec74a8a8c",
          messages: [{ role: "user", content: input }]
        })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.choices[0].message.content }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', content: 'Erreur de connexion...' }]);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
      {isOpen && (
        <div style={{ width: '300px', height: '400px', background: '#161b22', border: '2px solid #00a2ff', borderRadius: '15px', display: 'flex', flexDirection: 'column', marginBottom: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          <div style={{ background: '#00a2ff', color: 'white', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>ASSISTANT TEMPOREL</div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px', color: 'white', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#21262d' : '#00a2ff', padding: '8px', borderRadius: '10px', fontSize: '14px' }}>{m.content}</div>
            ))}
          </div>
          <input 
            style={{ padding: '10px', background: '#0d1117', color: 'white', border: 'none', outline: 'none' }}
            placeholder="Posez votre question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#00a2ff', color: 'white', fontSize: '24px', cursor: 'pointer', border: 'none' }}>🤖</button>
    </div>
  );
}
export default App;
