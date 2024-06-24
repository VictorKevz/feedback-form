import React, { useState } from "react";
import "./css/form.css";
import star from "../assets/star-icon.svg"


function Form() {
  const [formData, setFormData] = useState({
    score: 1, // Changed to an empty string for proper initial state validation
    comment: "",
  });

  const [formError, setFormError] = useState({
    score: "",
    comment: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));

    // Clear errors for the respective field when it is being updated
    setFormError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};

    // Validation logic
    if (formData.score === "" || formData.score <= 0) {
      errors.score = "Please select the score";
    }
    if (!formData.comment.trim()) {
      errors.comment = "Comment can't be empty!";
    }

    setFormError(errors);

    // If no errors, proceed with form submission logic
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic
      alert(`Score: ${formData.score}, Comment: ${formData.comment}`);
      setFormData({
        score: "",
        comment: "",
      });
    }
  }

  return (
    <section className="form-wrapper">
         <header className="form-heading-wrapper ">
          <img src={star} alt="icon-star"/>
        <h1 className="form-title">Feedback</h1>

        </header>
        <p className="form-score">{formData.score}</p>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="range"
            min={0}
            max={5}
            step={1}
            id="my-score"
            name="score"
            value={formData.score}
            onChange={handleChange}
            className="slider"
          />
          {formError.score && <span>{formError.score}</span>}
        </div>
        <div className="field">
          <textarea
            placeholder="Please leave your comment!"
            id="my-comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={8}
          />
          {formError.comment && <span>{formError.comment}</span>}
        </div>
        <div className="field">
          <button
            type="submit"
            className={`my-button ${
              formData.score && formData.comment.trim() ? "active" : ""
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
