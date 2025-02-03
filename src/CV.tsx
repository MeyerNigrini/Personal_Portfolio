import { useEffect, useState } from 'react';
import api from './services/apiService';
import { KeyValuePair } from "./models";


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}




const CV = () => {
  const [message, setMessage] = useState<KeyValuePair[]>([]); // HelloWorld Controller for Get function
  const [data, setData] = useState<WeatherForecast[]>([]); // WeatherForecast Controller for Get function
  const [newMessage, setNewMessage] = useState<KeyValuePair>({key: "", value: ""}); // For new message form (HelloWorld POST)



  // Fetch message data from /HelloWorld
  useEffect(() => {
    api.get('/HelloWorld')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('API Call Error:', error);
        if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
        }
        setMessage([]);
      });
  }, []);

  // Fetch weather data from /WeatherForecast
  useEffect(() => {
    api.get("/WeatherForecast")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('API Call Error:', error);
        if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
        }
        setData([]);
      });
  }, []);
  


  // Handle POST request when the button is pressed
  const handleAddMessage = () => {
    // Send POST request with the new message data
    api.post('/HelloWorld', newMessage)
      .then((response) => {
        setMessage([...message, response.data]); // Add the new message to the state
        setNewMessage({ key: '', value: '' }); // Clear the form

      })
      .catch((error) => {
        console.error('API Call Error:', error);

      });
  };
  

  return (
    <div>
      <h1>Message from /HelloWorld:</h1>

      <h1>Message from /WeatherForecast:</h1>
      {data.map((item, index) => (
          <li key={index}>
            {item.date} - {item.summary} - {item.temperatureC}°C / {item.temperatureF}°F
          </li>
        ))}

       {/* Form to Add New Message */}
       <h2>Add New Message:</h2>
       
      <label>
        Key:
        <input
          type="text"
          value={newMessage.key}
          onChange={(e) => setNewMessage({ ...newMessage, key: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Value:
        <input
          type="text"
          value={newMessage.value}
          onChange={(e) => setNewMessage({ ...newMessage, value: e.target.value })}
          required
        />
      </label>
      <br />
      <button onClick={handleAddMessage}>Add Message</button> {/* POST when clicked */}    
    </div>
  );
};

export default CV;
