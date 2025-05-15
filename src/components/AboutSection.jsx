import { CloudUpload, Code, Smartphone, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";


export const AboutSection = () => {
    const [active, setActive] = useState(null);

    const open = (key) => setActive(key);
    const close = () => setActive(null);

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-glow text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md: grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            I am a <span> Software Engineer </span> based in <span className="text-glow text-primary">Singapore</span>.
                        </h3>

                        <p className="text-muted-foreground">
                            Always learning something new by day — <br />and getting 1st in games by night.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get in Touch </a>
                        </div>
                    </div>

                    {/* Desktop Version */}
                    <div className="hidden sm:grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground"> Creating responsive websites and web applications with React.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Mobile Development </h4>
                                    <p className="text-muted-foreground"> Creating responsive Mobile applications using Jetpack Compose.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CloudUpload className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Cloud & Data Engineering </h4>
                                    <p className="text-muted-foreground"> Working with various Cloud Service Providers to analyse Big Data.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Version */}
                    <div className="sm:hidden grid grid-cols-1 gap-6 justify-items-center">
                        {/* Web Dev Button */}
                        <button onClick={() => open('web')} className="p-4 card-hover text-left">
                            <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-10 w-10 text-primary" />
                            </div>
                            </div>
                        </button>

                        {/* Mobile Dev Button */}
                        <button onClick={() => open('mobile')} className="p-4 card-hover text-left">
                            <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Smartphone className="h-10 w-10 text-primary" />
                            </div>
                            </div>
                        </button>

                        {/* Cloud Dev Button */}
                        <button onClick={() => open('cloud')} className="p-4 card-hover text-left">
                            <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CloudUpload className="h-10 w-10 text-primary" />
                            </div>
                            </div>
                        </button>

                        {/* Overlay */}
                        <div
                            className={cn(
                            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center px-6 text-center",
                            "transition-all duration-300 md:hidden",
                            active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            )}
                        >
                            <button onClick={close} className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted">
                                <X className="h-6 w-6 text-muted-foreground" />
                            </button>

                            {active === 'web' && (
                                <div>
                                    <h4 className="font-semibold text-2xl">Web Development</h4>
                                    <p className="text-muted-foreground mt-2">
                                    Creating responsive websites and web applications with React.
                                    </p>
                                </div>
                            )}

                            {active === 'mobile' && (
                                <div>
                                    <h4 className="font-semibold text-2xl">Mobile Development</h4>
                                    <p className="text-muted-foreground mt-2">
                                    Creating responsive mobile applications using Jetpack Compose.
                                    </p>
                                </div>
                            )}

                            {active === 'cloud' && (
                                <div>
                                    <h4 className="font-semibold text-2xl">Cloud & Data Engineering</h4>
                                    <p className="text-muted-foreground mt-2">
                                    Working with various cloud service providers to analyze big data.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}