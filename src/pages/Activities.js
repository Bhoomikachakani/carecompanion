import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const yogaPoses = [
  { name: 'Tadasana', desc: 'Mountain Pose — improves posture and balance', emoji: '🧍', duration: '1 min' },
  { name: 'Vrikshasana', desc: 'Tree Pose — strengthens legs and focus', emoji: '🌳', duration: '1 min each side' },
  { name: 'Balasana', desc: 'Child\'s Pose — relieves back pain and stress', emoji: '🙇', duration: '2 min' },
  { name: 'Sukhasana', desc: 'Easy Pose — calms the mind, good for breathing', emoji: '🧘', duration: '3 min' },
];

const exercises = [
  { name: 'Neck Rolls', desc: 'Gentle neck rotation — relieves stiffness', emoji: '🔄', reps: '5 each side' },
  { name: 'Seated Leg Raises', desc: 'Strengthens knees — do while seated on chair', emoji: '🦵', reps: '10 reps' },
  { name: 'Wall Push-ups', desc: 'Upper body strength — stand 1 arm away from wall', emoji: '🤸', reps: '10 reps' },
  { name: 'Heel Raises', desc: 'Improves circulation in legs', emoji: '👟', reps: '15 reps' },
];

const mudras = [
  { name: 'Gyan Mudra', desc: 'Touch index finger to thumb — improves memory', emoji: '🤌', duration: '10 min' },
  { name: 'Prana Mudra', desc: 'Ring + little finger to thumb — boosts energy', emoji: '🤙', duration: '10 min' },
  { name: 'Apana Mudra', desc: 'Middle + ring finger to thumb — aids digestion', emoji: '✌️', duration: '10 min' },
];

const styles = {
  container: { minHeight: '100vh', background: '#f5f0eb', maxWidth: '420px', margin: '0 auto', paddingBottom: '40px' },
  header: { background: 'linear-gradient(135deg, #e65100, #f57c00)', padding: '40px 24px 24px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' },
  backBtn: { background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '10px', padding: '6px 14px', cursor: 'pointer', fontSize: '14px', marginBottom: '16px' },
  headerTitle: { fontSize: '26px', fontWeight: 'bold', color: '#fff', fontFamily: 'Georgia, serif', margin: '0 0 4px' },
  headerSub: { fontSize: '13px', color: '#ffcc80' },
  body: { padding: '20px' },
  stepCard: { background: '#fff', borderRadius: '18px', padding: '20px', marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' },
  stepHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' },
  stepTitle: { fontSize: '17px', fontWeight: 'bold', color: '#1a3c2e', fontFamily: 'Georgia, serif' },
  stepBadge: { background: '#e8f5e9', color: '#2e7d32', borderRadius: '10px', padding: '4px 12px', fontSize: '13px', fontWeight: '700' },
  progressBg: { background: '#f0f0f0', borderRadius: '10px', height: '12px', overflow: 'hidden' },
  progressFill: { background: 'linear-gradient(90deg, #4caf50, #8bc34a)', borderRadius: '10px', height: '12px', transition: 'width 0.5s' },
  stepFooter: { display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: '#7a8f82' },
  sectionLabel: { fontSize: '12px', fontWeight: 'bold', color: '#7a8f82', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', marginTop: '8px' },
  activityToggleRow: { display: 'flex', gap: '10px', marginBottom: '16px' },
  actToggle: { flex: 1, padding: '10px', borderRadius: '12px', border: '1.5px solid #e0e0e0', cursor: 'pointer', textAlign: 'center', fontSize: '13px', fontWeight: '600', background: '#fff' },
  actToggleActive: { border: '1.5px solid #f57c00', background: '#fff8e1', color: '#e65100' },
  actCard: { background: '#fff', borderRadius: '14px', padding: '16px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' },
  actEmoji: { fontSize: '28px', flexShrink: 0 },
  actInfo: { flex: 1 },
  actName: { fontSize: '15px', fontWeight: 'bold', color: '#1a3c2e', fontFamily: 'Georgia, serif', margin: '0 0 3px' },
  actDesc: { fontSize: '12px', color: '#7a8f82', margin: '0 0 4px' },
  actDuration: { display: 'inline-block', background: '#fff3e0', color: '#e65100', borderRadius: '8px', padding: '2px 8px', fontSize: '11px', fontWeight: '600' },
  doneBtn: { background: '#e8f5e9', color: '#2e7d32', border: 'none', borderRadius: '10px', padding: '8px 12px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', flexShrink: 0 },
  doneBtnActive: { background: '#c8e6c9' },
  linkBtn: { display: 'block', background: '#e3f2fd', color: '#1565c0', border: 'none', borderRadius: '10px', padding: '10px 14px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', marginTop: '6px', width: '100%', textAlign: 'left' },
};

export default function Activities() {
  const navigate = useNavigate();
  const [steps] = useState(4320);
  const stepGoal = 7000;
  const progress = Math.min((steps / stepGoal) * 100, 100);

  const [activeTab, setActiveTab] = useState('yoga');
  const [selected, setSelected] = useState({ yoga: true, exercise: false, mudras: false });
  const [done, setDone] = useState({});

  const toggleDone = (key) => setDone(d => ({ ...d, [key]: !d[key] }));

  const handleLink = (name) => {
    alert(`🎥 This would open a YouTube video for "${name}" exercises suitable for elderly beginners.`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/home')}>← Home</button>
        <h1 style={styles.headerTitle}>🧘 Activities</h1>
        <div style={styles.headerSub}>Daily movement for a healthy life</div>
      </div>

      <div style={styles.body}>
        {/* Step Count */}
        <div style={styles.stepCard}>
          <div style={styles.stepHeader}>
            <span style={styles.stepTitle}>👟 Step Count</span>
            <span style={styles.stepBadge}>{steps.toLocaleString()} steps</span>
          </div>
          <div style={styles.progressBg}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
          <div style={styles.stepFooter}>
            <span>0</span>
            <span style={{ color: '#e65100', fontWeight: '600' }}>{Math.round(progress)}% of daily goal</span>
            <span>Goal: {stepGoal.toLocaleString()}</span>
          </div>
        </div>

        {/* Activity Selector */}
        <div style={styles.sectionLabel}>Choose Your Activities</div>
        <div style={styles.activityToggleRow}>
          {[['yoga', '🧘 Yoga'], ['exercise', '🤸 Exercise'], ['mudras', '🤌 Mudras']].map(([key, label]) => (
            <button key={key}
              style={{ ...styles.actToggle, ...(selected[key] ? styles.actToggleActive : {}) }}
              onClick={() => { setSelected(s => ({ ...s, [key]: !s[key] })); setActiveTab(key); }}>
              {label}
            </button>
          ))}
        </div>

        {/* Tab Switcher */}
        {selected.yoga && (
          <>
            <div style={styles.sectionLabel}>🧘 Yoga Poses (Beginner Safe)</div>
            {yogaPoses.map((pose, i) => (
              <div key={i} style={styles.actCard}>
                <span style={styles.actEmoji}>{pose.emoji}</span>
                <div style={styles.actInfo}>
                  <p style={styles.actName}>{pose.name}</p>
                  <p style={styles.actDesc}>{pose.desc}</p>
                  <span style={styles.actDuration}>⏱ {pose.duration}</span>
                  <button style={styles.linkBtn} onClick={() => handleLink(pose.name)}>
                    ▶ Watch Guided Video
                  </button>
                </div>
                <button
                  style={{ ...styles.doneBtn, ...(done[`yoga_${i}`] ? styles.doneBtnActive : {}) }}
                  onClick={() => toggleDone(`yoga_${i}`)}>
                  {done[`yoga_${i}`] ? '✅' : 'Done'}
                </button>
              </div>
            ))}
          </>
        )}

        {selected.exercise && (
          <>
            <div style={styles.sectionLabel}>🤸 Basic Exercises</div>
            {exercises.map((ex, i) => (
              <div key={i} style={styles.actCard}>
                <span style={styles.actEmoji}>{ex.emoji}</span>
                <div style={styles.actInfo}>
                  <p style={styles.actName}>{ex.name}</p>
                  <p style={styles.actDesc}>{ex.desc}</p>
                  <span style={styles.actDuration}>🔁 {ex.reps}</span>
                  <button style={styles.linkBtn} onClick={() => handleLink(ex.name)}>
                    ▶ Watch Guided Video
                  </button>
                </div>
                <button
                  style={{ ...styles.doneBtn, ...(done[`ex_${i}`] ? styles.doneBtnActive : {}) }}
                  onClick={() => toggleDone(`ex_${i}`)}>
                  {done[`ex_${i}`] ? '✅' : 'Done'}
                </button>
              </div>
            ))}
          </>
        )}

        {selected.mudras && (
          <>
            <div style={styles.sectionLabel}>🤌 Mudras (Hand Gestures)</div>
            {mudras.map((m, i) => (
              <div key={i} style={styles.actCard}>
                <span style={styles.actEmoji}>{m.emoji}</span>
                <div style={styles.actInfo}>
                  <p style={styles.actName}>{m.name}</p>
                  <p style={styles.actDesc}>{m.desc}</p>
                  <span style={styles.actDuration}>⏱ {m.duration} daily</span>
                </div>
                <button
                  style={{ ...styles.doneBtn, ...(done[`mudra_${i}`] ? styles.doneBtnActive : {}) }}
                  onClick={() => toggleDone(`mudra_${i}`)}>
                  {done[`mudra_${i}`] ? '✅' : 'Done'}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
