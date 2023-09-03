import './Bubble.scss'

function Bubble() {
    return (
        <div className="Bubble">
        <div className="Bubble-Box">
            <div className="Bubble-Text">
                <p className="Bubble-Message">
                    Hello ! I'm Eva, a french web developer from Paris.
                </p>
                <p className="Bubble-Message">
                    Fascinated by art and design since birth (or nearly), I initially decided to study art at <em>La Sorbonne</em>. However, fueled by a passion for the web and videogames, I pursued an 8-month program to learn programming with the O'Clock organization and I have received my certification on September 2023 (yay!)
                </p>
                <p className="Bubble-Message">
                    Today, I have merged my passion for art and programming, and I aim to continue in this direction by seeking various positions. So, if you're looking for someone truly motivated, always brimming with enthusiasm, and who enjoys working in a team, look no further ! Here I am !
                </p>
            </div>
            <div className="Bubble-Arrow"></div>
        </div>
        </div>
    );
}

export default Bubble;