type props = {
    message: string;
}
function Hello ({message}: props) {
    return(
        <h1>Hello {message}!</h1>
    );
}

export default Hello;