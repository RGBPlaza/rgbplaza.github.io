window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount');
    const background = urlParams.get('background');
    //const foreground = urlParams.get('foreground');
    //const accent = urlParams.get('accent');
    document.getElementById("cost").innerHTML = `Donation of £${amount}`;
    document.getElementById("jumbotron").style.background = background;
    //window.
}