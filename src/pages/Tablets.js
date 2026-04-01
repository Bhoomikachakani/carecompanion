
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tablets as initialTablets } from '../data/dummyData';

const styles = {
  container: { minHeight: '100vh', background: '#f5f0eb', maxWidth: '420px', margin: '0 auto', paddingBottom: '40px' },
  header: { background: 'linear-gradient(135deg, #0d47a1, #1565c0)', padding: '40px 24px 24px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' },
  backBtn: { background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '10px', padding: '6px 14px', cursor: 'pointer', fontSize: '14px', marginBottom: '16px' },
  headerTitle: { fontSize: '26px', fontWeight: 'bold', color: '#fff', fontFamily: 'Georgia, serif', margin: '0 0 4px' },
  headerSub: { fontSize: '13px', color: '#90caf9' },
  statRow: { display: 'flex', gap: '12px', marginTop: '16px' },
  statBox: { flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px', textAlign: 'center' },
  statNum: { fontSize: '22px', fontWeight: 'bold', color: '#fff', display: 'block' },
  statLabel: { fontSize: '11px', color: '#90caf9', marginTop: '2px', display: 'block' },
  body: { padding: '20px' },
  sectionLabel: { fontSize: '12px', fontWeight: 'bold', color: '#7a8f82', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' },
  tabletCard: { background: '#fff', borderRadius: '18px', marginBottom: '14px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' },
  cardTop: { padding: '18px', display: 'flex', alignItems: 'center', gap: '16px' },
  pillIcon: { width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 },
  tabletInfo: { flex: 1 },
  tabletName: { fontSize: '16px', fontWeight: 'bold', color: '#1a237e', fontFamily: 'Georgia, serif', margin: '0 0 3px' },
  tabletPurpose: { fontSize: '12px', color: '#7a8f82', margin: '0 0 6px' },
  timeBadge: { display: 'inline-block', background: '#e3f2fd', color: '#1565c0', borderRadius: '8px', padding: '3px 10px', fontSize: '12px', fontWeight: '600', marginRight: '6px' },
  mealBadge: { display: 'inline-block', background: '#f3e5f5', color: '#6a1b9a', borderRadius: '8px', padding: '3px 10px', fontSize: '12px', fontWeight: '600' },
  markSection: { padding: '14px 18px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '10px', alignItems: 'center' },
  markLabel: { fontSize: '12px', color: '#7a8f82', flex: 1 },
  yesBtn: { padding: '8px 20px', background: '#e3f2fd', color: '#0d47a1', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' },
  noBtn: { padding: '8px 20px', background: '#ffebee', color: '#c62828', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' },
  takenBadge: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', padding: '14px 18px', borderTop: '1px solid #f0f0f0' },
  missedBadge: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', padding: '14px 18px', borderTop: '1px solid #f0f0f0', color: '#c62828' },
  addCard: { border: '2px dashed #bbdefb', borderRadius: '18px', padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#f0f7ff' },
  addTitle: { fontSize: '15px', fontWeight: 'bold', color: '#1565c0', margin: '0 0 4px' },
  addSub: { fontSize: '12px', color: '#90a4ae', margin: 0 },
  notifBox: { background: '#e8f4fd', border: '1.5px solid #90caf9', borderRadius: '14px', padding: '14px 16px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start' },
  notifText: { fontSize: '13px', color: '#1565c0', lineHeight: '1.5' },
};

export default function Tablets() {
  const navigate = useNavigate();
  const [tablets, setTablets] = useState(initialTablets);

  const markTablet = (id, status) => {
    setTablets(t => t.map(tab => tab.id === id ? { ...tab, taken: status } : tab));
  };

  const takenCount = tablets.filter(t => t.taken === true).length;
  const missedCount = tablets.filter(t => t.taken === false).length;
  const pendingCount = tablets.filter(t => t.taken === null).length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/home')}>← Home</button>
        <h1 style={styles.headerTitle}>💊 Tablets</h1>
        <div style={styles.headerSub}>Tap Yes after taking each medicine</div>
        <div style={styles.statRow}>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{takenCount}</span>
            <span style={styles.statLabel}>✅ Taken</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{pendingCount}</span>
            <span style={styles.statLabel}>⏳ Pending</span>
          </div>
          <div style={styles.statBox}>
            <span style={styles.statNum}>{missedCount}</span>
            <span style={styles.statLabel}>❌ Missed</span>
          </div>
        </div>
      </div>

      <div style={styles.body}>
        <div style={styles.notifBox}>
          <span style={{ fontSize: '18px' }}>🔔</span>
          <div style={styles.notifText}>
            <strong>Reminder:</strong> You will receive a notification with the tablet photo at the scheduled time. Default is marked as <strong>Missed</strong> if not responded.
          </div>
        </div>

        <div style={styles.sectionLabel}>Today's Medicines</div>

        {tablets.map(tab => (
          <div key={tab.id} style={styles.tabletCard}>
            <div style={styles.cardTop}>
              <div style={{ ...styles.pillIcon, background: tab.color + '22', border: `2px solid ${tab.color}` }}>
                💊
              </div>
              <div style={styles.tabletInfo}>
                <p style={styles.tabletName}>{tab.name}</p>
                <p style={styles.tabletPurpose}>{tab.purpose}</p>
                <span style={styles.timeBadge}>🕐 {tab.time}</span>
                <span style={styles.mealBadge}>{tab.meal}</span>
              </div>
            </div>

            {tab.taken === null && (
              <div style={styles.markSection}>
                <span style={styles.markLabel}>Have you taken this tablet?</span>
                <button style={styles.yesBtn} onClick={() => markTablet(tab.id, true)}>✅ Yes</button>
                <button style={styles.noBtn} onClick={() => markTablet(tab.id, false)}>❌ No</button>
              </div>
            )}

            {tab.taken === true && (
              <div style={{ ...styles.takenBadge, color: '#2e7d32', background: '#e8f5e9' }}>
                ✅ Taken — Great job!
              </div>
            )}

            {tab.taken === false && (
              <div style={{ ...styles.missedBadge, background: '#ffebee' }}>
                ❌ Missed — Please consult your doctor if you miss regularly.
              </div>
            )}
          </div>
        ))}

        <div style={styles.addCard} onClick={() => alert('📷 Camera would open here to take a photo of your tablet and set a reminder time.')}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>➕</div>
          <p style={styles.addTitle}>Add New Medicine</p>
          <p style={styles.addSub}>Take a photo of the tablet box + set time</p>
        </div>
      </div>
    </div>
  );
}