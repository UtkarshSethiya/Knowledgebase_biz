import './footer.css'
import fb from './images/fb.png';
import insta from './images/insta.png';
import lin from './images/in.png';
import yt from './images/yt.png';
import tw from './images/tw.png';





function Footer(){

return( 
    
    <div className="social  "  >
     
      
      <div className='contactusbutton '><a >Contact Us</a></div>
       
        
    
    
    
  

           <div > <a  href='https://www.facebook.com/bizconnectevents/' ><img src={fb} border='0' alt='2809768-facebook-media-online-social-icon-1'/></a>
                       <a  href= 'https://www.linkedin.com/company/biz-connect-events/' ><img src={lin} border='0' alt='6584510-linkedin-logo-media-social-icon'/></a>

                     <a  href='https://mobile.twitter.com/BizConnectEven1 ' ><img src={tw} border='0' alt='2809730-media-online-social-twitter-icon'/></a>

                       <a  href='https://www.instagram.com/bizconnect_global_events/' ><img src={insta} border='0' alt='2809764-instagram-media-online-social-icon'/></a>
                      <a  href='https://www.youtube.com/channel/UCGj27x3_ShNbpu97zMDiYlQ' ><img src={yt} border='0' alt='317714-video-youtube-icon'/></a><pre></pre>
                    
            </div>
</div>
   
   




);

}

export default Footer