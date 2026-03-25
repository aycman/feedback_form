import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    rating: '',
    feedback: ''
  })

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormData ({...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage =`
    Name: ${formData.name}
    Email: ${formData.email}
    Rating: ${formData.rating}
    Feedback: ${formData.feedback}

    `;
  const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
  if (isConfirmed){
    console.log("Submitting feedback",formData);
    setFormData({
      name: '',
      email: '',
      rating: '',
      feedback: ''
    });
    alert("Thank you for your valuable feedback!!");
  }
  }
  

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input 
        type="text" 
        name='name' 
        placeholder='Enter your name' 
        value={formData.name}
        onChange={handleChange}
        />
        <input 
        type="email" 
        name='email' 
        placeholder='Enter your email' 
        value={formData.email}
        onChange={handleChange}
        />

        <div>
          <span>Rate us:</span><br />

          <input 
          type="radio" 
          name="rating"
          id="radio1" 
          value={"1"}
          onChange={handleChange}
          />
          <label for='radio1'>&#11088;</label>
          <br/>

          <input 
          type="radio" 
          name='rating'
          id='radio2'
          value={"2"}
          onChange={handleChange}
          />
          <label for='radio2'>&#11088;&#11088;</label>
          <br/>

          <input 
          type="radio" 
          name="rating"
          id="radio3" 
          value={"3"}
          onChange={handleChange}
          />
          <label for='radio3'>&#11088;&#11088;&#11088;</label>
          <br/>

          <input 
          type="radio" 
          name="rating"
          id="radio4" 
          value={"4"}
          onChange={handleChange}
          />
          <label for='radio4'>&#11088;&#11088;&#11088;&#11088;</label>
          <br/>

          <input 
          type="radio" 
          name="rating"
          id="radio5" 
          value={"5"}
          onChange={handleChange}
          />
          <label for='radio5'>&#11088;&#11088;&#11088;&#11088;&#11088;</label>

          <br/>

        </div>



        <textarea 
        name="feedback" 
        id="" 
        placeholder='Enter your feedback'
        value={formData.feedback}
        onChange={handleChange}
        >
        </textarea>
        <button type="submit">Submit</button>

      </form>
    </>
  );
};

export default FeedbackForm;









    //  import React, { useState } from 'react';
    //  import './FeedbackForm.css'; // Import CSS for styling

    //  const FeedbackForm = () => {
    //      const [formData, setFormData] = useState({
    //          name: '',
    //          email: '',
    //          feedback: ''
    //        });
    //        const handleChange = (event) => {
    //          const { name, value } = event.target;
    //          setFormData({
    //            ...formData,
    //            [name]: value
    //          });
    //        };
    //        const handleSubmit = (event) => {
    //          event.preventDefault();
    //          const confirmationMessage = `
    //            Name: ${formData.name}
    //            Email: ${formData.email}
    //            Feedback: ${formData.feedback}
    //          `;
    //          const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    //          if (isConfirmed) {
    //            console.log('Submitting feedback:', formData);
    //            setFormData({
    //              name: '',
    //              email: '',
    //              feedback: ''
    //            });
    //            alert('Thank you for your valuable feedback!');
    //          }
    //        };
    //    return (
    //      <>
    //      <nav>
    //      Tell Us What You Think
    //      </nav>
    //      <form onSubmit={handleSubmit} className="feedback-form">
    //          <h2>We'd Love to Hear From You!</h2>
    //          <p>Please share your feedback with us.</p>
    //          <input
    //            type="text"
    //            name="name"
    //            placeholder="Your Name"
    //            value={formData.name}
    //            onChange={handleChange}
    //          />
    //          <input
    //            type="email"
    //            name="email"
    //            placeholder="Your Email"
    //            value={formData.email}
    //            onChange={handleChange}
    //          />
    //          <textarea
    //            name="feedback"
    //            placeholder="Your Feedback"
    //            value={formData.feedback}
    //            onChange={handleChange}
    //          ></textarea>
    //          <button type="submit">Submit Feedback</button>
    //        </form>
    //      </>
    //    );
    //  };

    //  export default FeedbackForm;










//     {completed final <code>}

// import React, { useState } from 'react';
// import './FeedbackForm.css'; // Import CSS for styling

// const FeedbackForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         feedback: '',
//         rating: '' // New state for rating
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const confirmationMessage = `
//           Name: ${formData.name}
//           Email: ${formData.email}
//           Feedback: ${formData.feedback}
//           Rating: ${formData.rating}
//         `;
//         const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
//         if (isConfirmed) {
//             console.log('Submitting feedback:', formData);
//             setFormData({
//                 name: '',
//                 email: '',
//                 feedback: '',
//                 rating: '' // Reset rating after submission
//             });
//             alert('Thank you for your valuable feedback!');
//         }
//     };
//   return (
//     <>
//     <nav>
//     Tell Us What You Think
//     </nav>
//     <form onSubmit={handleSubmit} className="feedback-form">
//         <h2>We'd Love to Hear From You!</h2>
//         <p>Please share your feedback with us.</p>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <textarea
//           name="feedback"
//           placeholder="Your Feedback"
//           value={formData.feedback}
//           onChange={handleChange}
//         ></textarea>
//          <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
//                     <span>Rate Us:</span>
//                     <p><input
//                         type="radio"
//                         name="rating"
//                         value="1"
                       
//                         onChange={handleChange}
//                     /> 1</p>
//                   <p>  <input
//                         type="radio"
//                         name="rating"
//                         value="2"
                        
//                         onChange={handleChange}
//                     /> 2</p>
//                   <p>  <input
//                         type="radio"
//                         name="rating"
//                         value="3"
//                         onChange={handleChange}
//                     /> 3</p>
//                    <p> <input
//                         type="radio"
//                         name="rating"
//                         value="4"
//                         onChange={handleChange}
//                     /> 4</p>
//                     <p><input
//                         type="radio"
//                         name="rating"
//                         value="5"
//                         onChange={handleChange}
//                     /> 5</p>
//                 </div>
//         <button type="submit">Submit Feedback</button>
//       </form>
//     </>
//   );
// };

// export default FeedbackForm;</code>