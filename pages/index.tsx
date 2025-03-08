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
      <h1>NEXT_PUBLIC_EMAIL: {nextPublicEmail}</h1>
      <h1>EMAIL: {email}</h1>
    </div>
  );
};

export default Home;