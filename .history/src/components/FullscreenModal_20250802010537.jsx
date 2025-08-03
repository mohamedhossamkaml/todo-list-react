import { createPortal } from 'react-dom';

function FullscreenModal({ children }) {
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center">
      {children}
    </div>,
    document.body
  );
}
