import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

function Contact() {
    return (
        <div className="row my-5">
            <div className="col-sm-6">
                <Map query="bergen" />
            </div>
            <div className="col-sm-6">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;