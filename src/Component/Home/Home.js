import React from 'react'
import Styles from './Home.module.css'
import Card from '../Card/Card';
import image1 from '../../images/download.jpeg'
import image2 from '../../images/download (1).jpeg'
import image3 from '../../images/download (2).jpeg'
import image4 from '../../images/download (3).jpeg'
import image5 from '../../images/images (1).jpeg'
import image6 from '../../images/images (2).jpeg'
import image7 from '../../images/images (3).jpeg'
import image8 from '../../images/images (4).jpeg'
import image9 from '../../images/images (5).jpeg'
import image10 from '../../images/images (6).jpeg'
import image11 from '../../images/images.jpeg'

const home = () => {
    return (
        <React.Fragment>
            <div className={Styles.Heading}>
                Get your next
            </div>
            <div className={[Styles.Heading,Styles.Hflavour].join(' ')}>
                Break time idea
            </div>
            <div className={Styles.grid_container}>
                <Card imagePath={image1} />
                <Card imagePath={image2} />
                <Card imagePath={image3} />
                <Card imagePath={image4} />
                <Card imagePath={image5} />
                <Card imagePath={image6} />
                <Card imagePath={image7} />
                <Card imagePath={image8} />
                <Card imagePath={image9} />
                <Card imagePath={image10} />
                <Card imagePath={image11} />
            </div>
        </React.Fragment>

    )
}

export default home