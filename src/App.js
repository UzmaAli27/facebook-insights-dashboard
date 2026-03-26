import React, { useState } from "react";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [accessToken, setAccessToken] = useState(null);

  const [user, setUser] = useState(null);

const handleLogin = () => {

  window.FB.login(function(response) {

    if (response.authResponse) {

      setAccessToken(response.authResponse.accessToken);

      window.FB.api("/me", { fields: "name,picture" }, function(userInfo) {

        setUser(userInfo);

      });

    }

  }, { scope: "pages_show_list,pages_read_engagement" });

};

  return (

    <div>

     {
  accessToken ?

  <Dashboard
    accessToken={accessToken}
    user={user}
    setAccessToken={setAccessToken}
  />

  :

  <LoginPage handleLogin={handleLogin} />
}

    </div>

  );

}

export default App;