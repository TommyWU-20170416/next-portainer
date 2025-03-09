import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const nextPublicEmail = process.env.NEXT_PUBLIC_EMAIL;
  const email = process.env.email; // 這個變數無法在前端使用，僅供展示

  console.log('email:', email); // 可以嘗試帶到前端，但無法使用

  return (
    <div>
      <h1>index_basic 使用 .env 決定環境變數</h1>
      <br />
      <h2>NEXT_PUBLIC_EMAIL: {nextPublicEmail}</h2>
      <h2>EMAIL: 無法渲染非 NEXT_PUBLIC 開頭的變數</h2>
    </div>
  );
};

export default Home;