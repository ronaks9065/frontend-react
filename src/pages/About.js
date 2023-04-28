function About() {
    return <>

        <main role="main">
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-5">About Us</h1>
                    <p style={{fontSize:21}}>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p><a class="btn btn-primary btn-sm" href="#" role="button">RP &raquo;</a></p>
                </div>
            </div>
        </main>
        <div class="container">
        <img src={require('../images/a.png')} height="100%" width="100%"/>
        </div>

    </>
}
export default About;