# 📊 Facebook Insights Dashboard

A React-based analytics dashboard that allows users to log in using Facebook OAuth and view insights for the pages they manage.

---

## 🚀 Features

- Facebook OAuth Login
- Fetch user profile information
- List managed Facebook pages
- View page insights:
  - Page Impressions
  - Engaged Users
  - New Page Likes

- Interactive chart visualization (Recharts)
- Responsive dashboard UI
- Loading indicators
- Clean analytics layout

---

## 🛠 Tech Stack

- React
- Tailwind CSS
- Facebook Graph API
- Recharts
- Framer Motion

---

## 🔐 Facebook Permissions Used

- public_profile
- pages_show_list
- pages_read_engagement
- pages_read_user_content

---

## 📸 Dashboard Preview

*Landing Page - Login
*Popup - Facebook Login
*Dashboard

---

## ⚙️ Installation Steps

Clone the repository:

```
git clone https://github.com/yourusername/facebook-insights-dashboard.git
```

Move into project folder:

```
cd facebook-insights-dashboard
```

Install dependencies:

```
npm install
```

Run the project:

```
npm start
```

---

## 🔑 Environment Setup

Add your Facebook App ID inside:

```
public/index.html
```

Example:

```
FB.init({
  appId: "YOUR_APP_ID",
  cookie: true,
  xfbml: true,
  version: "v19.0"
});
```

---

## 📊 Insights Displayed

The dashboard fetches and visualizes:

- Page impressions
- Engaged users
- Page fan adds

---

## 📌 Author

Uzma Ali
Computer Science Graduate | Frontend Developer
