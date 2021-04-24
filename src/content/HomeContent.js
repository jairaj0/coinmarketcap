import React from 'react';
import './contentScss/content.css';
import Header from '../header/Header';
import ContentHeader from '../contentheader/ContentHeader';
import InfoNav from '../infonav/InfoNav';
import Content from './Content';
import InfoEnd from '../infobtm/InfoEnd';

function HomeContent() {
    return (
        <div className="content">
            <Header />
            <ContentHeader />
            <InfoNav />
            <Content />
            <InfoEnd />
        </div>
    )
}

export default HomeContent





//   return (
//     <div className="content">
//       <Header />
//       <ContentHeader />
//       <InfoNav />
      



//       <InfoEnd />
//     </div>
//   );


