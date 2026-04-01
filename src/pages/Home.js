export const userProfile = {
  name: "Ramu Krishnan",
  age: 70,
  weight: 68,
  height: 165,
  gender: "Male",
  location: "Tumkur, Karnataka",
  conditions: ["Type 2 Diabetes", "Mild Hypertension"],
  emergencyContacts: [
    { name: "Suresh (Son)", phone: "+91 98765 43210" },
    { name: "Meena (Daughter)", phone: "+91 91234 56789" },
  ],
};

export const dietPlan = {
  preference: "Vegetarian",
  meals: [
    {
      id: 1,
      type: "Breakfast",
      time: "7:30 AM",
      dish: "Ragi Dosa with Sambar",
      calories: 320,
      ingredients: ["1 cup ragi flour", "½ cup urad dal batter", "Salt to taste", "1 bowl sambar with vegetables"],
      recipe: [
        "Mix ragi flour with urad dal batter and salt. Add water to make a thin batter.",
        "Heat a non-stick tawa on medium flame. Pour one ladle of batter and spread in circles.",
        "Drizzle a few drops of oil on the sides. Cook until crisp.",
        "Serve hot with sambar and coconut chutney.",
      ],
      status: null,
      altFood: "",
    },
    {
      id: 2,
      type: "Mid-Morning Snack",
      time: "10:30 AM",
      dish: "1 Banana + Warm Milk",
      calories: 180,
      ingredients: ["1 ripe banana", "1 glass low-fat milk", "A pinch of turmeric"],
      recipe: [
        "Warm the milk on low flame.",
        "Add a pinch of turmeric and stir.",
        "Have with one ripe banana.",
      ],
      status: null,
      altFood: "",
    },
    {
      id: 3,
      type: "Lunch",
      time: "1:00 PM",
      dish: "Brown Rice + Dal + Sabzi",
      calories: 520,
      ingredients: ["¾ cup brown rice", "1 bowl moong dal", "1 bowl mixed vegetable sabzi", "1 glass buttermilk"],
      recipe: [
        "Cook brown rice with extra water until soft.",
        "Prepare moong dal with turmeric, cumin, and a small amount of ghee.",
        "Cook any seasonal vegetables with minimal oil and spices.",
        "Serve with a glass of salted buttermilk.",
      ],
      status: null,
      altFood: "",
    },
    {
      id: 4,
      type: "Evening Snack",
      time: "4:30 PM",
      dish: "Roasted Chana + Green Tea",
      calories: 150,
      ingredients: ["¼ cup roasted chana", "1 cup green tea", "Lemon juice (optional)"],
      recipe: [
        "Brew green tea for 3 minutes. Do not over-brew.",
        "Add a few drops of lemon juice if desired.",
        "Have with a small bowl of roasted chana.",
      ],
      status: null,
      altFood: "",
    },
    {
      id: 5,
      type: "Dinner",
      time: "7:30 PM",
      dish: "Vegetable Khichdi",
      calories: 380,
      ingredients: ["½ cup rice", "¼ cup moong dal", "Mixed vegetables", "Ghee, cumin, turmeric, salt"],
      recipe: [
        "Wash rice and dal together. Soak for 15 minutes.",
        "In a pressure cooker, heat ghee. Add cumin seeds.",
        "Add chopped vegetables and sauté for 2 minutes.",
        "Add rice, dal, turmeric, salt and 3 cups water.",
        "Pressure cook for 3 whistles. Serve warm.",
      ],
      status: null,
      altFood: "",
    },
  ],
};

export const tablets = [
  {
    id: 1,
    name: "Metformin 500mg",
    purpose: "Blood Sugar Control",
    time: "8:00 AM",
    meal: "After Breakfast",
    color: "#e74c3c",
    taken: null,
  },
  {
    id: 2,
    name: "Amlodipine 5mg",
    purpose: "Blood Pressure",
    time: "9:00 AM",
    meal: "After Breakfast",
    color: "#3498db",
    taken: null,
  },
  {
    id: 3,
    name: "Vitamin D3",
    purpose: "Bone Strength",
    time: "1:00 PM",
    meal: "After Lunch",
    color: "#f39c12",
    taken: null,
  },
  {
    id: 4,
    name: "Metformin 500mg",
    purpose: "Blood Sugar Control",
    time: "8:00 PM",
    meal: "After Dinner",
    color: "#e74c3c",
    taken: null,
  },
];

export const vitals = {
  heartRate: 78,
  bloodPressure: "128/82",
  lastChecked: "10:45 AM",
  status: "normal",
};

export const aiResponses = {
  "knee pain": "For knee pain, I recommend gentle stretching exercises. Avoid climbing stairs repeatedly. Apply a warm compress for 10 minutes twice a day. If pain persists beyond 3 days or worsens, please consult your doctor. Also ensure you are taking your Vitamin D3 tablet as prescribed.",
  "back pain": "Back pain is common. Try lying flat on a firm surface for short periods. Avoid bending forward suddenly. Gentle Cat-Cow yoga stretches can help. Stay hydrated and avoid sitting for long hours. Please consult Dr. Sharma if pain is sharp or radiates to your legs.",
  "elbow pain": "Elbow pain may be due to overuse or mild inflammation. Rest the arm for 24 hours. Apply ice wrapped in a cloth for 15 minutes. Avoid lifting heavy objects. If the pain is near a joint and accompanied by swelling, it is best to visit your orthopedic doctor.",
  "dizzy": "Dizziness can be due to low blood pressure or dehydration. Sit down immediately and drink a glass of water. Avoid sudden standing. Check your blood pressure reading. If dizziness persists for more than 10 minutes or you feel chest pain, please call your emergency contact right away.",
  "sugar": "Your medical report indicates Type 2 Diabetes. Keep your blood sugar in check by following your prescribed diet, taking Metformin on time, and avoiding sweets and white rice. Your current meal plan is designed to manage your sugar levels. Walk for at least 20 minutes after lunch.",
  "bp": "Your blood pressure reading shows Mild Hypertension. Continue taking Amlodipine as prescribed. Reduce salt intake and avoid pickles and papad. Practice deep breathing for 5 minutes every morning. Your current diet plan is low-sodium friendly.",
  "default": "I understand you may not be feeling well. Based on your medical profile, I recommend resting, staying hydrated, and monitoring your vitals. If you experience chest pain, severe dizziness, or difficulty breathing, please contact your emergency contacts immediately or call 108.",
};