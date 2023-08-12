import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const StickCom = () => {
    return (
        <div className="stick_left">
            <GitHubIcon className='soc-icon'  style={{color: '#f0f0f0'}} />
            <LinkedInIcon className='soc-icon' style={{color:'#0077B5'}}/>
            <TwitterIcon className='soc-icon' style={{color:'#1DA1F2'}}/>
            <div className="vl"></div>
        </div>
    )
}

export default StickCom;