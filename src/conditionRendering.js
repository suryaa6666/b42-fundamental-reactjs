import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <>
      <h1> Selamat kamu sudah login </h1>
      <button
        onClick={() => {
          props.handleLogout(false);
        }}
      >
        Logout
      </button>
    </>
  );
}

function GuestPage(props) {
  return (
    <>
      <h1> Silahkan login dulu </h1>
      <button
        onClick={() => {
          props.handleLogin(true);
        }}
      >
        Login
      </button>
    </>
  );
}

//Create Component GuestPage

function ConditionRendering() {
  //init State
  const [isLogin, setIsLogin] = useState(true);

  // if (!isLogin) {
  //   return <GuestPage handleLogin={setIsLogin} />;
  // } else {
  //   return <PrivatePage handleLogout={setIsLogin} />;
  // }

  // return (
  //   <>
  //     {!isLogin && <GuestPage handleLogin={setIsLogin} />}
  //     {isLogin && <PrivatePage handleLogout={setIsLogin} />}
  //   </>
  // );

  return (
    <>
      {!isLogin ? <GuestPage handleLogin={setIsLogin} /> : <PrivatePage handleLogout={setIsLogin} />}
    </>
  );

  // return (
  //   // if-else, && operator, ternary operator
  //   // Code Inside div
  //   <div>{/* conditional logic rendering */}</div>
  // );
}

export default ConditionRendering;
