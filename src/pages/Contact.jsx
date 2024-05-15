/*
- WHEN I am presented with the Contact section
- THEN I see a contact form with fields for a name, an email address, and a message

- WHEN I move my cursor out of one of the form fields without entering text
- THEN I receive a notification that this field is required

- WHEN I enter text into the email address field
- THEN I receive a notification if I have entered an invalid email address
*/

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                Name Form
            </p>
            <p>
                Email Form
            </p>
            <p>
                Message Textbox Form
            </p>
            <p>
                Submit Button Form
            </p>
        </div>
    );
}