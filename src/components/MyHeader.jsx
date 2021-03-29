import Logotype from "../pictures/footer-header-logotypes/cupcake-logotype/logoBig.jpg";

export default function MyHeader() {
    return(
    <header class="introduction">
        <div class="page-info">
            <img class="logotype"  alt="a circle with the cupcake and the text Munamii cakery inside" src={Logotype}/>
            <div class="page-title">
                <h1>Our cupcakes & cakes</h1>
            </div>
        </div>
    </header>)
};
