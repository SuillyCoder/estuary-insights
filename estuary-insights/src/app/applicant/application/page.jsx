'use client';
import { useState } from 'react';

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null,
    essayQuestion: '',
    likertQuestion: '',
  });

  const [applicationStatus, setApplicationStatus] = useState('No current applications.');

  // Handler for input changes except file
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const submitApplication = (e) => {
    e.preventDefault();

    // Here you would normally send the formData including the file to your backend

    // For demo, just update status and log formData
    console.log('Submitting application:', formData);

    setApplicationStatus('Application submitted! Pending review.');
  };

  return (
    <section style={{ maxWidth: 600, margin: 'auto', padding: '1rem' }}>
      <h2>My Applications</h2>
      <p>Status: {applicationStatus}</p>

      <form onSubmit={submitApplication}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email Address</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Phone Number</label><br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="experience">Years of Experience</label><br />
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="" disabled>
              Select years of experience
            </option>
            <option value="0-1">0-1 years</option>
            <option value="2-3">2-3 years</option>
            <option value="4-5">4-5 years</option>
            <option value="6+">6+ years</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="coverLetter">Cover Letter</label><br />
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={5}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="resume">Resume Upload (PDF, DOC, DOCX)</label><br />
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
          {formData.resume && <p>Selected file: {formData.resume.name}</p>}
        </div>

        <hr style={{ margin: '2rem 0' }} />

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="essayQuestion">Why do you want to work here?</label><br />
          <textarea
            id="essayQuestion"
            name="essayQuestion"
            value={formData.essayQuestion}
            onChange={handleChange}
            rows={4}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>How confident are you in your skills for this position?</label><br />
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} style={{ marginRight: '1rem' }}>
              <input
                type="radio"
                name="likertQuestion"
                value={num}
                checked={formData.likertQuestion === String(num)}
                onChange={handleChange}
                required
              />
              {num}
            </label>
          ))}
        </div>

        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Submit Application
        </button>
      </form>
    </section>
  );
}
