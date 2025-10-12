// Console cleanup utility to suppress browser extension warnings
export const suppressExtensionWarnings = () => {
  // Store original console methods
  const originalConsole = {
    warn: console.warn,
    error: console.error,
    log: console.log
  };

  // Override console.warn to filter out extension warnings
  console.warn = (...args) => {
    const message = args.join(' ');
    
    // Filter out common browser extension warnings
    const extensionWarnings = [
      'overrideMethod @ hook.js',
      'chext_driver.js',
      'chext_loader.js',
      'Console Ninja',
      'vite v7.1.7 is not yet supported'
    ];
    
    const isExtensionWarning = extensionWarnings.some(warning => 
      message.includes(warning)
    );
    
    if (!isExtensionWarning) {
      originalConsole.warn(...args);
    }
  };

  // Override console.error to filter out extension errors
  console.error = (...args) => {
    const message = args.join(' ');
    
    const extensionErrors = [
      'chext_driver.js',
      'chext_loader.js',
      'Console Ninja'
    ];
    
    const isExtensionError = extensionErrors.some(error => 
      message.includes(error)
    );
    
    if (!isExtensionError) {
      originalConsole.error(...args);
    }
  };
};

// Auto-apply on import
if (typeof window !== 'undefined') {
  suppressExtensionWarnings();
}
