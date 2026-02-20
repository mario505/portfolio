import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home(){
    return (
    <div className="min-h-screen bg-backround text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}

        {/* Footer */} 
    </div>);
};