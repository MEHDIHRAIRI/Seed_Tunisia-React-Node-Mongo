import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import axios from "axios";

const ContactFrom = () => {
    const [data, setData] = useState({ name: "", email: "", subject: "", message: "" })
    const { register, errors } = useForm({
        mode: "onBlur"
    });
    const add = async () => {
        const ContactForm = await axios
            .post("http://localhost:5000/ContactUs/add", data)
            .then(function (response) {
                console.log(response.data);
            });
        console.log("contact from: ", ContactForm);

    }

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            <form>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input type="text" placeholder="Your Name *" name="name" ref={register({ required: 'Name is required' })} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input type="email" placeholder="Email *" name="email" ref={register({
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                        })} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="col-md-12 col-12 mb-6">
                        <input type="text" placeholder="Subject *" name="subject" ref={register({ required: 'Subject is required' })} onChange={(e) => { setData({ ...data, subject: e.target.value }) }} />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea name="message" placeholder="Message" ref={register({ required: 'Message is required' })} onChange={(e) => { setData({ ...data, message: e.target.value }) }} ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button onClick={add} className="btn btn-primary btn-hover-secondary" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom;
