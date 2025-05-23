import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast"
import { useState } from "react";

{/* Missing Email JS */}
export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmit(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I will get back to you soon.",
            });
            setIsSubmit(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-4 text-center">
                    Get In <span className="text-glow text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                   Have a project in mind or just want to say hi? Feel free to reach out!
                   <br />I would love to hear from you! 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">

                            <div className="flex justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                      href="mailto:alegalalan@hotmail.com"
                                      className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        alegalalan@hotmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a
                                      href="tel:+6598898840"
                                      className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +65 9889 8840
                                    </a>
                                </div>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a
                                      className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Singapore
                                    </a>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4"> Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a
                                      href="https://www.linkedin.com/in/alanwongml/"
                                      target="_blank"
                                    >
                                        <Linkedin />
                                    </a>
                                    <a
                                      href="https://x.com/LazyPapple"
                                      target="_blank"
                                    >
                                        <Twitter />
                                    </a>
                                </div>
                            </div>

                        </div>                        
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">

                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                > Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                > Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="JohnDoe@gmail.com"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                > Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I would like to discuss..."
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmit}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    ""
                                )}
                            >
                                { isSubmit ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}