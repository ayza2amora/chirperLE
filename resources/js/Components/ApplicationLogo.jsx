export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/logo.png" // Ensure this matches the correct path
            alt="Application Logo"
            style={{
                maxWidth: '55px', // Adjust width as needed
                height: 'auto',    // Maintain aspect ratio
            }}
        />
    );
}
