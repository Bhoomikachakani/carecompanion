
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #1a3c2e 0%, #2d5a3d 50%, #1a3c2e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#fffdf8',
    borderRadius: '24px',
    padding: '40px 36px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  logo: {
    textAlign: 'center',
    marginBottom: '28px',
  },
  logoIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '8px',
  },
  logoTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#1a3c2e',
    fontFamily: 'Georgia, serif',
    margin: 0,
  },
  logoSub: {
    fontSize: '13px',
    color: '#7a8f82',
    marginTop: '4px',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#2d5a3d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '12px',
    marginTop: '20px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  label: {
    display: 'block',
    fontSize: '12px',
    color: '#5a6b5f',
    marginBottom: '4px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #d4e6da',
    borderRadius: '12px',
    fontSize: '15px',
    background: '#f8fdf9',
    color: '#1a3c2e',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'Georgia, serif',
  },
  select: {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #d4e6da',
    borderRadius: '12px',
    fontSize: '15px',
    background: '#f8fdf9',
    color: '#1a3c2e',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'Georgia, serif',
  },
  contactRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '10px',
  },
  uploadBox: {
    border: '2px dashed #a8c5b0',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#f0f9f2',
    color: '#2d5a3d',
    fontSize: '14px',
  },
  uploadedBadge: {
    background: '#d4edda',
    color: '#1a5c2e',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  },
  btn: {
    width: '100%',
    padding: '16px',
    background: '#2d5a3d',
    color: '#fff',
    border: 'none',
    borderRadius: '14px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '28px',
    fontFamily: 'Georgia, serif',
    letterSpacing: '0.5px',
  },
  optionalTag: {
    fontSize: '10px',
    color: '#9ab0a0',
    marginLeft: '4px',
  },
};

export default function Onboarding() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', age: '', gender: 'Male', weight: '', height: '',
    location: '', contact1Name: '', contact1Phone: '',
    contact2Name: '', contact2Phone: '',
  });
  const [reportUploaded, setReportUploaded] = useState(false);
  const [step, setStep] = useState(1);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleNext = () => {
    if (!form.name || !form.age || !form.weight || !form.location) {
      alert('Please fill Name, Age, Weight and Location to continue.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = () => {
    if (!form.contact1Name || !form.contact1Phone) {
      alert('Please add at least one emergency contact.');
      return;
    }
    navigate('/home');
  };

  if (step === 1) return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🌿</span>
          <h1 style={styles.logoTitle}>CareCompanion</h1>
          <p style={styles.logoSub}>Your AI Health Partner</p>
        </div>

        <div style={styles.sectionTitle}>Personal Details</div>

        <div style={{ marginBottom: '12px' }}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} placeholder="e.g. Ramu Krishnan"
            value={form.name} onChange={e => update('name', e.target.value)} />
        </div>

        <div style={styles.row}>
          <div>
            <label style={styles.label}>Age</label>
            <input style={styles.input} type="number" placeholder="70"
              value={form.age} onChange={e => update('age', e.target.value)} />
          </div>
          <div>
            <label style={styles.label}>Gender</label>
            <select style={styles.select} value={form.gender} onChange={e => update('gender', e.target.value)}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div style={{ ...styles.row, marginTop: '12px' }}>
          <div>
            <label style={styles.label}>Weight (kg)</label>
            <input style={styles.input} type="number" placeholder="68"
              value={form.weight} onChange={e => update('weight', e.target.value)} />
          </div>
          <div>
            <label style={styles.label}>Height (cm) <span style={styles.optionalTag}>optional</span></label>
            <input style={styles.input} type="number" placeholder="165"
              value={form.height} onChange={e => update('height', e.target.value)} />
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <label style={styles.label}>Location</label>
          <input style={styles.input} placeholder="e.g. Tumkur, Karnataka"
            value={form.location} onChange={e => update('location', e.target.value)} />
        </div>

        <button style={styles.btn} onClick={handleNext}>Continue →</button>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🌿</span>
          <h1 style={styles.logoTitle}>CareCompanion</h1>
          <p style={styles.logoSub}>Almost done, {form.name.split(' ')[0]}!</p>
        </div>

        <div style={styles.sectionTitle}>Emergency Contacts</div>
        <div style={styles.contactRow}>
          <div>
            <label style={styles.label}>Contact 1 Name</label>
            <input style={styles.input} placeholder="Suresh (Son)"
              value={form.contact1Name} onChange={e => update('contact1Name', e.target.value)} />
          </div>
          <div>
            <label style={styles.label}>Phone Number</label>
            <input style={styles.input} placeholder="+91 98765 43210"
              value={form.contact1Phone} onChange={e => update('contact1Phone', e.target.value)} />
          </div>
        </div>
        <div style={styles.contactRow}>
          <div>
            <label style={styles.label}>Contact 2 Name <span style={styles.optionalTag}>optional</span></label>
            <input style={styles.input} placeholder="Meena (Daughter)"
              value={form.contact2Name} onChange={e => update('contact2Name', e.target.value)} />
          </div>
          <div>
            <label style={styles.label}>Phone Number</label>
            <input style={styles.input} placeholder="+91 91234 56789"
              value={form.contact2Phone} onChange={e => update('contact2Phone', e.target.value)} />
          </div>
        </div>

        <div style={styles.sectionTitle}>Medical Report</div>
        {!reportUploaded ? (
          <div style={styles.uploadBox} onClick={() => setReportUploaded(true)}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📋</div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Upload Medical Report</div>
            <div style={{ fontSize: '12px', color: '#7a8f82' }}>Tap to upload PDF or photo</div>
          </div>
        ) : (
          <div style={styles.uploadedBadge}>
            <span>✅</span>
            <span>Medical_Report.pdf uploaded — AI is reading your report...</span>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
          <button style={{ ...styles.btn, background: '#e8f0ea', color: '#2d5a3d', marginTop: 0, width: 'auto', padding: '16px 24px' }}
            onClick={() => setStep(1)}>← Back</button>
          <button style={{ ...styles.btn, marginTop: 0, flex: 1 }} onClick={handleSubmit}>
            Get Started 🌿
          </button>
        </div>
      </div>
    </div>
  );
}