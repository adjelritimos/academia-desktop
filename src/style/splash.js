
const styles = {

    backgroundElements: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
    },
    bgElement1: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        width: '128px',
        height: '128px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'pulse 2s infinite'
    },
    bgElement2: {
        position: 'absolute',
        bottom: '80px',
        right: '64px',
        width: '96px',
        height: '96px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'bounce 1.5s infinite',
        animationDelay: '0.3s'
    },
    bgElement3: {
        position: 'absolute',
        top: '33%',
        right: '25%',
        width: '64px',
        height: '64px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'ping 2s infinite',
        animationDelay: '0.5s'
    },
    bgElement4: {
        position: 'absolute',
        bottom: '33%',
        left: '25%',
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'pulse 2s infinite',
        animationDelay: '0.7s'
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(6, 182, 212, 0.2) 50%, rgba(8, 145, 178, 0.4) 100%)'
    },
    textCenter: {
        position: 'relative',
        zIndex: 10
    },
    spinnerGrow: {
        width: '256px',
        height: '256px',
        position: 'relative'
    },
    spinningRing: {
        position: 'absolute',
        inset: 0,
        border: '4px solid rgba(255, 255, 255, 0.3)',
        borderTop: '4px solid white',
        borderRadius: '50%',
        animation: 'spin 2s linear infinite'
    },
    glowEffect: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        filter: 'blur(32px)',
        transform: 'scale(1.5)',
        animation: 'pulse 2s infinite'
    },
    logo: {
        filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
        animation: 'pulse 2s infinite'
    },
    particle: (i) => ({
        position: 'absolute',
        width: '8px',
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        left: `${10 + (i * 12)}%`,
        top: `${20 + (i * 10)}%`,
        animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
        animationDelay: `${i * 0.3}s`,
        pointerEvents: 'none'
    }),
    loadingText: {
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: '500',
        animation: 'pulse 2s infinite',
        marginTop: '1rem'
    },
    progressContainer: {
        width: '256px',
        margin: '1.5rem auto 0',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '9999px',
        overflow: 'hidden'
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '9999px',
        animation: 'progress 3s ease-in-out'
    }
}

export default styles