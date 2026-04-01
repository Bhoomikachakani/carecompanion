import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiResponses, userProfile } from '../data/dummyData';

const quickQuestions = [
  'I have knee pain',
  'I feel dizzy',
  'My back hurts',
  'What about my sugar?',
  'Tell me about my BP',
];

const styles = {
  container: { minHeight: '100vh', background: '#f5f0eb', maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  header: { background: 'linear-gradient(135deg, #4a148c, #6a1b9a)', padding: '40px 24px 20px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' },
  backBtn: { background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '10px', padding: '6px 14px', cursor: 'pointer', fontSize: '14px', marginBottom: '16px' },
  headerRow: { display: 'flex', alignItems: 'center', gap: '14px' },
  aiAvatar: { width: '50px', height: '50px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 },
  headerInfo: {},
  headerTitle: { fontSize: '20px', fontWeight: 'bold', color: '#fff', fontFamily: 'Georgia, serif', margin: '0 0 3px' },
  headerSub: { fontSize: '12px', color: '#ce93d8' },
  onlineDot: { display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#69f0ae', marginRight: '5px' },
  quickRow: { padding: '12px 16px 0', overflowX: 'auto', display: 'flex', gap: '8px', scrollbarWidth: 'none' },
  quickBtn: { background: '#fff', border: '1.5px solid #d0b8e8', borderRadius: '20px', padding: '8px 14px', fontSize: '12px', color: '#4a148c', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: '600', flexShrink: 0 },
  messages: { flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '300px', maxHeight: '50vh' },
  msgBubble: { maxWidth: '80%', padding: '12px 16px', borderRadius: '18px', fontSize: '14px', lineHeight: '1.6' },
  userBubble: { background: '#6a1b9a', color: '#fff', alignSelf: 'flex-end', borderBottomRightRadius: '4px' },
  aiBubble: { background: '#fff', color: '#2d1a3e', alignSelf: 'flex-start', borderBottomLeftRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  aiMeta: { fontSize: '11px', color: '#9c8aab', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' },
  typing: { background: '#fff', alignSelf: 'flex-start', padding: '14px 18px', borderRadius: '18px', borderBottomLeftRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  typingDots: { display: 'flex', gap: '4px' },
  dot: { width: '7px', height: '7px', background: '#9c8aab', borderRadius: '50%' },
  inputRow: { padding: '14px 16px', background: '#fff', borderTop: '1px solid #f0e6ff', display: 'flex', gap: '10px', alignItems: 'center' },
  input: { flex: 1, padding: '12px 16px', border: '1.5px solid #d0b8e8', borderRadius: '25px', fontSize: '14px', outline: 'none', background: '#fdf8ff', fontFamily: 'Georgia, serif', color: '#2d1a3e' },
  sendBtn: { background: '#6a1b9a', color: '#fff', border: 'none', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '18px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  micBtn: { background: '#f3e5f5', color: '#6a1b9a', border: 'none', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '18px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  disclaimer: { fontSize: '11px', color: '#9c8aab', textAlign: 'center', padding: '6px 16px 0', background: '#fff' },
};

const getAIResponse = (text) => {
  const lower = text.toLowerCase();
  if (lower.includes('knee')) return aiResponses['knee pain'];
  if (lower.includes('back')) return aiResponses['back pain'];
  if (lower.includes('elbow')) return aiResponses['elbow pain'];
  if (lower.includes('dizz')) return aiResponses['dizzy'];
  if (lower.includes('sugar') || lower.includes('diabetes')) return aiResponses['sugar'];
  if (lower.includes('bp') || lower.includes('blood pressure') || lower.includes('hypertension')) return aiResponses['bp'];
  return aiResponses['default'];
};

export default function AIChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: `Hello ${userProfile.name.split(' ')[0]}! 👋 I'm your CareCompanion AI. I have your medical profile — I know about your ${userProfile.conditions.join(' and ')}.\n\nHow are you feeling today? You can ask me about any pain, symptoms, or health questions.`,
    }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', text: msg }]);
    setTyping(true);
    setTimeout(() => {
      const response = getAIResponse(msg);
      setTyping(false);
      setMessages(m => [...m, { role: 'ai', text: response }]);
    }, 1500);
  };

  const handleMic = () => {
    const spoken = prompt('🎙️ Speak your question (type it here for demo):');
    if (spoken) sendMessage(spoken);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/home')}>← Home</button>
        <div style={styles.headerRow}>
          <div style={styles.aiAvatar}>🤖</div>
          <div style={styles.headerInfo}>
            <h1 style={styles.headerTitle}>AI Health Assistant</h1>
            <div style={styles.headerSub}><span style={styles.onlineDot}/>Online — Knows your medical profile</div>
          </div>
        </div>
      </div>

      <div style={styles.quickRow}>
        {quickQuestions.map((q, i) => (
          <button key={i} style={styles.quickBtn} onClick={() => sendMessage(q)}>{q}</button>
        ))}
      </div>

      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            {msg.role === 'ai' && (
              <div style={styles.aiMeta}><span>🤖</span> CareCompanion AI</div>
            )}
            <div style={{ ...styles.msgBubble, ...(msg.role === 'user' ? styles.userBubble : styles.aiBubble) }}>
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={styles.aiMeta}><span>🤖</span> CareCompanion AI is typing...</div>
            <div style={styles.typing}>
              <div style={styles.typingDots}>
                <div style={{ ...styles.dot, animation: 'bounce 1s infinite 0s' }}>•</div>
                <div style={{ ...styles.dot, animation: 'bounce 1s infinite 0.2s' }}>•</div>
                <div style={{ ...styles.dot, animation: 'bounce 1s infinite 0.4s' }}>•</div>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={styles.disclaimer}>
        ⚠️ AI advice is for guidance only. Always consult your doctor for medical decisions.
      </div>

      <div style={styles.inputRow}>
        <button style={styles.micBtn} onClick={handleMic}>🎙️</button>
        <input
          style={styles.input}
          placeholder="Type your symptoms or question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button style={styles.sendBtn} onClick={() => sendMessage()}>➤</button>
      </div>
    </div>
  );
}
