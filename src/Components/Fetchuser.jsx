import React, { useEffect, useState } from "react";

const Fetchuser = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [errorUrl, setErrorUrl] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/") // Intentional typo for demonstration
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          setErrorUrl(response.url);
          throw new Error(
            `Error: ${response.status} ${response.type} because the URL is incorrect`
          );
        }
        return response.json();
      })
      .then((users) => setData(users))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Fetch User Data Home Task 2</h2>
      {error ? (
        <div className="text-red-500 font-semibold">
          <p>Error: {error}</p>
          <p>
            <span className="text-xl font-bold">{errorUrl}</span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Name: {user.name}</h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetchuser;
