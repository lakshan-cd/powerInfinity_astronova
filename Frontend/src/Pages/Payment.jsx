import React  from "react";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";

const Payment = () => {
  return (
    <div>
      <NavBar />

    <div class                = "pay">
        <Button/>
    </div>
    <div className            = "complaint-form">

<div className                = "complaint-inputContainer">
  <label className            = "complaint-label">Name</label>
  <input
    className                 = "complaint-input"
    placeholder               = "Enter your name"
    value                     = {name}
    onChange                  = {(e) => setName(e.target.value)}
  />
</div>

<div className                = "complaint-inputContainer">
  <label className            = "complaint-label">Email Address</label>
  <input
    className                 = "complaint-input"
    placeholder               = "Enter your email address"
    value                     = {email}
    onChange                  = {(e) => setEmail(e.target.value)}
    type                      = "email"
    autoComplete              = "off"
  />
</div>

<div className                = "complaint-inputContainer">
  <label className            = "complaint-label">Complain Type</label>
  <select
    className                 = "complaint-dropdown"
    value                     = {complainType}
    onChange                  = {(e) => setComplainType(e.target.value)}
  >
    <option value             = "">Complain list (please select)</option>
    <option value             = "Incorrect fare charge">Incorrect fare charge</option>
    <option value             = "Attitude or behavior of staff">Attitude or behavior of staff</option>
    <option value             = "Personal security">Personal security</option>
    <option value             = "Reliability and punctuality">Reliability and punctuality</option>
    <option value             = "Other...">Other...</option>
  </select>
</div>

<div className                = "complaint-inputContainer">
  <label className            = "complaint-label">Complain</label>
  <div className              = "complaint-textareaContainer">
    <textarea
      className               = "complaint-textarea"
      placeholder             = "Enter your complaint here"
      rows                    = {6}
      value                   = {complain}
      onChange                = {(e) => setComplain(e.target.value)}
    />
    <div className            = "complaint-attachmentContainer">
      {image && (
        <div className        = "complaint-attachment">
          <img src            = {image} className="complaint-attachmentImage" alt="Attached Image" />
          <button onClick     = {() => setImage(null)}>
            <span className   = "complaint-minus-circle" style={{ color: 'red' }}></span>
          </button>
        </div>
      )}
      <input
  type                        = "file"
  accept                      = "image/*"
  onChange                    = {handleImagePick}
  style                       = {{ display: 'none' }}
  ref                         = {fileInputRef}
/>
<button
className                     = "complaint-attachmentButton"
onClick                       = {() => fileInputRef.current.click()}
>
<span className               = "complaint-paperclip">
  <FontAwesomeIcon
    icon                      = {faPaperclip}
    className                 = "clip-icon"
    label                     = "Attachment"
    beat
  />
  Attachment
</span>
</button>

    </div>

    <button
className                     = "complaint-submitButton"
onClick                       = {handleSubmit}
disabled                      = {isLoading}
style={{
  backgroundColor             : '#283593',
  transition                  : 'background-color 0.3s ease-in-out',
}}
onMouseEnter                  = {(e) => e.target.style.backgroundColor = '#1e2469'}
onMouseLeave                  = {(e) => e.target.style.backgroundColor = '#283593'}
>
{isLoading ? 'Submitting...'  : 'Submit'}
<FontAwesomeIcon
    icon                      = {faUpload}
    className                 = "upload-icon"
    label                     = "Attachment"
     beat />
</button>
  </div>

</div>



</div>

    </div>
    
  );
};

export default Payment;
