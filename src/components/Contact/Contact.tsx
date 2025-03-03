import React, { useState, ChangeEvent, FormEvent } from "react";
import { FadeIn } from "../../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  ContactSection,
  SectionHeader,
  ContactContainer,
  ContactInfo,
  ContactInfoItem,
  SocialLinks,
  SocialLink,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SuccessMessage,
} from "./Contact.styled";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Function to obfuscate email
  const getObfuscatedEmail = () => {
    const email = "alinanovof@gmail.com";
    return email.replace(/(@)/, " [at] ").replace(/\./, " [dot] ");
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionHeader>
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </SectionHeader>

        <ContactContainer>
          <ContactInfo>
            <FadeIn>
              <h3>Contact Information</h3>

              <ContactInfoItem>
                <div className="icon">📧</div>
                <div className="text">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `mailto:alinanovof@gmail.com?subject=Portfolio%20Inquiry`;
                    }}
                  >
                    Send me an email ({getObfuscatedEmail()})
                  </a>
                </div>
              </ContactInfoItem>

              <ContactInfoItem>
                <div className="icon">📱</div>
                <div className="text">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+972535556503";
                    }}
                  >
                    Call or message me
                  </a>
                </div>
              </ContactInfoItem>

              <h4>Connect with me</h4>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/alinanovof"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/in/alinakurant"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </SocialLink>
              </SocialLinks>
            </FadeIn>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <FadeIn delay="0.2s">
              {submitted && (
                <SuccessMessage>
                  Message sent successfully! I'll get back to you soon.
                </SuccessMessage>
              )}

              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>
            </FadeIn>
          </Form>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default Contact;
