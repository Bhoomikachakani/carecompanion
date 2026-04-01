import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dietPlan } from '../data/dummyData';

const styles = {
  container: { minHeight: '100vh', background: '#f5f0eb', maxWidth: '420px', margin: '0 auto', paddingBottom: '40px' },
  header: { background: 'linear-gradient(135deg, #1b5e20, #388e3c)', padding: '40px 24px 24px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' },
  backBtn: { background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: '10px', padding: '6px 14px', cursor: 'pointer', fontSize: '14px', marginBottom: '16px' },
  headerTitle: { fontSize: '26px', fontWeight: 'bold', color: '#fff', fontFamily: 'Georgia, serif', margin: '0 0 4px' },
  headerSub: { fontSize: '13px', color: '#a5d6a7' },
  dietToggle: { display: 'flex', gap: '10px', marginTop: '16px' },
  toggleBtn: { padding: '8px 18px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600' },
  body: { padding: '20px' },
  mealCard: { background: '#fff', borderRadius: '18px', marginBottom: '14px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' },
  mealHeader: { padding: '16px 18px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  mealLeft: {},
  mealType: { fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: '#388e3c', marginBottom: '3px' },
  mealName: { fontSize: '17px', fontWeight: 'bold', color: '#1b3a1e', fontFamily: 'Georgia, serif', margin: 0 },
  mealTime: { fontSize: '12px', color: '#7a8f82', marginTop: '3px' },
  calBadge: { background: '#e8f5e9', color: '#2e7d32', borderRadius: '10px', padding: '4px 10px', fontSize: '12px', fontWeight: '600' },
  expandBtn: { width: '100%', padding: '10px', background: '#f5fbf5', border: 'none', color: '#388e3c', fontSize: '13px', cursor: 'pointer', fontWeight: '600', borderTop: '1px solid #e8f5e9' },
  recipeBox: { padding: '16px 18px', background: '#f9fdf9', borderTop: '1px solid #e8f5e9' },
  recipeTitle: { fontSize: '12px', fontWeight: 'bold', color: '#2e7d32', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' },
  ingredientChip: { display: 'inline-block', background: '#e8f5e9', color: '#1b5e20', borderRadius: '8px', padding: '4px 10px', fontSize: '12px', margin: '3px 3px 3px 0' },
  stepItem: { fontSize: '13px', color: '#3a5a3c', marginBottom: '6px', paddingLeft: '16px', position: 'relative', lineHeight: '1.5' },
  markSection: { padding: '14px 18px', borderTop: '1px solid #f0f0f0' },
  markLabel: { fontSize: '12px', color: '#7a8f82', marginBottom: '10px', fontWeight: '600' },
  markBtns: { display: 'flex', gap: '10px' },
  markBtn: { flex: 1, padding: '10px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600' },
  altInput: { marginTop: '12px' },
  altLabel: { fontSize: '12px', color: '#e67e22', fontWeight: '600', marginBottom: '6px', display: 'block' },
  altInputField: { width: '100%', padding: '10px 12px', border: '1.5px solid #ffd0a0', borderRadius: '10px', fontSize: '14px', background: '#fffaf5', boxSizing: 'border-box', fontFamily: 'Georgia, serif' },
  micBtn: { background: '#fff3e0', border: '1.5px solid #ffcc80', borderRadius: '10px', padding: '8px 14px', cursor: 'pointer', fontSize: '13px', marginTop: '8px', width: '100%', color: '#e65100', fontWeight: '600' },
  doneBadge: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#e8f5e9', borderRadius: '10px', fontSize: '13px', color: '#2e7d32', fontWeight: '600' },
};

export default function Diet() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState(dietPlan.meals);
  const [expanded, setExpanded] = useState(null);
  const [preference, setPreference] = useState('Vegetarian');

  const markMeal = (id, status) => {
    setMeals(m => m.map(meal => meal.id === id ? { ...meal, status } : meal));
  };

  const setAltFood = (id, text) => {
    setMeals(m => m.map(meal => meal.id === id ? { ...meal, altFood: text } : meal));
  };

  const handleMic = (id) => {
    const heard = prompt("🎙️ Speak what you ate (type it here for demo):");
    if (heard) setAltFood(id, heard);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/home')}>← Home</button>
        <h1 style={styles.headerTitle}>🥗 Today's Diet</h1>
        <div style={styles.headerSub}>Personalized for Diabetes & Hypertension</div>
        <div style={styles.dietToggle}>
          {['Vegetarian', 'Non-Vegetarian', 'Both'].map(p => (
            <button key={p} style={{
              ...styles.toggleBtn,
              background: preference === p ? '#fff' : 'rgba(255,255,255,0.2)',
              color: preference === p ? '#1b5e20' : '#fff',
            }} onClick={() => setPreference(p)}>{p === 'Vegetarian' ? '🌿 Veg' : p === 'Non-Vegetarian' ? '🍗 Non-Veg' : '🍽️ Both'}</button>
          ))}
        </div>
      </div>

      <div style={styles.body}>
        {meals.map(meal => (
          <div key={meal.id} style={styles.mealCard}>
            <div style={styles.mealHeader}>
              <div style={styles.mealLeft}>
                <div style={styles.mealType}>{meal.type}</div>
                <p style={styles.mealName}>{meal.dish}</p>
                <div style={styles.mealTime}>🕐 {meal.time}</div>
              </div>
              <span style={styles.calBadge}>{meal.calories} cal</span>
            </div>

            <button style={styles.expandBtn} onClick={() => setExpanded(expanded === meal.id ? null : meal.id)}>
              {expanded === meal.id ? '▲ Hide Recipe' : '▼ View Recipe & Ingredients'}
            </button>

            {expanded === meal.id && (
              <div style={styles.recipeBox}>
                <div style={styles.recipeTitle}>🛒 Ingredients</div>
                <div style={{ marginBottom: '14px' }}>
                  {meal.ingredients.map((ing, i) => (
                    <span key={i} style={styles.ingredientChip}>{ing}</span>
                  ))}
                </div>
                <div style={styles.recipeTitle}>👨‍🍳 How to Make</div>
                {meal.recipe.map((step, i) => (
                  <div key={i} style={styles.stepItem}>
                    <strong style={{ color: '#388e3c' }}>{i + 1}.</strong> {step}
                  </div>
                ))}
              </div>
            )}

            <div style={styles.markSection}>
              {meal.status === null && (
                <>
                  <div style={styles.markLabel}>Did you have this meal?</div>
                  <div style={styles.markBtns}>
                    <button style={{ ...styles.markBtn, background: '#e8f5e9', color: '#1b5e20' }}
                      onClick={() => markMeal(meal.id, 'done')}>✅ Yes, had it</button>
                    <button style={{ ...styles.markBtn, background: '#fff3e0', color: '#e65100' }}
                      onClick={() => markMeal(meal.id, 'other')}>🔄 Had something else</button>
                  </div>
                </>
              )}

              {meal.status === 'done' && (
                <div style={styles.doneBadge}>✅ Marked as completed!</div>
              )}

              {meal.status === 'other' && (
                <div style={styles.altInput}>
                  <span style={styles.altLabel}>What did you eat instead?</span>
                  <input style={styles.altInputField} placeholder="e.g. Idli with sambar..."
                    value={meal.altFood} onChange={e => setAltFood(meal.id, e.target.value)} />
                  <button style={styles.micBtn} onClick={() => handleMic(meal.id)}>🎙️ Tap to Speak Instead</button>
                  {meal.altFood && (
                    <div style={{ ...styles.doneBadge, marginTop: '8px', background: '#fff3e0', color: '#e65100' }}>
                      📝 Logged: {meal.altFood}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}