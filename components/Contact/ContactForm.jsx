import InputField from './InputField';
import TextArea from './TextArea';

const ContactForm = ({ formState, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="contact-form bg-slate-200 dark:bg-gray-950">
        <InputField 
            label="Name" 
            name="name" 
            type="text" 
            value={formState.name} 
            onChange={handleChange} 
        />
        <InputField 
            label="Email" 
            name="email" 
            type="email" 
            value={formState.email} 
            onChange={handleChange} 
        />
        <TextArea 
            label="Message" 
            name="message" 
            value={formState.message} 
            onChange={handleChange} 
        />
        <div className="flex items-center justify-between">
            <button className="contact-button" type="submit">
            Send
            </button>
        </div>
    </form>
);

export default ContactForm;
