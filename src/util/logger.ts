export const sendLog = async (message: string, level: string = 'error') => {
    try {
        await fetch('/api/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, level }),
        });
    } catch (error) {
        console.error('Failed to send log:', error);
    }
};
