import ContactHero from "./ContactHero";
import QuickActions from "./QuickActions";
// import OfficeDetails from "./OfficeDetails";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";

const ContactUsMain = () => {
    return (
        <>
            <ContactHero />
            <QuickActions />
            {/* <OfficeDetails /> */}
            <ContactForm />
            <MapSection />
        </>
    );
};

export default ContactUsMain;
