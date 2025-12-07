import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Sparkles } from 'lucide-react';

type NotificationType = {
    id: number;
    type: 'booking' | 'viewing' | 'tutor';
    message: string;
    icon: any;
    color: string;
};

const notifications: NotificationType[] = [
    {
        id: 1,
        type: 'booking',
        message: 'Sarah from London just booked a trial lesson',
        icon: Sparkles,
        color: '#F77F00'
    },
    {
        id: 2,
        type: 'viewing',
        message: '12 students are viewing IGCSE Math tutors',
        icon: Users,
        color: '#003049'
    },
    {
        id: 3,
        type: 'tutor',
        message: '3 Expert IB Tutors just came online',
        icon: MapPin,
        color: '#D62828'
    },
    {
        id: 4,
        type: 'booking',
        message: 'Ahmed from Dubai started a Physics session',
        icon: Sparkles,
        color: '#F77F00'
    }
];

export default function TrustPulse() {
    const [currentNotification, setCurrentNotification] = useState<NotificationType | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initial delay
        const startTimeout = setTimeout(() => {
            showRandomNotification();
        }, 4000);

        return () => clearTimeout(startTimeout);
    }, []);

    const showRandomNotification = () => {
        const random = notifications[Math.floor(Math.random() * notifications.length)];
        setCurrentNotification(random);
        setIsVisible(true);

        // Hide after 5 seconds
        setTimeout(() => {
            setIsVisible(false);

            // Show next after random delay (8-15s)
            setTimeout(showRandomNotification, Math.random() * 7000 + 8000);
        }, 5000);
    };

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-6 left-6 z-40 max-w-sm w-full md:w-auto"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 flex items-center gap-4">
                        <div
                            className="p-2 rounded-full bg-opacity-10"
                            style={{ backgroundColor: `${currentNotification.color}15` }}
                        >
                            <currentNotification.icon
                                size={20}
                                color={currentNotification.color}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">
                                {currentNotification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Just now
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
