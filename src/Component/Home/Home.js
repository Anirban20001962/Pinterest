import React, { useEffect } from 'react'
import {postsAsk} from '../../Redux/reducers/postsReducer'
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
import { connect } from 'react-redux';

const Home = (props) => {
    let images = [];
    let defaultImages = [image1,image2,image3,image4,image5,image6,image6,image7,image8,image9,image10,image11]
    const {isLogin,postsAskNow} = props
    useEffect(() => {
        if(isLogin) {
            postsAskNow();
        }
    },[isLogin,postsAskNow])
    if(isLogin) {
        images = [...props.posts]
        //console.log(props.posts.posts[0])
    }
    
    const renderElement = images.map(el => <Card imagePath={el.imageUrl} /> )
    return (
        <React.Fragment>
            <div className={Styles.Heading}>
                Get your next
            </div>
            <div className={[Styles.Heading,Styles.Hflavour].join(' ')}>
                Break time idea
            </div>
            <div className={Styles.grid_container}>
                {renderElement}
            </div>
        </React.Fragment>

    )
}
const mapStateToProps = store => {
    return {
        isLogin: store.auth.isLogin,
        posts: store.posts.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postsAskNow: () => dispatch(postsAsk()),
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Home)