import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-full flex items-start justify-center p-0 sm:p-4">
        <div className="premium-card w-full min-h-screen sm:min-h-0 sm:max-w-4xl sm:my-8 overflow-visible rounded-none sm:rounded-lg">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-accent/10 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <h3 className="text-xl sm:text-2xl font-serif font-light luxury-gradient tracking-wide">
              BOOK YOUR SESSION
            </h3>
            <button
              onClick={onClose}
              className="text-foreground/60 hover:text-accent transition-colors duration-300 p-2"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Body with JotForm - Responsive */}
          <div className="w-full">
            <iframe
              id="252563602964360"
              title="Book Your Session"
              allowTransparency={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/252563602964360"
              frameBorder="0"
              style={{
                width: '100%',
                height: '800px',
                minHeight: '800px',
                border: 'none'
              }}
              scrolling="auto"
              className="w-full"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
