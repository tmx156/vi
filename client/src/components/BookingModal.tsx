import React, { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Scroll to top and prevent body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      // Force scroll to top immediately
      window.scrollTo(0, 0);

      // Scroll modal container to top
      const modalContainer = document.querySelector('.modal-container');
      if (modalContainer) {
        modalContainer.scrollTop = 0;
      }

      // Prevent body scroll immediately
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0px';
      document.body.style.left = '0px';
      document.body.style.right = '0px';
      document.body.style.width = '100vw';
      document.body.style.height = '100vh';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto modal-container" style={{scrollBehavior: 'auto'}} onClick={onClose}>
      <div
        className="min-h-full flex items-start justify-center p-0"
        style={{paddingTop: '0px'}}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="premium-card w-full min-h-screen sm:min-h-0 sm:max-w-5xl overflow-visible rounded-none sm:rounded-lg" style={{marginTop: '0px'}}>
          {/* Modal Header - Positioned at very top */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-accent/10 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <h3 className="text-lg sm:text-xl font-serif font-light luxury-gradient tracking-wide">
              BOOK YOUR SESSION
            </h3>
            <button
              onClick={onClose}
              className="text-foreground/60 hover:text-accent transition-colors duration-300 p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Body with JotForm - Positioned at top, higher up */}
          <div className="w-full" style={{marginTop: '0px', paddingTop: '0px'}}>
            <iframe
              id="252563602964360"
              title="Book Your Session"
              allowTransparency={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/252563602964360"
              frameBorder="0"
              style={{
                width: '100%',
                height: '90vh',
                minHeight: '600px',
                border: 'none',
                marginTop: '0px'
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
