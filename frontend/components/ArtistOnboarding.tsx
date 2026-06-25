'use client';

import { useState } from 'react';
import { artistAPI } from '@/lib/api-client';

export default function ArtistOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone_number: '',
    name: '',
    region: '',
    city: '',
    art_form: '',
    preferred_language: 'hi',
  });
  const [otp, setOtp] = useState('');
  const [artistId, setArtistId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await artistAPI.whatsappRegister(formData);
      setArtistId(response.artist_id);
      setMessage('Registration successful! Check WhatsApp for OTP.');
      setStep(2);
    } catch (error: any) {
      setMessage(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await artistAPI.verifyOTP(formData.phone_number, otp);
      setMessage('Email verified! Your profile is ready.');
      setStep(3);
    } catch (error: any) {
      setMessage(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Sell Your Art on ArtBridge</h1>

      {step === 1 && (
        <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Step 1: Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">WhatsApp Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Region</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                placeholder="e.g., Bihar, Madhya Pradesh"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Art Form (e.g., Madhubani, Warli)</label>
              <input
                type="text"
                name="art_form"
                value={formData.art_form}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Language</label>
              <select
                name="preferred_language"
                value={formData.preferred_language}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="hi">Hindi</option>
                <option value="en">English</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="mr">Marathi</option>
              </select>
            </div>
          </div>
          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Registering...' : 'Register via WhatsApp'}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOTP} className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Step 2: Verify OTP</h2>
          <p className="text-gray-600 mb-4">Enter the OTP sent to your WhatsApp number</p>
          <div>
            <label className="block text-sm font-medium mb-2">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="000000"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">✅ Welcome to ArtBridge!</h2>
          <p className="text-gray-600 mb-6">Your artist profile has been created successfully.</p>
          <p className="text-gray-600 mb-6">Next steps:</p>
          <ul className="text-left space-y-2 mb-6 text-gray-600">
            <li>📸 Upload photos of your artwork via WhatsApp</li>
            <li>🎨 AI will generate descriptions and pricing</li>
            <li>💰 Your products will go live within 24 hours</li>
            <li>📊 Start receiving orders and payments</li>
          </ul>
          <a href="/" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Back to Home
          </a>
        </div>
      )}
    </div>
  );
}
