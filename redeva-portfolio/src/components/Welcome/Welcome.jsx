import Profile from '../../assets/welcome-pic1.png'
import Location from '../../assets/location.svg'
import Cloud from '../../assets/cloud.png'

import './Welcome.scss'

function Welcome() {
return(
    <div className='Welcome'>

        <div className='Welcome-Message'>
            <img className='Welcome-Cloud' src={Cloud} />
            <h1>Bonjour</h1>
            <img className='Welcome-Cloud' src={Cloud} />
        </div>

        <div className='Welcome-Top'>
            <img className="Welcome-Pic" src={Profile} />
            <div className='Welcome-Container'>
                <section className='Welcome-Description'>
                    <h2 className='Welcome-Name'>Eva Redon</h2>
                    <h2 className='Welcome-Job' >Développement Web | Front-end</h2>
                </section>
                <section className='Welcome-Location'>
                    <img src={Location} />
                    <p>Paris</p>
                </section>
            </div>
        </div>

    </div>


);
}

export default Welcome;