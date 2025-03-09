import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [nextPublicEmail, setNextPublicEmail] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/env')
      .then((response) => response.json())
      .then((data) => {
        setNextPublicEmail(data.nextPublicEmail);
        setEmail(data.email);
      })
      .catch((error) => console.error('Error fetching environment variables:', error));
  }, []);

  if (nextPublicEmail === null || email === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>index_api_router 使用 api_router 抓環境變數</h1>
      <br />
      <h2>NEXT_PUBLIC_EMAIL: {nextPublicEmail}</h2>
      <h2>EMAIL: {email}</h2>
    </div>
  );
};

export default Home;