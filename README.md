# 💰 Tip Calculator App

## 📝 Description

The **Tip Calculator App** is a simple tool that helps you and your friend split a bill fairly based on your individual satisfaction levels. Each person provides:

- The **bill amount**
- A **satisfaction rating** (used to calculate their tip percentage)

The app then:
1. Calculates **your tip** and **your friend's tip** based on satisfaction.
2. Averages both tips to find a **fair tip percentage**.
3. Calculates the **total tip** and the **total cost including the tip**.

This app is useful for:
- Dining out with friends
- Fairly deciding how much to tip based on service
- Quickly finding out how much each person should pay

---

## ⚙️ How It Works

1. **Input**:
   - Your bill amount and satisfaction level (e.g., 10% for average, 20% for excellent)
   - Your friend's satisfaction level

2. **Process**:
   - Your tip = (Your bill) × (Your tip %)
   - Friend's tip = (Friend's bill) × (Friend's tip %)
   - **Average Tip %** = (Your tip % + Friend's tip %) / 2
   - **Total Tip** = (Your bill + Friend's bill) × (Average Tip %)
   - **Total Cost** = (Your bill + Friend's bill + Total Tip)

3. **Output**:
   - Your individual tip
   - Friend's individual tip
   - Average tip percentage
   - Total tip
   - Final cost to pay

---

## 📱 Example

Suppose:
- You paid **$100** and rated satisfaction as **15%**
- Your friend satisfaction as **10%**

The app calculates:
- Your tip: $15
- Friend's tip: $5
- Average tip %: (15 + 10) / 2 = **12.5%**
- Total bill: $150
- Total tip: $150 × 12.5% = **$18.75**
- Final total: $168.75

---

## 🛠️ Technologies

- React / HTML 
- CSS for styling

---

## 🚀 Future Features

- Split-by-people calculator
- Save recent tips
- Currency converter

---

## 👥 Author

Created by Kareem Tarek

---

