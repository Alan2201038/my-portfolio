import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} AlanTech.co. All rights reserved.</p>

            <a href="#" className="ml-4 p-2 rounded-full hover:bg-primary/20 transition-colors text-primary">
                <ArrowUp size={20} />
            </a>
        </footer>
    );
}