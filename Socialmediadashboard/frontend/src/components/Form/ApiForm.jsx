import { useState } from "react";
import fetchTwitterData from "../../utils/Api";

const ApiFormDialog = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (apiKey && username) {
      setLoading(true);
      try {
        await fetchTwitterData(apiKey, username);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Enter API Key</h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="apiKey"
            className="block text-sm font-medium text-gray-700"
          >
            API Key
          </label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={handleApiKeyChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2] sm:text-sm"
            placeholder="Enter your Twitter API Key"
          />
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Twitter Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4A90E2] focus:border-[#4A90E2] sm:text-sm"
            placeholder="Enter Twitter Username"
          />
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 focus:outline-none mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#1A2B3C] text-white px-4 py-2 rounded-lg hover:bg-[#263445] transition duration-300 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>

        {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      </div>
    </div>
  );
};

export default ApiFormDialog;
