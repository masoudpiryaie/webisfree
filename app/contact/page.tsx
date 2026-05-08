import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          title="Contact Me"
          subtitle="You can contact me for job opportunities, internships, or professional connections."
        />

        <ContactForm />
      </div>
    </main>
  );
}
