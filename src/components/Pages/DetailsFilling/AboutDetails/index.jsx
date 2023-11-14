import React from 'react'

const About = ({ name, onNameChange }) => {
    const handleInputChange = (e) => {
        onNameChange({
          ...name,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div><section id = "about-sc" className = "">
            <div className = "container">
                <div className = "about-cnt">
                    <form action="" className="cv-form" id = "cv-form">
                        <div className = "cv-form-blk">
                            <div className = "cv-form-row-title">
                                <h3>about section</h3>
                            </div>
                            <div className = "cv-form-row cv-form-row-about">
                                <div className = "cols-3">
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">First Name</label>
                                        <input name='first' type="text" id='first' placeholder='first name' value={name.first} onChange={handleInputChange} className='form-control'/>
                                        <span className="form-text"></span>
                                    </div>
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Middle Name <span className = "opt-text">(optional)</span></label>
                                        <input name='middle' type='text' id='middle' placeholder='middle name' value={name.middle} onChange={handleInputChange} className='form-control'/>
                                        <span className="form-text"></span>
                                    </div>
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Last Name</label>
                                        <input name='last' type="text" id='last' placeholder='last name' value={name.last} onChange={handleInputChange} className='form-control lastname'/>
                                        
                                        <span className="form-text"></span>
                                    </div>
                                </div> 

                                <div className="cols-3">
                                    
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Designation</label>
                                        <input name='designation' type="text" id='designation' placeholder='designation name' value={name.designation} onChange={handleInputChange} className='form-control' />
                                        <span className="form-text"></span>
                                    </div>
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Address</label>
                                        <input name='address' type='text' id='address' placeholder='address' value={name.address} onChange={handleInputChange} className='form-control'/>
                                        <span className="form-text"></span>
                                    </div>
                                </div>

                                <div className = "cols-3">
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Email</label>
                                        <input name='email' type='text' id='email' placeholder='email' value={name.email} onChange={handleInputChange} className='form-control'/>
                                        <span className="form-text"></span>
                                    </div>
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Phone No:</label>
                                        <input name='phoneno' type='text' id='phoneno' placeholder='phone no' value={name.phoneno} onChange={handleInputChange} className='form-control'/>
                                        <span className="form-text"></span>
                                    </div>
                                    <div className = "form-elem">
                                        <label for = "" className = "form-label">Portfolio</label>
                                        <input name = "portfolio" type = "text" className = "form-control proj_link" id = "" value={name.portfolio} onChange={handleInputChange}/>
                                        <span className="form-text"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>

    </div>
  )
}

export default About