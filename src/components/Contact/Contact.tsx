import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { FadeIn } from "../../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { formFields } from "./formFields";
import ReactGA from "react-ga4";
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
  RecaptchaContainer,
  RequiredIndicator,
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
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
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

    if (!captchaValue) {
      alert("Please verify that you are not a robot");
      return;
    }

    ReactGA.event({
      category: "Form",
      action: "Submit",
      label: "Contact Form Submit",
    });

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      "g-recaptcha-response": captchaValue,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setCaptchaValue(null);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again later.");
      });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

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
            {/* <FadeIn delay="0.2s"> */}
            {submitted && (
              <SuccessMessage>
                Message sent successfully! I'll get back to you soon.
              </SuccessMessage>
            )}

            {formFields.map((field) => (
              <FormGroup key={field.id} fullWidth={field.type === "textarea"}>
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && <RequiredIndicator>*</RequiredIndicator>}
                </Label>
                {field.type === "textarea" ? (
                  <TextArea
                    id={field.id}
                    name={field.name}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <Input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                  />
                )}
              </FormGroup>
            ))}
            <RecaptchaContainer>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                onChange={handleCaptchaChange}
              />
            </RecaptchaContainer>

            <SubmitButton
              type="submit"
              disabled={isSubmitting || !captchaValue}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
            {/* </FadeIn> */}
          </Form>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default Contact;
